import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:["#474B44", "#4286F4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
    },
    Drizzle:{
        iconName:"weather-hail",
        gradient:["#89F7FE","#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈",
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:["#00C6EB","#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
    },
    Snow:{
        iconName:"snowflake",
        gradient:["#7DE2FC","#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you went to build a snowman? Fuck no",
    },
    Atomshere:{
        iconName:"weather-hail",
        gradient:["#89F7FE", "#66A6FF"],
        title: "",
        subtitle: "",
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#FEF253", "FF7300"],
        title: "Sunny as fcuk",
        subtitle: "GO get your ass burnt",
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#1F1C2C","#928DAB"],
        title: "Coluds",
        subtitle: "I know, fucking boring",
    },
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside",
    },
    Mist:{
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "It's like you habe no glasses on.",
    },
    Dust:{
        iconName:"weather-hail",
        gradient:["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕",
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
            <View style={ {...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
    },
    title:{
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize: 24
    },
    textContainer:{
        paddingHorizontal: 20,
        alignItems: "flex-start",
    }
})