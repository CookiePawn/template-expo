import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const Payment = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome Payment!</Text>
            <Link href='/(tabs)'>
                Go Home
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Payment;