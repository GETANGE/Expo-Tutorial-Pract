import React from "react";
import { StyleSheet, View, Text, SafeAreaView , StatusBar, ImageBackground} from "react-native";
import { Feather } from  '@expo/vector-icons'

const City = () => {
    const {container,populationWrapper,populationText, imageLayout, cityName, cityText, countryName} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageLayout}>
                <Text style={[countryName, cityText]}>Kenya</Text>
                <Text style={[cityName, cityText]}>Nairobi</Text>

                <View style={populationWrapper}>
                    <Feather name="user" size={50} color="red" />
                    <Text style={populationText}>10000</Text>
                </View>
                <View style={styles.riseSetWrapper}>
                    <Feather name="sunrise" size={50} color="white" />
                    <Text style={styles.riseSetText}>10:46:58 am</Text>
                    <Feather name="sunset" size={50} color="white" />
                    <Text style={styles.riseSetText}>17:28:23 pm</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout:{
        flex:1
    },
    cityName:{
        fontSize: 48,
    },
    countryName:{
        fontSize: 30,
    },
    cityText:{
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold',
    },
    populationWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 30
    },
    riseSetWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
})
export default City;