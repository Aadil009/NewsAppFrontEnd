import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'

const ViewMore = ({style, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
        <View style={[styles.container ,style]}>
            <Text style={styles.text}>View More</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default ViewMore

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8 ,
        width: '100%',
        height: 50,
        backgroundColor: '#000',
        borderWidth:0.3,
        borderColor:'white'

    },
    text:{
        fontSize:20,
        fontFamily:'sofiaProBold',
        color: '#fff',

    }
})
