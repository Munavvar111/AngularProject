export interface Country {
    name: {
      common: string;
    }
    currencies: {
      [key: string]: {
        name: string;
        symbol: string;
      };
    };
   
    capital: string[];
    
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms: {
      eng: {
        f: string;
        m: string;
      };
    };
    flag: string;
   
    population: number;
    
    
    flags: {
      png: string;
      svg: string;
    };
    coatOfArms: object;
    startOfWeek: string;
    capitalInfo: {
      latlng: number[];
    };
    postalCode: {
      format: string;
      regex: string;
    };
  }
  export interface Currency {
    name: string;
    symbol: string;
  }
  export interface WeatherRequest {
    type: string;
    query: string;
    language: string;
    unit: string;
  }
  
  export interface WeatherLocation {
    name: string;
    country: string;
    region: string;
    lat: string;
    lon: string;
    timezone_id: string;
    localtime: string;
    localtime_epoch: number;
    utc_offset: string;
  }
  
  export interface WeatherData {
    coord: {
      lon: number;
      lat: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level: number;
      grnd_level: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
  }
  
  