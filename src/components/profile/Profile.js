import {View, Text, StyleSheet, TextInput, Alert, Image} from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SwitchToggle from 'react-native-switch-toggle';
import {useDispatch, useSelector} from 'react-redux';
import UAE from '../../assets/UAE.jpeg';
import {
  handleLoginRequest,
  handleUserUpdateRequest,
  handleRegisterRequest,
  handleUserTransactionRequest,
} from '../../redux/actions-reducers/ComponentProps/ComponentPropsManagement';

const Profile = ({navigation}) => {
  const [on, setOn] = useState(false);
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(login_data);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [countryCodeData, setCountryCodeData] = useState('');
  const [selectedRadio, setSelectedRadio] = useState(
    login_data?.gender === 'MALE' ? 2 : 1,
  );
  const login_data = useSelector(e => e.ComponentPropsManagement.login_data);
  const dispatch = useDispatch();

  const {country_list, country_Phonecode_dropdown} = useSelector(
    e => e.ComponentPropsManagement,
  );

  console.log('LOGIN DATA', login_data);

  useEffect(() => {
    if (login_data && login_data.data) {
      setUserData(login_data.data.user);
    }
  }, [userData, password]);

  // useEffect(() => {
  //   if (country_Phonecode_dropdown) {
  //     console.log(
  //       'REGISTER PHONE CODE',
  //       country_Phonecode_dropdown[0]?.isdCode,
  //     );
  //     setCountryCodeData(country_Phonecode_dropdown[0]?.isdCode);
  //   }
  // }, [country_Phonecode_dropdown]);

  console.log(login_data),
    useEffect(() => {
      if (login_data && login_data.data) {
        dispatch(handleUserTransactionRequest());
      }
    }, [login_data]);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleDateConfirm = date => {
    // console.warn('A date has been picked: ', date);
    // setDate(date);
    console.log('DATE', date);
    // setDate(data);
    hideDatePicker();
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      {/*  */}
      <View
        style={{
          maxWidth: '95%',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
            color: '#252422',
          }}>
          User Profile
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          }}>
          <Text style={{color: '#252422'}}>Full Name</Text>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: '300',
              marginBottom: 5,
              marginTop: 20,
            }}>
            {userData?.full_name}
          </TextInput>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 20,
            marginTop: 20,
            justifyContent: 'flex-start',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            justifyContent: 'space-between',
            width: '100%',
            // paddingBottom: 20,
          }}>
          <View>
            <Text style={{marginBottom: 20, color: '#252422'}}>
              Date of birth
            </Text>
            <TextInput style={{fontWeight: '300'}}>
              {userData?.date_of_birth}
            </TextInput>
          </View>
          {/* Gender Start */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              // width: '100%',
              marginBottom: 10,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            {/* <Text>Gender</Text> */}
            <TouchableOpacity onPress={() => setSelectedRadio(1)}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.radio}>
                  {selectedRadio == 1 ? (
                    <View style={styles.radioBg}></View>
                  ) : null}
                </View>
                <Text style={styles.radioText}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedRadio(2)}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={styles.radio}>
                  {selectedRadio == 2 ? (
                    <View style={styles.radioBg}></View>
                  ) : null}
                </View>
                <Text style={styles.radioText}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Gender Close */}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            // paddingBottom: 20,
          }}>
          <Text style={{color: '#252422'}}>Nationality</Text>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: '300',
              marginBottom: 5,
              marginTop: 20,
            }}>
            {userData?.nationality}
          </TextInput>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            // paddingBottom: 20,
            marginTop: 20,
          }}>
          <Text style={{color: '#252422'}}>Email</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{
                fontSize: 20,
                fontWeight: '300',
                marginBottom: 5,
                marginTop: 20,
              }}>
              {userData?.email}
            </TextInput>
            <Text style={{color: '#981956', fontSize: 18}}> Edit</Text>
          </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'column', marginTop: 20}}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
            }}>
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // paddingBottom: 22,
                marginTop: 20,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: 20,
                  width: 30,
                }}>
                <Image source={UAE} style={{width: '100%', height: '100%'}} />
              </View>
              <Text style={{fontSize: 20, fontWeight: '300', color: '#252422'}}>
                + {userData?.phone_number?.slice(0, 3)}
              </Text>
            </View>
            <View
              style={{
                flex: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginLeft: 30,
              }}>
              <Text style={{color: '#252422'}}>Mobile</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingBottom: 0,
                  marginBottom: 0,
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  style={{fontSize: 20, fontWeight: '300', color: '#252422'}}>
                  {userData?.phone_number?.slice(3)}
                </TextInput>
                <Text style={{color: '#981956', fontSize: 18}}> Edit</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{width: '80%', marginTop: 20}}>
          <Text style={{fontWeight: '600', fontSize: 20, color: '#252422'}}>
            Address Details
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            // paddingBottom: 20,
            marginTop: 20,
          }}>
          <Text style={{color: '#252422'}}>Address</Text>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: '300',
              marginBottom: 5,
              marginTop: 20,
            }}>
            {userData?.address}
          </TextInput>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            // paddingBottom: 20,
            marginTop: 20,
          }}>
          <Text style={{color: '#252422'}}>City</Text>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: '300',
              marginBottom: 5,
              marginTop: 20,
            }}>
            {userData?.city}
          </TextInput>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            // paddingBottom: 20,
            marginTop: 20,
          }}>
          <Text style={{color: '#252422'}}>Country</Text>
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: '300',
              marginBottom: 5,
              marginTop: 20,
            }}>
            {userData?.country}
          </TextInput>
        </View>
        {/* <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            // paddingBottom: 20,
            marginTop: 20,
          }}>
          <Text style={{color: '#252422'}}>Password</Text>
          <TextInput
            value={password}
            onChangeText={e => setPassword(e)}
            placeholder="password"
            secureTextEntry
            style={{
              fontSize: 20,
              fontWeight: '400',
              marginBottom: 5,
              marginTop: 20,
            }}
          />
        </View> */}
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
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 20,
            marginTop: 20,
            fontSize: 18,
          }}>
          SAVE CHANGES
        </Text>
      </TouchableOpacity>

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
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 20,
          }}>
          <Text style={{fontSize: 13, color: '#4c4c4c'}}>
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
    paddingLeft: 40,
    paddingRight: 40,
  },
  register_btn: {
    alignItems: 'center',
    backgroundColor: '#21A5FF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    width: '50%',
    paddingRight: 40,
    borderRadius: 10,
    fontSize: 20,
  },
  radio: {
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioBg: {
    backgroundColor: '#981956',
    height: 20,
    width: 20,
    borderRadius: 20,
    // margin: 4,
  },
  radioText: {fontSize: 18, color: '#252422'},
  dropDownSelector: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Profile;
