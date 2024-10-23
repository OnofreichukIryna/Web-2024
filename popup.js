document.getElementById('check-weather').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    console.log('Введене місто:', city);
    const apiKey = '430bc5114f86ae78b91ba47cbd1853f1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Відповідь API:', data);
            if (data.cod === 200) {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                document.getElementById('weather-result').innerHTML = 
                    `Температура: ${temp}°C<br>Опис: ${description}`;
            } else {
                document.getElementById('weather-result').innerHTML = 
                    'Не вдалося знайти місто. Спробуйте ще раз.';
            }
        })
        .catch(error => {
            console.error('Помилка:', error);
            document.getElementById('weather-result').innerHTML = 
                'Помилка при отриманні даних.';
        });
});
