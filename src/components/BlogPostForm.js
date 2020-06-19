import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [fields, setFields] = useState(initialValues)

    useEffect(() => {
        setFields(initialValues)
    }, [initialValues])

    return (
        <View>
            <Text style={styles.label} >Enter Title:</Text>
            <TextInput
                style={styles.input}
                value={fields.title}
                onChangeText={title => setFields({...fields, title})}
            />
            <Text style={styles.label} >Enter Content:</Text>
            <TextInput
                style={styles.input}
                value={fields.content}
                onChangeText={content => setFields({...fields, content})}
            />
            <Button
                title="Save Blog Post"
                onPress={() => onSubmit(fields)}
            />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}


const styles = StyleSheet.create({

    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#AAA',
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5,
        marginTop: 10
    }
})


export default BlogPostForm