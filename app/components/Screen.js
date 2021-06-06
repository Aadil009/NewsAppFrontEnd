import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


const Screen = ({ children, isSearchFocused }) => {
    const keyboardShouldPersistTaps = isSearchFocused ? 'always' : 'never'
    return (
        <LinearGradient colors={['#4d0092', '#000',]} style={styles.linearGradient}>
            <ScrollView keyboardShouldPersistTaps={keyboardShouldPersistTaps} scrollEnabled={!isSearchFocused} style={styles.container}>
                {children}
            </ScrollView>
        </LinearGradient>

    )
}

export default Screen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 3,
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        borderRadius: 1
    },
})
