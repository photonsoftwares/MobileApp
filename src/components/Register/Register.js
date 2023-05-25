import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {RadioButton} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Screen} from 'react-native-screens';
import {
  handleCountryDropDownRequest,
  handleCountryPhoneCodeDropDownRequest,
  handleCitiesByCountryCodeRequest,
  handleRegisterRequest,
} from '../../redux/actions-reducers/ComponentProps/ComponentPropsManagement';
import {useDispatch, useSelector} from 'react-redux';

const Register = ({navigation}) => {
  const [data, setData] = useState(country_list);
  const [selectedCountry, setSelectedCountry] = useState('Select Country');
  const [cityClicked, setCityClicked] = useState(false);
  // const [selectedPhone, setSelectedphone] = useState('Phone');
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());
  const [countryCodeData, setCountryCodeData] = useState('Phone');
  const [selectedCity, setSelectedCity] = useState('Select City');
  const [isClicked, setIsClicked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(1);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [countryCodeOpen, setCoutntryCodeOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();

  const {country_list, country_city_dropdown, country_Phonecode_dropdown} =
    useSelector(e => e.ComponentPropsManagement);

  // console.log('REGISTER PHONE CODE', country_Phonecode_dropdown.isdCode);
  // console.log('REGISTER PHONE CODE', country_Phonecode_dropdown?.countryCode);

  useEffect(() => {
    if (country_Phonecode_dropdown) {
      console.log(
        'REGISTER PHONE CODE',
        country_Phonecode_dropdown[0]?.isdCode,
      );
      setCountryCodeData(country_Phonecode_dropdown[0]?.isdCode);
    }
  }, [country_Phonecode_dropdown]);

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  // const [selectedCountryCode, setSelectedCountryCode] = useState('+91');

  useEffect(() => {
    if (country_list.length > 0) {
      setData(country_list);
    }
  }, [country_list]);

  useEffect(() => {
    if (country_city_dropdown) {
    }
    console.log(country_city_dropdown);
  }, [country_city_dropdown]);

  useEffect(() => {
    dispatch(handleCountryPhoneCodeDropDownRequest());
  }, []);

  useEffect(() => {
    dispatch(handleCountryDropDownRequest());
  }, []);

  // const showDatePicker = () => {
  //   setIsDatePickerVisible(true);
  // };

  // const hideDatePicker = () => {
  //   setIsDatePickerVisible(false);
  // };

  // const handleDateConfirm = date => {
  //   setDate(date);
  //   hideDatePicker();
  // };

  // const handleLogin = () => {
  //   if (email && password) {
  //     const res = dispatch(
  //       handleLoginRequest({
  //         // user_name: 'customer5@mail.com',
  //         // password: 'CustomerFour',
  //         user_name: email,
  //         password: password,
  //       }),
  //     );
  //     if (res.status == true) {
  //       console.log('STATUS LOGIN', res);
  //       navigation.navigate('MainApp');
  //     } else {
  //       Alert.alert(res.message);
  //     }
  //   }
  // };

  const register = async () => {
    if (name && password && email && phone) {
      const res = dispatch(
        handleRegisterRequest({
          full_name: name,
          date_of_birth: date,
          gender: selectedRadio === 1 ? 'MALE' : 'FEMALE',
          nationality: nationality,
          email,
          phone_number: countryCodeData + phone,
          country: selectedCountry,
          city: selectedCity,
          address,
          password,
        }),
      );
      // console.log('STATUS LOGIN', res);
      navigation.navigate('Login');
    }
  };
  // const handleCountryPhoneCodeDropDown = data => {
  //   if (data) {
  //     setSelectedCountryCode(data.isdCode);
  //   }
  // };

  return (
    <ScrollView>
      <View style={style.register_container}>
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
            }}>
            <TextInput
              placeholder="Name"
              // keyboardType="email-address"
              value={name}
              onChangeText={event => setName(event)}
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
              placeholder="Email Id"
              // keyboardType="email-address"
              value={email}
              onChangeText={e => setEmail(e)}
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
              keyboardType="email-address"
              value={password}
              onChangeText={e => setPassword(e)}
              style={{padding: 10, fontSize: 18}}
              secureTextEntry
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              marginBottom: 10,
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity onPress={() => setSelectedRadio(1)}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={style.radio}>
                  {selectedRadio == 1 ? (
                    <View style={style.radioBg}></View>
                  ) : null}
                </View>
                <Text style={style.radioText}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedRadio(2)}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={style.radio}>
                  {selectedRadio == 2 ? (
                    <View style={style.radioBg}></View>
                  ) : null}
                </View>
                <Text style={style.radioText}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/*  */}
          <View
            style={{
              flexDirection: 'column',
              borderBottomColor: '#ccc',
              borderBottomWidth: 2,
              paddingBottom: 8,
              width: '90%',
              marginBottom: 15,
            }}>
            <Text
              style={{padding: 10, fontSize: 18, color: '#5a5a5a'}}
              onPress={() => showDatePicker()}>
              Date Of Birth : {date.toDateString()}
            </Text>
            {/* <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            /> */}
            {datePicker && (
              <DateTimePicker
                value={date}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={true}
                onChange={onDateSelected}
                style={style.datePicker}
              />
            )}
          </View>
          {/* Nationality */}
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
              placeholder="Nationality"
              // keyboardType="email-address"
              value={nationality}
              onChangeText={event => setNationality(event)}
              keyboardType="default"
              style={{padding: 10, fontSize: 18}}
            />
          </View>
          {/* Country */}
          <View
            style={{
              flexDirection: 'column',
              borderBottomColor: '#ccc',
              borderBottomWidth: 2,
              paddingBottom: 8,
              width: '90%',
              marginBottom: 15,
            }}>
            <TouchableOpacity
              style={style.dropDownSelector}
              onPress={() => setIsClicked(!isClicked)}>
              <Text style={{padding: 8, fontSize: 18, color: '#5a5a5a'}}>
                {selectedCountry}
              </Text>
              {isClicked ? (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../../assets/up.png')}
                />
              ) : (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../../assets/down.png')}
                />
              )}
            </TouchableOpacity>
            {isClicked ? (
              <View style={style.dropdownArea}>
                <FlatList
                  data={data}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={style.countryItem}
                        onPress={() => {
                          // console.log('SINGLE COUNTRY', item.country);
                          setSelectedCountry(item.country);
                          setIsClicked(false);
                          setSelectedCountry(item.country_name);
                          dispatch(
                            handleCitiesByCountryCodeRequest(item.country_code),
                          );
                          dispatch(
                            handleCountryPhoneCodeDropDownRequest(
                              item.country_code,
                            ),
                          );
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 20,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          {item.country_name}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            ) : null}
          </View>
          {/* phoneNumber */}
          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 2,
              paddingBottom: 8,
              width: '90%',
              marginBottom: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
                flex: 1,
                padding: 10,
              }}>
              {countryCodeData}
            </Text>
            <TextInput
              placeholder="Phone No."
              // keyboardType="email-address"
              keyboardType="numeric"
              value={phone}
              onChangeText={e => setPhone(e)}
              style={{padding: 10, fontSize: 18, flex: 3}}
            />
          </View>
          {/* Address */}
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
              placeholder="ADDRESS"
              // keyboardType="email-address"
              value={address}
              onChangeText={event => setAddress(event)}
              keyboardType="default"
              style={{padding: 10, fontSize: 18}}
            />
          </View>
          {/*  */}
          {/* City */}
          <View
            style={{
              flexDirection: 'column',
              borderBottomColor: '#ccc',
              borderBottomWidth: 2,
              paddingBottom: 8,
              width: '90%',
              marginBottom: 15,
            }}>
            <TouchableOpacity
              style={style.dropDownSelector}
              onPress={() => setCityClicked(state => !state)}>
              <Text style={{padding: 8, fontSize: 18, color: '#5a5a5a'}}>
                {selectedCity}
              </Text>
              {cityClicked ? (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../../assets/up.png')}
                />
              ) : (
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../../assets/down.png')}
                />
              )}
            </TouchableOpacity>
            {cityClicked ? (
              <View style={style.dropdownArea}>
                <FlatList
                  data={country_city_dropdown}
                  renderItem={({item}) => (
                    <TouchableOpacity style={style.countryItem}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 20,
                          alignSelf: 'center',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => {
                          setSelectedCity(item.city_name);
                          setCityClicked(false);
                        }}>
                        {item.city_name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            ) : null}
          </View>
          {/*  */}
          <TouchableOpacity style={style.button} onPress={() => register()}>
            <Text style={{fontSize: 20, color: 'white'}}>Register</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={style.register_btn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{fontSize: 20, color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
const style = StyleSheet.create({
  register_container: {
    height: '100%',
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
  countryCodeItem: {
    width: '80%',
    height: 30,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logo_container: {
    display: 'flex',
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
    backgroundColor: '#5a5a5a',
    height: 20,
    width: 20,
    borderRadius: 20,
    // margin: 4,
  },
  radioText: {fontSize: 18, color: '#5a5a5a'},
  dropDownSelector: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countryDropdownSelector: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    marginBottom: 3,
    paddingBottom: 5,
  },
  dropdownArea: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    elevation: 5,
    alignSelf: 'center',
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 15,
  },
  countryItem: {
    width: '80%',
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
