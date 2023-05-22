import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';

import {useDispatch, useSelector} from 'react-redux';
import {handleLoginRequest} from '../../redux/actions-reducers/ComponentProps/ComponentPropsManagement';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  // const navigation = useNavigation();

  const handleLogin = async () => {
    if (email && password) {
      const res = dispatch(
        handleLoginRequest({
          user_name: email,
          password: password,
        }),
      );
      console.log('RES', res);
      await AsyncStorage.setItem('TOKEN', res.payload.data.jwt_token);
    }
    // }
  };

  return (
    <View style={style.login_container}>
      <View style={style.logo_container}>
        <Text style={style.logo}>Loyalty App</Text>
      </View>

      <View
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            borderBottomColor: '#ccc',
            borderBottomWidth: 2,
            paddingBottom: 8,
            width: '90%',
            marginBottom: 15,
            // flex: 1,
          }}>
          <TextInput
            onChangeText={e => setEmail(e)}
            placeholder="Email"
            value={email}
            placeholderTextColor="#898989"
            // keyboardType="email-address"
            keyboardType="default"
            style={{padding: 10, fontSize: 18}}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            borderBottomColor: '#ccc',
            borderBottomWidth: 2,
            paddingBottom: 8,
            width: '90%',
            marginBottom: 15,
          }}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#898989"
            keyboardType="email-address"
            onChangeText={e => setPassword(e)}
            style={{padding: 10, fontSize: 18}}
            value={password}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={style.button} onPress={() => handleLogin()}>
          <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.register_btn}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{fontSize: 20, color: 'white'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  login_container: {
    // backgroundColor: '#e6e6e6',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logo_container: {
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 28,
    color: 'gray',
    fontWeight: '500',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#981956',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    width: '50%',
    paddingLeft: 50,
    paddingRight: 50,
  },
  register_btn: {
    alignItems: 'center',
    backgroundColor: '#21A5FF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    width: '50%',
    paddingRight: 40,
    borderRadius: 10,
    fontSize: 20,
  },
});
export default Login;
