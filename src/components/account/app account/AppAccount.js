import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SwitchToggle from 'react-native-switch-toggle';
import {useDispatch, useSelector} from 'react-redux';
// import {handleLoginRequest} from '../../redux/actions-reducers/ComponentProps/ComponentPropsManagement';
import {
  handleLoginRequest,
  handlelogout,
} from '../../../redux/actions-reducers/ComponentProps/ComponentPropsManagement';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Login from '../../Login/Login';
import {useNavigation} from '@react-navigation/native';

const AppAccount = () => {
  const token = useSelector(
    e => e.ComponentPropsManagement.login_data?.data?.jwt_token,
  );
  const [on, setOn] = useState(false);
  //   const {login_data} = useSelector(e => e.ComponentPropsManagement);
  const [userdata, setUserData] = useState(login_data);
  const login_data = useSelector(e => e.ComponentPropsManagement.login_data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (login_data && login_data.data) {
      setUserData(login_data.data.user);
    }
    // }, [userData, password]);
  }, [userdata]);

  // const AccountStack = createNativeStackNavigator();
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token', res => console.log(res));
    console.log('TOKEN FOR LOGOUT', token);
  };
  useEffect(() => {
    getToken();
  }, []);

  // console.log('ACCOUNT LOGIN DATA', login_data);

  const navigation = useNavigation();
  const handleLogout = () => {
    dispatch(handlelogout({}));
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View
        style={{
          backgroundColor: '#f7f7f7',
          width: '100%',
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 10,
          // paddingRight: 10,
          // height: '100%',
        }}>
        <View>
          <Text style={styles.logo}>Account</Text>
        </View>
        <View>
          <Text style={styles.account_heading}>{userdata?.full_name}</Text>
        </View>
        <View>
          <Text style={styles.account_subheading}>
            Membership #1237763884967786
          </Text>
        </View>
      </View>
      {/*  */}

      <View
        style={{
          maxWidth: '95%',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            borderBottomColor: '#981956',
            marginBottom: 20,
            borderBottomWidth: 1.5,
            paddingBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Accounts Details
          </Text>
        </View>

        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={{color: 'black'}}>Your Profile</Text>
          <AntDesign name="right" size={15} color="#981956" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginTop: 20,
            paddingBottom: 20,
          }}
          onPress={() => navigation.navigate('Recept and transaction')}>
          <Text style={{color: 'black'}}>Receipt & Transaction</Text>
          <AntDesign name="right" size={15} color="#981956" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginTop: 20,
            paddingBottom: 20,
          }}
          onPress={() => navigation.navigate('Claim your Loyality')}>
          <Text style={{color: 'black'}}>Claim Your Loyalty</Text>
          <AntDesign name="right" size={15} color="#981956" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginTop: 20,
            paddingBottom: 20,
          }}
          onPress={() => navigation.navigate('Loyalty Calculator')}>
          <Text style={{color: 'black'}}>Loyalty Calculator</Text>
          <AntDesign name="right" size={15} color="#981956" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginTop: 20,
            paddingBottom: 20,
          }}
          onPress={() => {
            navigation.navigate('Change Password');
          }}>
          <Text style={{color: 'black'}}>Change Password</Text>
          <AntDesign name="right" size={15} color="#981956" />
        </TouchableOpacity>
      </View>

      {/*  */}
      <View
        style={{
          maxWidth: '95%',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            borderBottomColor: '#981956',
            marginBottom: 20,
            borderBottomWidth: 1.5,
            paddingBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Community Preferences
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <Text style={{color: 'black'}}>Push Notification</Text>
          <SwitchToggle
            switchOn={on}
            onPress={() => setOn(state => !state)}
            circleColorOff="#eee"
            containerStyle={{width: 60, height: 15, borderRadius: 25}}
            circleColorOn="#981956"
            backgroundColorOn="#6D6D6D"
            backgroundColorOff="#C4C4C4"
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
            marginTop: 20,
          }}>
          <Text style={{color: 'black'}}>Email notification</Text>
          <SwitchToggle
            // switchOn={on}
            // onPress={() => setOn(state => !state)}
            circleColorOff="#eee"
            containerStyle={{width: 60, height: 15, borderRadius: 25}}
            circleColorOn="#981956"
            backgroundColorOn="#6D6D6D"
            backgroundColorOff="#C4C4C4"
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
            marginTop: 20,
          }}>
          <Text style={{color: 'black'}}>SMS notifications</Text>
          <SwitchToggle
            // switchOn={on}
            // onPress={() => setOn(state => !state)}
            circleColorOff="#eee"
            containerStyle={{width: 60, height: 15, borderRadius: 25}}
            circleColorOn="#981956"
            backgroundColorOn="#6D6D6D"
            backgroundColorOff="#C4C4C4"
          />
        </View>
      </View>
      <View
        style={{
          maxWidth: '95%',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            borderBottomColor: '#981956',
            marginBottom: 20,
            borderBottomWidth: 1.5,
            paddingBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            App Preferences
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <Text style={{color: 'black'}}>Enable sign-in with fingerprint</Text>
          <SwitchToggle
            switchOn={() => {}}
            onPress={() => {}}
            circleColorOff="#eee"
            containerStyle={{width: 60, height: 15, borderRadius: 25}}
            circleColorOn="#981956"
            backgroundColorOn="#6D6D6D"
            backgroundColorOff="#C4C4C4"
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
            marginTop: 20,
          }}>
          <Text style={{color: 'black'}}>Country</Text>
          <Text style={{color: 'black'}}>India</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
            marginTop: 20,
          }}>
          <Text style={{color: 'black'}}>Language</Text>
          <Text style={{color: 'black'}}>English</Text>
        </View>
      </View>

      <View
        style={{
          maxWidth: '95%',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            borderBottomColor: '#981956',
            marginBottom: 20,
            borderBottomWidth: 1.5,
            paddingBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Help
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <Text style={{color: 'black'}}>Help & Support</Text>
        </View>
      </View>
      <View
        style={{
          maxWidth: '95%',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <Text style={{color: 'black'}}>Terms of Use</Text>
        </View>
      </View>
      <View
        style={{
          maxWidth: '95%',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <Text style={{color: 'black'}}>Privacy Policy</Text>
        </View>
      </View>
      <View
        style={{
          maxWidth: '95%',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <Text style={{color: 'black'}}>Contact Us</Text>
        </View>
      </View>
      <View
        style={{
          maxWidth: '95%',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <Text style={{color: 'black'}}>Shop our Brand</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginBottom: 20,
          marginTop: 20,
          width: '90%',
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: '#981956',
          display: 'flex',
          borderRadius: 10,
          alignItems: 'center',
        }}
        onPress={() => handleLogout()}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 20,
            marginTop: 20,
            fontSize: 18,
          }}>
          Log Out
        </Text>
      </TouchableOpacity>
      <View
        style={{
          maxWidth: '95%',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <Text style={{fontSize: 13, color: '#000'}}>
            App Version 4.1.30 (You're up-to-date)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // width: '80%',
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
  },
  logo: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  account_heading: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#252422',
  },
  account_subheading: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '400',
    color: '#252422',
  },
});
export default AppAccount;
