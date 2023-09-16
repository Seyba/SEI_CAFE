/*
import * as userAPI from './users-api'

export async function signUp (userData){
    
    const token = await userAPI.signUp(userData)
    localStorage.setItem('SEIToken', token)

    return getUser()
}
export async function login(credentials){
  const token = await userAPI.login(credentials)
    localStorage.setItem('SEIToken', token)

    return getUser()
}


export function getToken() {
    // getItem returns null if there's no string
  const token = localStorage.getItem('SEIToken');
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem('SEIToken');
    return null;
  }
  return token;
  }
  
  export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}
export async function logOut(){
  localStorage.removeItem('SEIToken')
}

export async  function checkToken(){
  
  //console.log(expDate)
  const tokenDate = await userAPI.checkToken()
  return new Date(tokenDate)
 // return tokenDate.toISOString()
}

*/


// * CAFE SEI CODE

import * as usersAPI  from './users-api';

export async function signUp(userData) {
  // Delete the network request code to the
  // users-api.js module which will ultimately
  // return the JWT
  const token = await usersAPI.signUp(userData);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  // Persist the token to localStorage
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem('token');
  // getItem will return null if no key
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's expiration is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token');
}