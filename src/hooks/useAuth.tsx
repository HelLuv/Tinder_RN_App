import React, {createContext, useContext, useEffect, useMemo, useState} from 'react'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import {GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut} from '@firebase/auth'

import {auth} from "../api/firebase";
import {mockUser} from "../mock";


const AuthContext = createContext<{
  user: any;
  login: () => void;
}>({
  user: null,
  login: () => null,
})

WebBrowser.maybeCompleteAuthSession();

export const AuthProvider = ({children}) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  const [_request, response, promptAsync] = Google.useAuthRequest(
    {
      expoClientId: '282209076377-o49bcfg7gsgo0okv0bvcn5fo9qkrd8o7.apps.googleusercontent.com',
    },
  );

  const login = async () => {
    setLoading(true);
    // await promptAsync();
    setUser(mockUser);
  };


  const logout = async()=> {
    setLoading(true);
    signOut(auth).catch((error) => setError(error)).finally(() => setLoading(false));
  };


  useEffect(() => onAuthStateChanged(auth, (user) => {
    setLoading(true);

    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }

    setLoadingInitial(false);
  }), []);

  useEffect(() => {
    if (response?.type === 'success') {
      const {authentication: {idToken, accessToken}} = response;
      signInWithCredential(auth, GoogleAuthProvider.credential(idToken, accessToken)).catch((error) => setError(error)).finally(() => setLoading(false));
    }
  }, [response]);


  const memoedValue = useMemo(() => ({
    user,
    loading,
    error,
    login,
    logout
  }), [user, loading, error]);

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
};