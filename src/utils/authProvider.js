import React, { useState, useEffect, useContext, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStorageData();
    }, []);

    async function loadStorageData() {
        try {
            //Try get the data from Async Storage
            const token = await AsyncStorage.getItem('@token');
            if (token) {
                setToken(token);
            }
        } catch (error) {
            console.log('error -> ', error);
        } finally {
            //loading finished
            setLoading(false);
        }
    }

    const signIn = async token => {
        // call get user query
        AsyncStorage.setItem('@token', token);
    };

    const signOut = async () => {
        setToken(null);
        await AsyncStorage.removeItem('@token');
    };

    return (
        <AuthContext.Provider value={{ token, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { useAuth };