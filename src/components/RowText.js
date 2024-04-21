import React from "react";
import { Text, View} from "react-native";


const RowText = (props) => {

    const {messageOneStyles, messageTwoStyles} = props
    const {messageOne, messageTwo, containerStyles} = props

    return(
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo} </Text>
        </View>
    )
}

export default RowText;