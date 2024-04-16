import React from "react";
import { StyleSheet, View , SafeAreaView, Text, StatusBar} from "react-native";

const UpcomingWeather = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text>UpcomingWeather</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: StatusBar.currentHeight || 0
    }
})

export default UpcomingWeather;