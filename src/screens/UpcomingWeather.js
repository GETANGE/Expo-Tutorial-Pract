import React from "react";
import { StyleSheet, SafeAreaView, Text, StatusBar, FlatList, ImageBackground} from "react-native";
import ListItem from "../components/ListItems";

const DATA = [
    {
        "dt": 1661871600,
        "main": {
            "temp": 296.76,
            "feels_like": 296.98,
            "temp_min": 296.76,
            "temp_max": 297.87,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 933,
            "humidity": 69,
            "temp_kf": -1.11
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ]
        },
        {
            "dt": 1662292800,
            "main": {
                "temp": 294.93,
                "feels_like": 294.83,
                "temp_min": 294.93,
                "temp_max": 294.93,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 935,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        },
        {
            "dt": 1662292801,
            "main": {
                "temp": 294.73,
                "feels_like": 294.23,
                "temp_min": 294.94,
                "temp_max": 294.95,
                "pressure": 1013,
                "sea_level": 1014,
                "grnd_level": 932,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clear",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ]
        }
]

const UpcomingWeather = () => {
    const {container, image} = styles

    const renderItem = ({item}) => (
        <ListItem 
            condition={item.weather[0].main} 
            dt={item.dt} 
            min={item.main.temp_min} 
            max={item.main.temp_max}
        />
    )

    return(
        <SafeAreaView style={container}>
        <ImageBackground source={require('../../assets/backgound_up.jpg')} style={image}>
            <Text>UpcomingWeather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) =>item.dt}
            />
        </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image:{
        flex:1
    }
})

export default UpcomingWeather;