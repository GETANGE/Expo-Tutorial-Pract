import React from "react";
import { StyleSheet, View, Text, SafeAreaView , StatusBar, ImageBackground} from "react-native";
import IconText from "../components/IconText";

const City = () => {
    const {container,populationWrapper,rowLayout,populationText, imageLayout, cityName, cityText, countryName} = styles

    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageLayout}>
                <Text style={[countryName, cityText]}>Kenya</Text>
                <Text style={[cityName, cityText]}>Nairobi</Text>

                <View style={[populationWrapper,rowLayout]}>
                    <IconText 
                        iconName={'user'} 
                        iconColor={"red"} 
                        bodyText={'8000'} 
                        bodyTextStyles={populationText}
                        />
                </View>
                <View style={[styles.riseSetWrapper, rowLayout]}>
                    <IconText 
                        iconName={'sunrise'} 
                        iconColor={"white"} 
                        bodyText={'10:46:58 am'} 
                        bodyTextStyles={styles.riseSetText}
                        />
                    <IconText
                    />
                    <IconText
                        iconName={'sunset'} 
                        iconColor={"white"} 
                        bodyText={'17:28:23 pm'} 
                        bodyTextStyles={styles.riseSetText}
                    />
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
    },
    populationWrapper:{
        justifyContent:'center',
        marginTop: 30
    },
    riseSetWrapper:{
        justifyContent:'space-around',
        marginTop: 30
    },
    riseSetText:{
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default City;