import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Settings() {
    return (
        <View style={styles.container }>
            <Text>Book a conversation for TREATMENT will come soon!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})