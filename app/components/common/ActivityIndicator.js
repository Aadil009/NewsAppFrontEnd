import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';


const ActivityIndicator = ({ visible }) => {
    if (!visible) return null;

    return (
        <LinearGradient colors={['#4d0092', '#000',]} style={styles.linearGradient}>
            <View style={styles.container} >
                <LottieView source={require('../../../assets/loading.json')} autoPlay={true} loop={true} />
            </View>
        </LinearGradient>
    )
}

export default ActivityIndicator

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    }
})
