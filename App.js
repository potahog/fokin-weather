import React from 'react';
import { Alert } from "react-native";
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY = "0e0fb0629ae2569cf979db234fcb4c83";

export default class App extends React.Component {
  state ={
    isLoading : true
  }
  getWeather = async(latitude, longitude) =>{
    const { 
      data: { 
        main : { temp },
        weather
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading: false,
      condition: weather[0].main,
      temp: temp, 
    })
  }
  getLocation = async() =>{
    try{
      await Location.requestPermissionsAsync();
      const { 
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      // Send to API and get Waether info.
    }catch(error){
      Alert.alert("Can't find you.", "so sad");
    }

  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading? <Loading /> : <Weather temp={ Math.round(temp)} condition={ condition }/>;
  }
}
