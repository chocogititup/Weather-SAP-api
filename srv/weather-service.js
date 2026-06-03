const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(function () {

    this.on('getWeather', async (req) => {

        const city = req.data.city;

        const API_KEY =  "71578524ddb4f80d0294ebe5c274746c";
        

        try {

            const response =
                await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );

            return {

                city:
                    response.data.name,

                country:
                    response.data.sys.country,

                temperature:
                    response.data.main.temp,

                humidity:
                    response.data.main.humidity,

                description:
                    response.data.weather[0].description

            };

        } catch (error) {

            req.error(
                500,
                'Unable to fetch weather information'
            );

        }

    });

});