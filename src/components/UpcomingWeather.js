import React from "react";
import { StyleSheet, View , SafeAreaView, Text, StatusBar, FlatList} from "react-native";
import { Feather } from "@expo/vector-icons"

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

const Item =(props) => {
    const {dt, min, max, condition} = props

    return(
        <View style={styles.item}>
        <Feather name="sun" size={50 } color='white'/>
            <Text style={styles.date}>{dt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item 
            condition={item.weather[0].main} 
            dt={item.dt} 
            min={item.main.temp_min} 
            max={item.main.temp_max}
        />
    )

    return(
        <SafeAreaView style={styles.container}>
            <Text>UpcomingWeather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) =>item.dt}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'red'
    },
    item:{
        padding: 20,
        marginVertical:8,
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp:{
        color: 'white',
        fontSize: 20
    },
    date:{
        
    }
})

export default UpcomingWeather;