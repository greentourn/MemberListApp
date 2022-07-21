import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
    return (
        <View style={style.cardList}>
            { props.children }
        </View>
    )
}
const style = StyleSheet.create({
    cardList: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 8,
        paddingTop: 16,
        backgroundColor: "pink",
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
});