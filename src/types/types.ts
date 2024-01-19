export type User = {
  name: {
    title: string,
    first: string,
    last: string,
  },
  id: {
    name: string,
    value: string,
  }
  gender: string,
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  },
  location: {
    city: string,
    coordinates: {
      latitude: string,
      longitude: string,
    }
  },
  email: string,
  weather: Weather;
  minTemperature?: number;
  maxTemperature?: number;
}

export type Weather = {
  latitude: number,
  longitude: number,
  current_weather: {
    temperature: number,
    weathercode: number,
  },
  hourly: {
    time: string[],
    temperature_2m: number[],
  }
}

export type WeatherInfo = {
  icon: string;
  description: string;
};

export type Modal = {
  time: string[],
  temperature: number[],
}
