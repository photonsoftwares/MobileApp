import {put, takeEvery, all} from 'redux-saga/effects';
import {toast} from 'react-toastify';

function* handleLoginRequest(e) {
  // console.log('E', e);
  const {username, password} = e.payload;
  const response = yield fetch(
    `http://13.233.134.56:8089/v1/loyalty/auth/user-login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e.payload),
    },
  );
  const jsonData = yield response.json();
  // console.log('FOR REGISTER JSONDATA', jsonData.user);
  if (jsonData.data) {
    //   toast.success('Login Successfully');
    //   localStorage.setItem('client_id', jsonData.client_id);
    //   localStorage.setItem('login_data', JSON.stringify(jsonData));
    yield put({
      type: 'ComponentPropsManagement/handleLoginResponse',
      data: jsonData,
    });
    //   location.replace('/');
  } else {
    //   toast.error('Please enter correct username and password');
    yield put({
      type: 'ComponentPropsManagement/handleLoginResponse',
      data: {},
    });
  }
  return jsonData;
}
// handle Register User
function* handleRegisterRequest(e) {
  // console.log('EEE', e);
  // const {username, password} = e.payload;
  const response = yield fetch(
    `http://13.233.134.56:8089/v1/loyalty/auth/user-registration`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e.payload),
    },
  );
  const jsonData = yield response.json();
  return jsonData;
  // console.log('JSON DATA REGISTER', jsonData);
  return jsonData;
  // if (jsonData.data) {
  //   //   toast.success('Login Successfully');
  //   //   localStorage.setItem('client_id', jsonData.client_id);
  //   //   localStorage.setItem('login_data', JSON.stringify(jsonData));
  //   yield put({
  //     type: 'ComponentPropsManagement/handleRegisterResponse',
  //     data: jsonData,
  //   });
  //   //   location.replace('/');
  // } else {
  //   //   toast.error('Please enter correct username and password');
  //   yield put({
  //     type: 'ComponentPropsManagement/handleRegisterResponse',
  //     data: {},
  //   });
  // }
}
// Transaction DATA

function* handleUserTransactionRequest(e) {
  // console.log('EEE', e);
  const response = yield fetch(
    `http://13.233.134.56:8089/v1/loyalty/mobile/get-user-transactions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e.payload),
    },
  );
  const jsonData = yield response.json();

  // console.log('JSON DATA TRASANTION', jsonData);
  if (jsonData) {
    if (jsonData.data && jsonData.data.length > 0) {
      // toast.success('Login Successfully');
      // console.log('LOGIN successfull');
      yield put({
        type: 'ComponentPropsManagement/handleUserTransactionResponse',
        data: jsonData.data,
      });
      // location.replace('/');
    } else {
      // toast.error('Please enter correct username and password');
      // console.log('LOGIN UNsuccessfull');
      yield put({
        type: 'ComponentPropsManagement/handleUserTransactionResponse',
        data: [],
      });
    }
  }
}

// UPDATE USER

function* handleUserUpdateRequest(e) {
  // console.log('EEE', e);
  const response = yield fetch(
    `http://13.233.134.56:8089/v1/loyalty/mobile/update-user`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e.payload),
    },
  );
  const jsonData = yield response.json();

  console.log('JSON UPDATED DATA', jsonData);
  // if (jsonData) {
  //   if (jsonData.data && jsonData.data.length > 0) {
  //     // toast.success('Login Successfully');
  //     // console.log('LOGIN successfull');
  //     yield put({
  //       type: 'ComponentPropsManagement/handleUserUpdateResponse',
  //       data: jsonData.data,
  //     });
  //     // location.replace('/');
  //   } else {
  //     // toast.error('Please enter correct username and password');
  //     // console.log('LOGIN UNsuccessfull');
  //     yield put({
  //       type: 'ComponentPropsManagement/handleUserUpdateResponse',
  //       data: [],
  //     });
  //   }
  // }
}

