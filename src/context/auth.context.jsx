import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const API_URL='http://localhost:3001';

const AuthContext = createContext();

function AuthProviderWrapper(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem('authToken', token)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken }}>
      {props.children}
    </AuthContext.Provider>
  );

};

export {
  AuthContext,
  AuthProviderWrapper
}