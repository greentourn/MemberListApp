import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DetailsScreen({ route }) {
  const item = route.params;
  return (

    <View style={style.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['lightpink', 'transparent']}
        style={style.background}
      />
      <ScrollView style={style.scrollview}>
        <Image source={{ uri: 'https://murmuring-mountain-39162.herokuapp.com/images/' + item.id + '/s/' + item.image_name }}
          style={style.image} />
        <Text style={style.title}>
          <Text>{item.nickname.th}</Text>
          {"\n"}
          <Text style={style.nameEn}>({item.nickname.en})</Text>
        </Text>
        <Text style={style.baseText}>ชื่อจริง : <Text style={style.innerText}>{item.firstname.th} {item.lastname.th}</Text></Text>
        <Text style={style.baseText}>วันเกิด : <Text style={style.innerText}>{item.birthDay}</Text></Text>
        <Text style={style.baseText}>ส่วนสูง : <Text style={style.innerText}>{item.height} เซนติเมตร</Text></Text>
        <Text style={style.baseText}>จังหวัด : <Text style={style.innerText}>{item.province}</Text></Text>
        <Text style={style.baseText}>งานอดิเรก : <Text style={style.innerText}>{item.hobbies}</Text></Text>
        <Text style={style.baseText}>สิ่งที่ชอบ : <Text style={style.innerText}>{item.likes}</Text></Text>
        <Text style={style.baseText}>สมาชิกรุ่นที่ : <Text style={style.innerText}>{item.generation}</Text></Text>
        <View style={style.row}>
          <Image style={style.ig} source={require('../image/instagram.png')} />
          <Text>{item.instagram}</Text>
        </View>
      </ScrollView>
    </View>

  );
}
const style = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#fff',
    height: '100%',
  },
  scrollview:{
    padding:16,
  },
  baseText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'deeppink',
    margin: 4,
  },
  innerText: {
    color: '#000'
  },
  ig: {
    width: 40,
    height: 40,
    margin: 8,
  },
  row: {
    flexDirection: 'row',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
  nameEn: {
    fontSize: 12,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: 'deeppink',
  },
  title: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    color: "deeppink",
    margin: 8,
    paddingBottom: 8,
    paddingTop: 4,
    marginHorizontal: 60,
    backgroundColor: "lavenderblush",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  }
});