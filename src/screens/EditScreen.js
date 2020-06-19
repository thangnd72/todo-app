import React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import BlogPostForm from '../components/BlogPostForm'
import { useMemo } from 'react'
import { useState , useEffect } from 'react'
import { editBlogPost} from '../store/Reducer'
import { useNavigation } from '@react-navigation/native'

const EditScreen = ({ route }) => {

    const [value, setValue] = useState({})
    const dispatch = useDispatch()
    const id = useMemo(() => route.params && route.params.id, [route])
    const blogs = useSelector(state => state.blogPosts)

    const navigation = useNavigation()

    useEffect(() => {
        const data = blogs.find(elem => elem.id === id )
        setValue(data)
    }, [id, blogs])

    return <BlogPostForm
        initialValues={value}
        onSubmit={(blog) => {
            console.log(blog);
            dispatch(editBlogPost(blog));
            navigation.goBack()
        }}
    />
}

const styles = StyleSheet.create({})

export default EditScreen