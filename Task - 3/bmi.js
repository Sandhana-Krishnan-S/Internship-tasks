document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate');
    const resultElement = document.getElementById('result');
    const ctx = document.getElementById('bmiChart').getContext('2d');

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Underweight', 'Normal weight', 'Overweight', 'Obese'],
            datasets: [{
                label: 'BMI Categories',
                data: [18.5, 24.9, 29.9, 40],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white'
                    }
                },
                x: {
                    ticks: {
                        color: 'white'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            }
        }
    });

    calculateButton.addEventListener('click', () => {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultElement.innerText = "Please enter valid weight and height.";
            return;
        }

        const bmi = (weight / (height * height)).toFixed(2);
        let category;

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

        resultElement.innerText = `Your BMI is ${bmi}. You are ${category}.`;

        chart.data.datasets[0].data = [
            bmi < 18.5 ? bmi : 18.5,
            bmi >= 18.5 && bmi < 24.9 ? bmi : 24.9,
            bmi >= 24.9 && bmi < 29.9 ? bmi : 29.9,
            bmi >= 29.9 ? bmi : 29.9
        ];
        chart.update();
    });
});
