import './style.scss';

import { IForecastData, IWeatherData } from './interface';

import { DATA_KEY } from './apiCaller';
import { Main } from './index';
import { getDay } from './date-utils';

enum LIST_ELEMTNS {
    name = 'name',
    temp = 'temp',
    pressure = 'press',
    icon = 'icon'
}

enum WEATHER_TYPES {
    thunderstorm = '2',
    drizzle = '3',
    rain = '5',
    snow = '6',
    atmosphere = '7',
    clear = '8'
}

export class UI {
    mainContext: Main;
    constructor(main: Main) {
        this.mainContext = main;
    }
    showApiError() {
        const toastEl = document.getElementById('errorToast');
        // add class that animates the toast
        toastEl.classList.add('visible');
        toastEl.addEventListener("animationend", function handler(e) {
            toastEl.classList.remove('visible');
            // remove `animationend` event after execution for performance reasons
            e.currentTarget.removeEventListener(e.type, handler);
        });
    }


    // main UI
    renderMainView(forecastData: IForecastData, activeCity: IWeatherData) {
        if (forecastData) {
            document.getElementById('main').classList.add('main--visible');
            this.switchTheme(activeCity.weather[0].id);
            this.renderForecast(forecastData);
            // general
            document.getElementById('mainCity').innerHTML = activeCity.name;
            document.getElementById('mainWeather').innerHTML = activeCity.weather[0].description;
            document.getElementById('mainTime').innerHTML = getDay(activeCity.dt, activeCity.timezone);
            // icon
            const iconEl = document.getElementById("mainIcon") as HTMLImageElement;
            iconEl.src = `http://openweathermap.org/img/wn/${activeCity.weather[0].icon}@2x.png`;
            iconEl.alt = activeCity.weather[0].description;
            iconEl.title = activeCity.weather[0].description;
            // temp
            document.getElementById('mainTemp').innerHTML = `${activeCity.main.temp.toFixed(1)}°C`;
            document.getElementById('mainTempFeels').innerHTML = `${activeCity.main.feels_like}°C`;
            // wind
            document.getElementById('mainWindSpeed').innerHTML = `${activeCity.wind.speed}m/s`;
            document.getElementById('mainWindIcon').style.transform = `rotate(${activeCity.wind.deg}deg)`;
        }
    }

    renderForecast(forecastData: IForecastData) {
        const dailyData = forecastData.daily.slice(1);
        const wrapper = document.getElementById('forecast');
        wrapper.innerHTML = null;
        dailyData.forEach((data, index) => {
            const item = document.createElement('li');
            item.className = "forecast-item";
            // child items
            const itemDate = document.createElement('p');
            itemDate.innerText = index === 0 ? 'tomorrow' : getDay(data.dt, forecastData.timezone_offset);

            const itemIcon = document.createElement('img');
            itemIcon.innerText = getDay(data.dt, forecastData.timezone_offset);
            itemIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            itemIcon.alt = data.weather[0].description;
            itemIcon.title = data.weather[0].description;

            const itemTemp = document.createElement('p');
            itemTemp.innerText = `${data.temp.min.toFixed(1)}°C / ${data.temp.max.toFixed(1)}°C`

            // appending
            item.appendChild(itemDate);
            item.appendChild(itemIcon);
            item.appendChild(itemTemp);

            wrapper.appendChild(item);
        });
    }

    switchTheme(weatherId: number) {
        const firstNumber = String(weatherId)[0];
        const video = document.getElementById('bgVideo') as HTMLVideoElement;
        let videoSrc;
        switch (firstNumber) {
            case WEATHER_TYPES.thunderstorm: videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/582/original/dark-forest.mp4'; break;
            case WEATHER_TYPES.drizzle: videoSrc = 'https://static.videezy.com/system/resources/previews/000/044/767/original/P1140828.mp4'; break;
            case WEATHER_TYPES.rain: videoSrc = 'https://static.videezy.com/system/resources/previews/000/049/047/original/panning-and-close-up-to-rain-drop-on-the-glass-of-window.mp4'; break;
            case WEATHER_TYPES.snow: videoSrc = 'https://cdn.videvo.net/videvo_files/video/free/2015-09/small_watermarked/Slow_Snow_Seg_Comp_Flakes_preview.webm'; break;
            case WEATHER_TYPES.atmosphere: videoSrc = 'https://static.videezy.com/system/resources/previews/000/034/069/original/Mountain-rain5.mp4'; break;
            case WEATHER_TYPES.clear: videoSrc = 'https://static.videezy.com/system/resources/previews/000/039/466/original/58_28_08_19.mp4'; break;
            default:  videoSrc = 'https://static.videezy.com/system/resources/previews/000/039/466/original/58_28_08_19.mp4'; break;
        }
        // why two groups have the same key code group wtf // cloudy
        if(weatherId > 800) videoSrc = 'https://cdn.videvo.net/videvo_files/video/free/2020-07/small_watermarked/06_1596083776_preview.webm';
        video.src = videoSrc;
    }

