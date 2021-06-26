import './style.scss';

import { IForecastData, IWeatherData } from './interface';

import { ApiCaller } from './apiCaller';
import { UI } from './UI';

const ACTIVE_CITY_KEY = "active_city"

export class Main {
    apiCaller: ApiCaller;
    UI: UI;
    weatherData: IWeatherData[];
    activeCity: IWeatherData['id'] = Number(localStorage.getItem(ACTIVE_CITY_KEY));
    activeCityData: IForecastData;
    constructor() {
        this.apiCaller = new ApiCaller();
        this.UI = new UI(this);
        this.weatherData = this.apiCaller.getData();
        this.setActiveCity();
        this.initRefresher();
        this.bindInputEvents();
        this.UI.renderWeatherList(this.weatherData);
    }
    
    initRefresher(){
        // refresh data every minute
        setInterval(() => {
            this.apiCaller.refreshData().then(currentData => {
                this.weatherData = currentData;
                this.UI.renderWeatherList(this.weatherData);
            });
            if(this.activeCity) {
                this.setActiveCity();
            }
        }, 60000);
    }

    bindInputEvents() {
        const weatherForm = document.getElementById('weatherForm');
        const cityButton = document.getElementById('cityButton') as HTMLButtonElement;
        const cityInput = document.getElementById('cityInput') as HTMLInputElement;
        weatherForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.apiCaller.callData(cityInput.value).then((code: IWeatherData['cod']) => {
                if (Number(code) !== 200) {
                    this.UI.showApiError();
                }
                this.weatherData = this.apiCaller.getData();
                this.UI.renderWeatherList(this.weatherData);
            });
            cityInput.value = '';
            cityButton.disabled = true;
        });
        cityInput.addEventListener('input', (event) => {
            if ((event.target as HTMLInputElement).value.length > 0) cityButton.disabled = false;
            else cityButton.disabled = true;
        });
    }

    setActiveCity() {
        const activeCity = this.weatherData.find(city => city.id === this.activeCity);
        if(activeCity) {
            this.apiCaller.getForecastData(activeCity.coord.lat, activeCity.coord.lon).then(activeForecast => {
                this.activeCityData = activeForecast;
                this.UI.renderMainView(this.activeCityData, activeCity);
            });
        }
    }

    changeActiveCity(index: IWeatherData['id']) {
        this.activeCity = index;
        localStorage.setItem(ACTIVE_CITY_KEY, String(index));
        this.setActiveCity();
    }

}


new Main();
