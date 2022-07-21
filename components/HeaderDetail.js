import react from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Ionicons name="flower" size={24} color="pink" />
                <Text style={style.headerText}>รายละเอียด</Text>
                <Ionicons name="flower" size={24} color="pink" />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width:'75%',
        alignItems:'center',
        justifyContent:'center',
        margin:0,
        padding:0,
    },
    header: {
        flexDirection:'row',
        alignItems:'stretch',
        justifyContent:'center',
        margin:0,
        padding:0,
    },
    headerText: {
        fontSize:18,
        fontWeight:'800',
        color:'mediumorchid',
        marginHorizontal:8,
    }
})