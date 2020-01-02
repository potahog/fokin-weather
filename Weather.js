import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm:{
        iconName:"",
        gradient:[],
    },
    Drizzle:{
        iconName:"",
        gradient:[],
    },
    Rain:{
        iconName:"",
        gradient:[],
    },
    Snow:{
        iconName:"",
        gradient:[],
    },
    Atomshere:{
        iconName:"",
        gradient:[],
    },
    Clear:{
        iconName:"",
        gradient:[],
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#1F1C2C","#928DAB"],
    },
    Haze:{
        iconName:"",
        gradient:[],
    },
    Mist:{
        iconName:"",
        gradient:[],
    },
    Dust:{
        iconName:"",
        gradient:[],
    },
}

export default function Weather({ temp, condition }){
    return(
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName || "weather-sunset"} color="white"/>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.halfContainer}>
            </View>
        </LinearGradient>
    );
}

Weather.propType = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atomshere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired,
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white",
    }
})