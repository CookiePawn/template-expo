import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { useRouter } from "expo-router";
import Constants from "expo-constants";
import { UserBoard } from "@/models";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const Log = () => {
    const router = useRouter();

    const { data: boards = [], refetch } = useQuery({
        queryKey: ['/user/boards'],
        select: (response: AxiosResponse<UserBoard[]>) => response.data,
        placeholderData: keepPreviousData,
    })

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>LOG</Text>
            </View>
            <Text>Mode: {Constants.expoConfig?.extra?.ENV}</Text>
            <Text>base url: {Constants.expoConfig?.extra?.API_BASE_URL}</Text>
            <FlatList
                data={boards}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.nickName}</Text>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.homeButton}
                onPress={() => router.push('(tabs)')}
            >
                <Text style={styles.homeButtonText}>홈으로</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
    },
    headerContainer: {
        maxHeight: 250,
        overflow: 'hidden',
    },
    headerText: {
        width: '100%',
        lineHeight: 100,
        color: 'white',
        fontSize: 120,
        paddingTop: 180,
        paddingLeft: 20,
        backgroundColor: '#0064FF',
    },
    homeButton: {
        position: 'absolute',
        bottom: 40,
        height: 60,
        width: '95%',
        borderRadius: 13,
        backgroundColor: '#0064FF',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    homeButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        padding: 0,
    },
})

export default Log;