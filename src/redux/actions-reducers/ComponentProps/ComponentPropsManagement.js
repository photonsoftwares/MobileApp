import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify';

const initialComponentPropsManagementState = {
  login_data: {},

  customer_data: {},
  country_list: [],
  country_Phonecode_dropdown: [],
  country_city_dropdown: [],
  user_transaction: [],
};

export const ComponentPropsManagement = createSlice({
  name: 'ComponentPropsManagement',

  initialState: initialComponentPropsManagementState,
  reducers: {
    handleLoginRequest: (state, payload) => {
      state.load = true;
    },
    handleLoginResponse: (state, payload) => {
      console.log('PAYLOAD LOGIN DATA', payload.data);
      state.login_data = payload.data;
      AsyncStorage.setItem('TOKEN', payload.data.jwt_token);
      state.load = false;
    },
    // Register
    handleRegisterRequest: (state, payload) => {
      // console.log('REGISTER PAYLOAD', payload);
      state.load = true;
    },
    handleRegisterResponse: (state, payload) => {
      // console.log('PAYLOAD LOGIN DATA', payload);
      // state.login_data = payload.data;
      state.load = false;
    },

    // Update User
    handleUserUpdateRequest: (state, payload) => {
      console.log('PAYLOAD UPDATE USER', payload);
      state.load = true;
    },
    handleUserUpdateResponse: (state, payload) => {
      // console.log('PAYLOAD LOGIN DATA', payload);
      // state.login_data = payload.data;
      state.load = false;
    },

    // Transaction
    handleUserTransactionRequest: (state, payload) => {
      // console.log('PAYLOAD TRA DATA', payload);
      state.load = true;
    },
    handleUserTransactionResponse: (state, payload) => {
      state.user_transaction = payload.data;
      state.load = false;
    },
    //
    handleCustomerDataRequest: (state, payload) => {
      state.load = true;
    },
    handleCustomerDataResponse: (state, payload) => {
      state.customer_data = payload.data;
      state.load = false;
    },
    handleCountryDropDownRequest: (state, payload) => {
      state.load = true;
    },
    handleCountryDropDownResponse: (state, payload) => {
      // console.log('PAYLOAD MESSAGE', payload);
      state.country_list = payload.data;
      state.load = false;
    },
    //
    handleCountryPhoneCodeDropDownRequest: (state, payload) => {
      state.load = true;
    },

    handleCountryPhoneCodeDropDownResponse: (state, payload) => {
      // console.log('PAYLOAD MESSAGE', payload);
      state.country_Phonecode_dropdown = payload.data;
      state.load = false;
    },
    handleCitiesByCountryCodeRequest: (state, payload) => {
      state.load = true;
    },

    handleCitiesByCountryCodeResponse: (state, payload) => {
      // console.log('PAYLOAD MESSAGE', payload);
      state.country_city_dropdown = payload.data;
      state.load = false;
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  handleLoginRequest,
  handleCustomerDataRequest,
  handleRegisterRequest,
  handleUserUpdateRequest,
  handleCountryDropDownRequest,
  handleUserTransactionRequest,
  handleCountryPhoneCodeDropDownRequest,
  handleCitiesByCountryCodeRequest,
} = ComponentPropsManagement.actions;

export default ComponentPropsManagement.reducer;
