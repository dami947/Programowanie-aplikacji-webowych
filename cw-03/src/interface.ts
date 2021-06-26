export interface IWeather {
    id: number,
    main: string,
    description: string,
    icon: string
}

export interface IWeatherData {
    coord: {
        lon: number,
        lat: number,
    },
    weather: IWeather[],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number,
    }
    clouds: {
        all: number // percentage
    }
    dt: number,
    sys: {
        type: number,
        id: number,
        message: number,
        country: string,
        sunrise: Date,
        sunset: Date,
    }
    timezone: number,
    id: number,
    name: string,
    cod: number
}

export interface IForecast {
    dt: number,
    sunrise: number,
    sunset: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    clouds: number,
    uvi: number,
    visibility: number,
    wind_speed: number,
    wind_gust?: number,
    wind_deg: number,
    rain?: number,
    snow?: number,
    weather: IWeather[],
}

export interface IForecastDaily extends Omit<IForecast, 'feels_like'|'temp'> {
    temp: {
        day: number,
        eve: number,
        morn: number,
        night: number,
        min?: number,
        max?: number,
    }
    feels_like: {
        day: number,
        eve: number,
        morn: number,
        night: number,
        min?: number,
        max?: number,
    },
    moon_phase: number,
    moonrise: number,
    moonset: number,
    sunrise: number,
    sunset: number,

}

export interface IForecastData {
    current: IForecast,
    daily: IForecastDaily[],
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number
}
