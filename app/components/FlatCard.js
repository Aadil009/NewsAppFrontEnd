import React from 'react'
import { Image, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import Title from './Title';
import Subtitle from './Subtitle'
const FlatCard = ({ item, onPress }) => {
    const { thumbnail, title, desc } = item;
    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{ uri: thumbnail }} />
                <View style={styles.contentContainer}>
                    <Title>{title}</Title>
                    <Subtitle>{desc}</Subtitle>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FlatCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        borderWidth:0.1,
        borderColor:'#fff',
        height: 80
    }, 
    image: {
        flex: 0.35,
        height: '100%',
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5
    }

})








