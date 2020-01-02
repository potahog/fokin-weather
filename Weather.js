import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Weather({ temp, condition }){
    return(
        <View style={styles.container}>
            <Text>{ condition }</Text>
            <Text>{ temp }</Text>
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
    }
})