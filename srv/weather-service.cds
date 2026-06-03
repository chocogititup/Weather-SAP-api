service WeatherService{
    action getWeather(
        city : String
    ) returns Weather;
}

type Weather {
    city : String;
    country : String;
    temprature : Decimal(10,2);
    humidity: Integer;
    description : String;
}
