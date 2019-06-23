export const URL_API = "http://localhost:3001/";

export const MOCK = false;

export const HEADER_REQ_API = {    
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'mode': 'no-cors'                    
}

export const HEADER_REQ_API_LOCATION = {    
    'Content-type' : 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'mode': 'no-cors'                    
}

export function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
  }
