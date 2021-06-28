import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
    Text, Container
} from '@components';
import { useAuth } from '@utils';

function ProfileScreen({ navigation }) {
    const { signOut, loading } = useAuth();

    return (
        <Container>
            <Text> Profile Screen</Text>

            <TouchableOpacity onPress={() => signOut()}>
                <Text>Logout</Text>
            </TouchableOpacity>

        </Container>
    );
}

export { ProfileScreen };
