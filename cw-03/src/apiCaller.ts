import { IForecastData, IWeatherData } from './interface';

export const DATA_KEY = "weather_data"
const API_KEY = "cbeeb4917456a9dc5bef570967628521";

export class ApiCaller {
    constructor() {
        this.callData();
    }

    async callData(city?: string) {
        if(city) {
            const weather = await this.getWeatherData(city);
            if(weather && weather.cod === 200) {
                this.saveData(weather);
            }

            return weather.cod;
        } 
    }

    async refreshData(): Promise<IWeatherData[]> {
        const currentCities = (JSON.parse(localStorage.getItem(DATA_KEY)) as IWeatherData[])
            ?.map(v => v.name) || [];
        const newCities = Promise.all(currentCities.map(async (city) => {
            const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const weatherResp = await fetch(apiURL);
            const weatherData: IWeatherData = await weatherResp.json();
            this.saveData(weatherData);

            return weatherData;
        }));
        return newCities;
    }

    async getWeatherData(city: string): Promise<IWeatherData> {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const weatherResp = await fetch(apiURL);
        const weatherData: IWeatherData = await weatherResp.json();

        return weatherData;
    }

    async getForecastData(lat: number, long: number): Promise<IForecastData> {
        const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`;
        const forecastResp = await fetch(apiURL);
        const forecastData: IForecastData = await forecastResp.json();
        // we don't need more daily data
        forecastData.daily = forecastData.daily.slice(0, 6);

        return forecastData;
    }

    saveData(data: IWeatherData) {
        const currentData = this.getData();
        const indexInLS = currentData.findIndex((val) => val.id === data.id);
        if(indexInLS !== -1) {
            // data already saved, refresh one item
            currentData[indexInLS] = data;
            localStorage.setItem(DATA_KEY, JSON.stringify(currentData));
            return;
        }

        localStorage.setItem(DATA_KEY, JSON.stringify([...currentData, data]));
    }

    getData(): IWeatherData[] {
        const data = localStorage.getItem(DATA_KEY);
        if (data)
            return JSON.parse(data);
        return [];
    }
}
