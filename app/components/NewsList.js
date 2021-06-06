import React from 'react'
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import VerticalList from './VerticalList';
import LinearGradient from 'react-native-linear-gradient';


const NewsList = ({ route }) => {
    const data = route.params;
    const header = data[0].category.split('-').join(' ').toUpperCase()
    return (
        <LinearGradient colors={['#4d0092', '#000',]} style={styles.linearGradient}>
            <View style={styles.headerContainer}>
                <Text style={styles.categoryTitle} > {header} </Text>
            </View>
            <ScrollView contentContainerStyle={{ padding: 5 }} >
                <VerticalList data={data} />
            </ScrollView>
        </LinearGradient>
    )
}

export default NewsList

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
    },
    linearGradient:{
        flex:1,
    },
    categoryTitle: {
        fontSize: 30,
        fontFamily:'SofiaProMedium',
        textTransform: 'uppercase',
        color: 'white'
    }
})
