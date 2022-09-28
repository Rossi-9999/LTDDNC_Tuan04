import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.herder}>

        <View style={styles.herder11}>
          <Image style={{ marginLeft: 0 }} source={require('./img/book.png')} />
        </View>
        <View style={styles.herder12}>
          <Text>Nguyên hàm tích phân và ứng dụng</Text>
          <Text>Cung cấp bởi Tiki Trading</Text>
          <Text>141.800 đ</Text>
          <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>141.800 đ</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('./img/btnminus.png')} />
            <Text >1</Text>
            <Image source={require('./img/btnadd.png')} />
            <Text style={{ marginLeft: 150, color: 'blue' }}>Mua sau</Text>
          </View>
        </View>
      </View>
      <View style={styles.herder2}>
        <View style={styles.herder21}>
          <Text style={{ marginLeft: 0}} >Mã giảm giá đã lưu</Text>
          <Text style={{ marginLeft: 30, color: 'blue'}}>Xem tại đây</Text>
        </View>

        <View style={styles.herder22}>
        <View style={{ borderWidth: 1,borderColor: "thistle", width: 150, marginRight: 50}}><TextInput placeholder='Mã giảm giá' ></TextInput></View>
        
        <Button title='Áp dụng' ></Button>
        </View>


      </View>
      <View style={styles.body1}>
        <Text>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <Text style={{ color: 'blue'}}>Nhập tại đây?</Text>
      </View>
      <View style={styles.body2}>
        <View style={styles.body21}>
        <Text style={{ marginRight: 150, fontSize: 25}}>Tạm tính</Text>
        <Text style={{ color: 'red', fontSize: 25}}>141.800 đ</Text>
        </View>
        <View style={styles.body22}>
        
        </View>
        <View style={styles.body23}>
        <Text style={{ marginRight: 130, fontSize: 25}}>Thành tiền</Text>
        <Text style={{ color: 'red', fontSize: 25}}>141.800 đ</Text>
        </View>
        <View style={styles.body24}>
        <Button color= 'red' title='Tiến hành đặt hàng' ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  herder: {
    backgroundColor:'#fff',
    flexDirection: 'row',
    flex: 1,
    marginTop: 40,
    marginLeft: 0,
    display: 'flex',
    width: 400
  },
  herder11: {
    width: '30%',


  },
  herder12: {

    width: '70%'
  },
  herder2: {
    backgroundColor:'#fff',
    flex: 1,
  },
  herder21: {
    width: 400,
    flexDirection: 'row',
  },
  herder22: {
    marginTop: 30,
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "50%"
  },
  body1: {
    backgroundColor:'#fff',
   // flex: 1,
   height: 100,
    flexDirection: "row", 
    width: 400,
  },
  body2: {
    flex: 3,
    backgroundColor:'#fff',
    width: 400,
  },
  body21:{
    height: 50,
    flexDirection: "row", 
  },
  body22:{
    flex: 2,
    backgroundColor: '#D3D3D3'
  },
  body23:{
    flexDirection: "row", 
    flex: 1
  },
  body24:{
    flex: 1
  },
  
});
