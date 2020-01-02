import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({ temp, condition }){
    return(
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.halfContainer}>
            </View>
        </View>
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
        fontSize: 42
    }
})