    // aside UI
    removeCity(id: number) {
        const allCities: IWeatherData[] = JSON.parse(localStorage.getItem(DATA_KEY));
        if (allCities && id) {
            const filterdCities = allCities.filter((v) => v.id !== id);
            localStorage.setItem(DATA_KEY, JSON.stringify(filterdCities));
            this.renderWeatherList(filterdCities, true)
        }
    }

    populateListElement(element: HTMLElement, weatherData: IWeatherData) {
        const parentId = element.id;
        const iconEl = document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.icon}`) as HTMLImageElement;
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.alt = weatherData.weather[0].description;
        iconEl.title = weatherData.weather[0].description;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.name}`).innerHTML = weatherData.name;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.pressure}`).innerHTML = `${weatherData.main.pressure} hPA`;
        document.querySelector(`#${parentId} #${parentId}_${LIST_ELEMTNS.temp}`).innerHTML = `${weatherData.main.temp.toFixed(1)}°C`;
        return element;
    }

    renderWeatherElement(weatherData: IWeatherData, elementId: string) {
        const wrapper = document.getElementById('cityList');
        // main element
        const element = document.createElement('li');
        element.id = elementId;
        // other elements
        const elementBtn = document.createElement('button');
        const elementBtnContainer = document.createElement('div');
        const elementBtnContainerChild = document.createElement('div');
        elementBtn.className = "city-list-item";
        // name
        const nameEl = document.createElement('p');
        nameEl.id = `${elementId}_${LIST_ELEMTNS.name}`;
        elementBtnContainerChild.appendChild(nameEl);
        // temperature
        const tempEl = document.createElement('span');
        tempEl.id = `${elementId}_${LIST_ELEMTNS.temp}`;
        elementBtnContainerChild.appendChild(tempEl);
        // pressure
        const pressEl = document.createElement('span');
        pressEl.id = `${elementId}_${LIST_ELEMTNS.pressure}`;
        elementBtnContainerChild.appendChild(pressEl);
        //icon 
        const iconEl = document.createElement('img');
        iconEl.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        iconEl.id = `${elementId}_${LIST_ELEMTNS.icon}`;

        // remove button
        const removeBtnEl = document.createElement('button');
        removeBtnEl.className = "city-list-item-removeBtn";
        removeBtnEl.addEventListener('click', (e) => this.removeCity(weatherData.id));

        // activation
        elementBtn.addEventListener('click', () => {
            this.mainContext.changeActiveCity(weatherData.id);
        });

        // appending
        elementBtnContainer.appendChild(elementBtnContainerChild);
        elementBtnContainer.appendChild(iconEl);
        elementBtn.appendChild(elementBtnContainer);
        element.appendChild(elementBtn);
        element.appendChild(removeBtnEl);
        wrapper.appendChild(element);

        this.populateListElement(element, weatherData);
    }

    renderWeatherList(weatherData: IWeatherData[], force: boolean = false) {
        if (force) {
            const wrapper = document.getElementById('cityList');
            wrapper.innerHTML = null;
        }
        weatherData.forEach((data) => {
            const elementId = `listEl_${data.id}`;
            const element = document.getElementById(elementId) as HTMLElement;
            // to avoid unnecessaary re-rendering of all list, just refresh new content
            if (element) this.populateListElement(element, data);
            else this.renderWeatherElement(data, elementId);

        });
    }
}