//
function* handleCitiesByCountryCodeRequest(e) {
  // console.log('CitiesByCountryCode', e);
  const response = yield fetch(
    `http://13.233.134.56:8089/v1/loyalty/auth/get-list-cities/${e.payload}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const jsonData = yield response.json();
  // console.log('JSON DATA CITY', jsonData);
  if (jsonData) {
    if (jsonData.data && jsonData.data.length > 0) {
      yield put({
        type: 'ComponentPropsManagement/handleCitiesByCountryCodeResponse',
        data: jsonData.data,
      });
    } else {
      yield put({
        type: 'ComponentPropsManagement/handleCitiesByCountryCodeResponse',
        data: [],
      });
    }
  }
}

//
function* handleCountryDropDownRequest() {
  const response = yield fetch(
    `http://13.233.134.56:8089/v1/loyalty/get-country-list`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const jsonData = yield response.json();
  // console.log('JSON DATA', jsonData.data);

  if (jsonData) {
    if (jsonData.data && jsonData.data.length > 0) {
      // toast.success('Login Successfully');
      // console.log('LOGIN successfull');
      yield put({
        type: 'ComponentPropsManagement/handleCountryDropDownResponse',
        data: jsonData.data,
      });
      // location.replace('/');
    } else {
      // toast.error('Please enter correct username and password');
      // console.log('LOGIN UNsuccessfull');
      yield put({
        type: 'ComponentPropsManagement/handleCountryDropDownResponse',
        data: [],
      });
    }
  }
}
function* handleCountryPhoneCodeDropDownRequest() {
  // const {user_name, password} = e.payload;
  // console.log('E PAYLOAD', e);
  const response = yield fetch(
    `http://13.233.134.56:8089/v1/loyalty/get-isd-code/OMN`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const jsonData = yield response.json();
  // console.log('E PAYLOAD PHONE', jsonData);
  if (jsonData.data) {
    yield put({
      type: 'ComponentPropsManagement/handleCountryPhoneCodeDropDownResponse',
      data: jsonData.data,
    });
  } else {
    // toast.error('Please enter correct username and password');
    // console.log('LOGIN UNsuccessfull');
    yield put({
      type: 'ComponentPropsManagement/handleCountryPhoneCodeDropDownResponse',
      data: [],
    });
  }
}

// function* handleAllPointActivityAPIRequest(e) {
//   // console.log("E", e);
//   const {login_data} = e.payload;
//   const response = yield fetch(
//     `http://13.233.25.68:8089/v1/loyalty/get-point-activity/${login_data.client_id}`,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     },
//   );
//   const jsonData = yield response.json(e);

//   if (jsonData) {
//     yield put({
//       type: 'ComponentPropsManagement/handleAllPointActivityAPIResponse',
//       data: jsonData,
//     });
//   } else {
//     yield put({
//       type: 'ComponentPropsManagement/handleAllPointActivityAPIResponse',
//       data: '',
//     });
//   }
// }

// function* handleAllTransactiontActivityAPIRequest(e) {
//   // console.log("E", e);
//   const {login_data} = e.payload;
//   // console.log("LOGIN DATA", login_data.client_id);
//   const response = yield fetch(
//     `http://13.233.25.68:8089/v1/loyalty/get-point-activity/${login_data.client_id}`,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     },
//   );
//   const jsonData = yield response.json(e);
//   // console.log("SAGA RESPONSE TRANSACTION", jsonData);
//   if (jsonData) {
//     yield put({
//       type: 'ComponentPropsManagement/handleAllTransactionActivityAPIResponse',
//       data: jsonData,
//     });
//   } else {
//     yield put({
//       type: 'ComponentPropsManagement/handleAllTransactionActivityAPIResponse',
//       data: '',
//     });
//   }
// }

// function* handleGetLanguageRequest(e) {
//   const response = yield fetch(
//     'http://13.233.25.68:8089/v1/loyalty/get-languages',
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // body: JSON.stringify(e.payload),
//     },
//   );
//   const jsonData = yield response.json();
//   if (jsonData) {
//     if (jsonData.language && jsonData.language.length > 0) {
//       const t1 = [];
//       jsonData.language.map(item => {
//         t1.push({label: item, value: item});
//       });
//       yield put({
//         type: 'ComponentPropsManagement/handleGetLanguageResponse',
//         data: t1,
//       });
//       return;
//     }
//     toast.error('Language not available');
//     yield put({
//       type: 'ComponentPropsManagement/handleGetLanguageResponse',
//       data: [],
//     });
//   }
// }

// function* handleGetNationalityRequest(e) {
//   const response = yield fetch(
//     'http://13.233.25.68:8089/v1/loyalty/get-nationality',
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // body: JSON.stringify(e.payload),
//     },
//   );
//   const jsonData = yield response.json();
//   if (jsonData) {
//     if (jsonData.nationality && jsonData.nationality.length > 0) {
//       const t1 = [];
//       jsonData.nationality.map(item => {
//         t1.push({label: item, value: item});
//       });
//       yield put({
//         type: 'ComponentPropsManagement/handleGetNationalityResponse',
//         data: t1,
//       });
//       return;
//     }
//     toast.error('Nationality not available');
//     yield put({
//       type: 'ComponentPropsManagement/handleGetNationalityResponse',
//       data: [],
//     });
//   }
// }

// function* handleCityDetailDropdownRequest(e) {
//   const {country} = e.payload;

//   const response = yield fetch(
//     `http://13.233.25.68:8089/v1/loyalty/get-city-details/${country}`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // body: JSON.stringify(e.payload),
//     },
//   );
//   const jsonData = yield response.json();
//   if (jsonData) {
//     if (jsonData.length > 0) {
//       const t1 = [];
//       jsonData.map(item => {
//         t1.push({...item, label: item.city_name, value: item.city_code});
//       });

//       yield put({
//         type: 'ComponentPropsManagement/handleCityDetailDropdownResponse',
//         data: t1,
//       });
//       return;
//     }
//     toast.error('City not available');
//     yield put({
//       type: 'ComponentPropsManagement/handleCityDetailDropdownResponse',
//       data: [],
//     });
//   }
// }

// function* handleLocationDetailDropdownRequest(e) {
//   const {country} = e.payload;

//   const response = yield fetch(
//     `http://13.233.25.68:8089/v1/loyalty/get-location-details/${country}`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // body: JSON.stringify(e.payload),
//     },
//   );
//   const jsonData = yield response.json();
//   if (jsonData) {
//     if (jsonData.length > 0) {
//       const t1 = [];
//       jsonData.map(item => {
//         t1.push({
//           ...item,
//           label: item.location_name,
//           value: item.location_id,
//         });
//       });

//       yield put({
//         type: 'ComponentPropsManagement/handleLocationDetailDropdownResponse',
//         data: t1,
//       });
//       return;
//     }
//     toast.error('Location not available');
//     yield put({
//       type: 'ComponentPropsManagement/handleLocationDetailDropdownResponse',
//       data: [],
//     });
//   }
// }

// function* handleGetCountryDropdownRequest(e) {
//   const response = yield fetch(
//     `http://13.233.25.68:8089/v1/loyalty/get-country-list`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // body: JSON.stringify(e.payload),
//     },
//   );
//   const jsonData = yield response.json();
//   if (jsonData) {
//     if (jsonData.data && jsonData.data.length > 0) {
//       const t1 = [];
//       jsonData.data.map(item => {
//         t1.push({...item, label: item.countryName, value: item.countryCode});
//       });

//       yield put({
//         type: 'ComponentPropsManagement/handleGetCountryDropdownResponse',
//         data: t1,
//       });
//       return;
//     }
//     toast.error('Country not available');
//     yield put({
//       type: 'ComponentPropsManagement/handleGetCountryDropdownResponse',
//       data: [],
//     });
//   }
// }

// function* handleBaseCurrencyDropdownRequest(e) {
//   const {country} = e.payload;
//   const response = yield fetch(
//     `http://13.233.25.68:8089/v1/loyalty/get-currency/${country}`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       // body: JSON.stringify(e.payload),
//     },
//   );
//   const jsonData = yield response.json();
//   if (jsonData) {
//     if (jsonData.data && jsonData.data.length > 0) {
//       const t1 = [];
//       jsonData.data.map(item => {
//         t1.push({
//           ...item,
//           label: item.currencyName,
//           value: item.currencyCode,
//         });
//       });

//       yield put({
//         type: 'ComponentPropsManagement/handleBaseCurrencyDropdownResponse',
//         data: t1,
//       });
//       return;
//     }
//     toast.error('Currency not available');
//     yield put({
//       type: 'ComponentPropsManagement/handleBaseCurrencyDropdownResponse',
//       data: [],
//     });
//   }
// }

export function* helloSaga() {
  yield takeEvery(
    'ComponentPropsManagement/handleLoginRequest',
    handleLoginRequest,
  );
  yield takeEvery(
    'ComponentPropsManagement/handleRegisterRequest',
    handleRegisterRequest,
  );
  yield takeEvery(
    'ComponentPropsManagement/handleUserUpdateRequest',
    handleUserUpdateRequest,
  );
  yield takeEvery(
    'ComponentPropsManagement/handleUserTransactionRequest',
    handleUserTransactionRequest,
  );
  // yield takeEvery(
  //   'ComponentPropsManagement/handleCustomerDataRequest',
  //   handleCustomerDataRequest,
  // );
  yield takeEvery(
    'ComponentPropsManagement/handleCitiesByCountryCodeRequest',
    handleCitiesByCountryCodeRequest,
  );
  yield takeEvery(
    'ComponentPropsManagement/handleCountryDropDownRequest',
    handleCountryDropDownRequest,
  );
  yield takeEvery(
    'ComponentPropsManagement/handleCountryPhoneCodeDropDownRequest',
    handleCountryPhoneCodeDropDownRequest,
  );
  // yield takeEvery(
  //   'ComponentPropsManagement/handleAllInvoicesDataRequest',
  //   handleAllInvoicesRequest,
  // );
  // yield takeEvery(
  //   'ComponentPropsManagement/handleGetLanguageRequest',
  //   handleGetLanguageRequest,
  // );
  // yield takeEvery(
  //   'ComponentPropsManagement/handleAllTransactionActivityAPIDataRequest',
  //   handleAllTransactiontActivityAPIRequest,
  // );
  // yield takeEvery(
  //   'ComponentPropsManagement/handleAllPointActivityAPIDataRequest',
  //   handleAllPointActivityAPIRequest,
  // );
  // yield takeEvery(
  //   'ComponentPropsManagement/handleGetNationalityRequest',
  //   handleGetNationalityRequest,
  // );
  // yield takeEvery(
  //   'ComponentPropsManagement/handleCityDetailDropdownRequest',
  //   handleCityDetailDropdownRequest,
  // );
  // yield takeEvery(
  //   'ComponentPropsManagement/handleLocationDetailDropdownRequest',
  //   handleLocationDetailDropdownRequest,
  // );
  // yield takeEvery(
  //   'ComponentPropsManagement/handleGetCountryDropdownRequest',
  //   handleGetCountryDropdownRequest,
  // );
  // yield takeEvery(
  //   'ComponentPropsManagement/handleBaseCurrencyDropdownRequest',
  //   handleBaseCurrencyDropdownRequest,
  // );
}

// export function* incrementAsync() {
//     yield delay(1000)
//     yield put({ type: 'INCREMENT' })
// }

// export function* watchIncrementAsync() {
//     yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }

// export function* saga() {

// }

export default function* rootSaga() {
  yield all([
    helloSaga(),
    // watchIncrementAsync()
  ]);
}

// export default saga
