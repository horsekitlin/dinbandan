import queryString from 'query-string';
import {isExistInArray} from '../../utils/util';

const successStatusCodes = [200, 201];

const defaultDomain = 'http://5b6ee1d9f8ed6700143a0da0.mockapi.io/api/admin';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export const fetchGET =  async (endPoint, payload, qs=null) => {
  try {
    const route = qs
      ? `${endPoint}?${queryString.stringify(qs)}`
      : endPoint;

    const res = await fetch(`${defaultDomain}${route}`, {
      method: 'GET',
      headers: {...headers}
    });

    const {status: statusCode} = res;
    const success = isExistInArray(statusCode, successStatusCodes);
    const resText = await res.text();
    const result = resText === '' ? {} : JSON.parse(resText);

    return {
      success,
      statusCode,
      result
    };

  } catch (error) {
    return {
      success: false,
      error
    };
  }
};

export const fetchPOST = async (endPoint, payload, body={}) => {
  try {
    const res = await fetch(`${defaultDomain}${endPoint}`, {
      method: 'POST',
      headers: {...headers},
      body: JSON.stringify(payload)
    });

    const {status: statusCode} = res;
    const success = isExistInArray(statusCode, successStatusCodes);
    const resText = await res.text();
    const result = resText === '' ? {} : JSON.parse(resText);
  
    return {
      success,
      statusCode,
      result
    };
  } catch (error) {
    return {
      success: false,
      error
    };
  }
};
