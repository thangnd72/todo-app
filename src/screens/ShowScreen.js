import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'

const ShowScreen = ({ route }) => {

    const navigation = useNavigation()
    const blogs = useSelector(state => state.blogPosts)
    const id = useMemo(() => route.params && route.params.id, [route])

    const [blog, setBlog] = useState({})

    useEffect(() => {
        const data = blogs.find(elem => elem.id === id )
        setBlog(data)
    }, [id, blogs])

    console.log(id);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Edit', {id})}
                >
                    <Icon name="pencil" size={30} />
                </TouchableOpacity>
            ),
        })
    }, [navigation])


    return (
        <View>
            <Text style={styles.title} >{blog.title}</Text>
            <Text style={styles.content}>{blog.content}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 15,
        marginLeft: 10
    },
    content: {
        marginLeft: 10
    }
})

export default ShowScreen
