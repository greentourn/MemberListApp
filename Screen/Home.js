
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { globalstyle } from '../StyleSheet/GlobalStyleSheet';
import Card from '../components/Card';

export default function HomeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [filterData, setfilterData] = useState([])
    const [data, setData] = useState([]);
    const [search, setsearch] = useState('')
    const getData = async () => {
        try {
            const response = await fetch('https://powerful-reef-47354.herokuapp.com/members');
            const json = await response.json();
            setData(json);
            setfilterData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);


    const pressHandler = (item) => {
        navigation.navigate('Details', item)
    }

    const searchFilter =(text) => {
        if (text){
            const newData = data.filter((item)=>{
                const itemData = item.nickname.th ? item.nickname.th:'';
                const textData = text;
                return itemData.indexOf(textData) > -1;
            });
            setfilterData(newData);
            setsearch(text);
        }else{
            setfilterData(data);
            setsearch(text);
        }
    }

    const ItemView = ({ item }) => {
        return (
            <TouchableOpacity style={globalstyle.container} onPress={() => pressHandler(item)}>
                <Card>
                    <Image source={{ uri: 'https://murmuring-mountain-39162.herokuapp.com/images/' + item.id + '/s/' + item.image_name }}
                        style={style.image} />
                    <Text style={style.nickname}>{item.nickname.th}</Text>
                    <View style={style.info}>
                        <Text style={style.Text}>{item.firstname.th} {item.lastname.th}</Text>
                        <Text style={style.Text}>{item.firstname.en} {item.lastname.en}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        )
    }

    return (
        <View style={style.boderScreen}>
            <TextInput
                style={style.textInput}
                value={search}
                placeholder="ค้นหาชื่อเล่น"
                onChangeText={(text) => searchFilter(text)}
            />
            {isLoading ? <ActivityIndicator size="large" color="deeppink" style={style.loading} /> : (
                <FlatList
                    data={filterData}
                    numColumns={2}
                    keyExtractor={({ id }, index) => id}
                    renderItem={ItemView}
                />
            )}
        </View>
    );
}

const style = StyleSheet.create({
    boderScreen: {
        padding: 0,
        margin0: 0,
        backgroundColor: "mistyrose",
    },
    textInput: {
        margin: 8,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'deeppink',
        borderRadius: 4,
    },
    loading: {
        height: "100%",
        alignSelf: 'center',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        backgroundColor: '#ffff',
        alignItems: 'stretch',
        borderRadius: 100,
    },
    Text: {
        textAlign: 'center',
        fontSize: 12,
        alignItems: 'stretch',
        margin: 4,
        // backgroundColor:"green",
    },
    info: {
        margin: 8,
    },
    nickname: {
        position: 'absolute',
        top: 95,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 2,
        color: "deeppink",
        fontSize: 16,
        borderRadius: 8,
        elevation: 1,
    }
});

