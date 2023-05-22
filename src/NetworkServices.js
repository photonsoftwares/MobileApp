getCommonHeaders = () => {
  let commonHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  };
  return commonHeaders;
};

export async function ApiRequest(endUrl, method, headers, body) {
  try {
    let requestHeaders = getCommonHeaders();
    if (headers) {
      requestHeaders = {...requestHeaders, ...headers};
    }
    const options = {
      method: method,
      headers: requestHeaders,
      body: body,
    };

    try {
      return fetch(endUrl, options)
        .then(response => response.json())
        .then(responseJson => {
          return responseJson;
        });
    } catch (e) {}
  } catch (e) {}
}
