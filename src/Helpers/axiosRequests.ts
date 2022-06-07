import axios from 'axios';
import { getToken } from './tokenManagement';
import {BASE_URL} from './dbConfig';

// Get request Function
export const apiGetRequest = (endpoint:string, props = {},token = null ) =>
  apiRequest('GET', endpoint, token , props);

// Post request Function
export const apiPostRequest = (endpoint:string, payload:object , token = null ) =>
  apiRequest('POST', endpoint, token ,{ data: payload });

// Patch request Function
export const apiPatchRequest = (endpoint:string, payload:object , token = null ) =>
  apiRequest('PATCH', endpoint, token , { data: payload });

// Put Request Function
export const apiPutRequest = (endpoint:string, payload:object  , token = null ) =>
  apiRequest('PUT', endpoint, token , { data: payload });

// Delete Request Function
export const apiDeleteRequest = (endpoint:string, payload:object  , token = null ) =>
  apiRequest('DELETE', endpoint, token, { data: payload });

// Api Request for all the api methods
export const apiRequest = (method:string, endpoint:string, token:string|null = null , props = {}) => {
  if (!token){
 //   token = getToken();
  }
  const params = {
    method,
    baseURL: BASE_URL,
    url: endpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization:'',
    },
  };
  Object.assign(params, props);
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }
  //console.log(JSON.stringify(params))
  return axios(params);
};
