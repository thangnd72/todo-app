import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { deleteBlogPost } from '../store/Reducer'

const IndexScreen = () => {


    const navigation = useNavigation()
    const dispatch = useDispatch()
    
    const blogs = useSelector(state => state.blogPosts)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('Add Todo')}
                >
                    <Icon name="plus" size={30} />
                </TouchableOpacity>
            ),
        })
    }, [navigation])

    return (
        <View>
            <FlatList
                data={blogs}
                keyExtractor={blogPost => `A.${blogPost.id}`}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('Show', { id: item.id }) }}>
                            <View style={styles.row}>
                                <Text style={styles.title} >{item.title} - {item.id} </Text>
                                <TouchableOpacity onPress={() => dispatch(deleteBlogPost(item.id))} >
                                    <Icon style={styles.icon} name="trash-2" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen