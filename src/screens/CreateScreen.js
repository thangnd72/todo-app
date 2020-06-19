import React from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BlogPostForm from '../components/BlogPostForm'
import { addBlogPost } from '../store/Reducer'

const CreateScreen = () => {

    const navigation = useNavigation()

    const dispatch = useDispatch()
    const onAddBlog = (blog) => {
        dispatch(addBlogPost(blog))
    }

    const onSubmit = (blog) => {
        onAddBlog(blog)
        navigation.navigate('Todo App')
    }

    return <BlogPostForm
        onSubmit={onSubmit}
    />
}

const styles = StyleSheet.create({})

export default CreateScreen