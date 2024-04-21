import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { Feather } from  '@expo/vector-icons'

const IconText =(props) => {

    const {iconColor, iconName, bodyText, bodyTextStyles} = props;

    return(
        <View styles={styles.container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textTheme:{
        fontWeight: 'bold',
    },
    container:{
        alignItems: 'center',
    }
})

export default IconText;