document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    function updateDisplay() {
        if (display.innerText === '') {
            display.innerText = '0';
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                display.innerText = '';
            } else if (value === 'del') {
                display.innerText = display.innerText.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else if (value === '**') {
                display.innerText = eval(display.innerText + '**2');
            } else {
                if (display.innerText === '0') {
                    display.innerText = value;
                } else {
                    display.innerText += value;
                }
            }
            updateDisplay();
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            display.innerText = display.innerText.slice(0, -1);
            updateDisplay();
        }
    });

    updateDisplay();
});
