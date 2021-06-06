import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, Image, View, Dimensions, AppState } from 'react-native';
import newsApi from '../api/newsApi';
import ActivityIndicator from './common/ActivityIndicator';
import Close from './common/Close';
import HorizontalList from './HorizontalList';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window')

const NewsDetail = ({ route }) => {

    const [news, setNews] = useState({});
    const [relatedNews, setRelatedNews] = useState([])
    const { id: postId, category: postCategory } = route.params.item;
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation();

    const fetchPost = async id => {
        setLoading(true) // loading true before api request
        const result = await newsApi.getSingle(id);
        setNews(result)

    }

    const fetchRelatedPost = async (category) => {
        const result = await newsApi.getByCategory(postCategory, 6);
        setRelatedNews(result.filter(item => item.id !== postId));

        setLoading(false) //loading set false again
    }

    useEffect(() => {
        fetchPost(postId);
        fetchRelatedPost(postCategory)
    }, [])

    const { title, content, thumbnail } = news;
    return (
        <>
            <ActivityIndicator visible={loading} />
            <LinearGradient colors={['#4d0092', '#000',]} style={styles.linearGradient}>
                <ScrollView style={styles.container}>
                    <Image style={styles.image} source={{ uri: thumbnail }} />
                    <View style={styles.contentContainer} >
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.content}>{content}</Text>
                    </View>
                    <View style={styles.relatedPostContainer} >
                        <HorizontalList data={relatedNews} title='Related Posts' />
                    </View>
                </ScrollView>
                <Close onPress={() => navigation.popToTop()} />
            </LinearGradient>
        </>
    )
}

export default NewsDetail

const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: width,
        height: height / 3,

    },
    contentContainer: {
        padding: 5
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        color: '#fff',
        fontFamily: 'SofiaProSemiBold'
    },
    content: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'SofiaProRegular'
    },
    relatedPostContainer: {
        padding: 10
    }
})
