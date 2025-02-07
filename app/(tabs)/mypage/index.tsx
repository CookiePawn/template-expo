import { Link } from "expo-router";
import React from "react";
import { View, StyleSheet } from 'react-native'

const MyPage = () => {
    return (
        <View style={styles.container}>
            <Link href='/(tabs)'>
                Go Home
            </Link>
            <Link href='/(stacks)/log'>
                Go Log
            </Link>
            <Link href='/(stacks)/payment'>
                Go Payment
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default MyPage;