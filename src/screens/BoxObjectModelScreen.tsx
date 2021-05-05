import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style = {styles.container}>
            <Text style= { styles.title }>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        fontSize: 20,
        margin: 100,
        borderWidth: 5,
        paddingVertical: 100,
        paddingHorizontal : 20
        // backgroundColor: 'red'
    }
})
