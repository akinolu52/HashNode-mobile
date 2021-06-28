/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getRouteIconName, color, useAuth } from '@utils';
import { AuthScreen, StoryScreen, StoryDetailsScreen, ExploreScreen, ProfileScreen } from '@screens';
import { View } from 'react-native';
import { Text } from '@components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Auth" component={AuthScreen} />
        </Stack.Navigator>
    );
};

const StoryStack = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="Story" component={StoryScreen} />
        <Stack.Screen name="Details" component={StoryDetailsScreen} />
    </Stack.Navigator>
);

const AppStack = () => (
    <Tab.Navigator
        // initialRouteName="Auth"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
                const iconName = getRouteIconName(route.name, focused);

                return <Ionicons name={iconName} size={24} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: color._GREEN,
            inactiveTintColor: color._GRAY_3,
            showLabel: false,
            // tabStyle: {
            //     backgroundColor: color._BLACK_2,
            // },
            style: {
                backgroundColor: color._BLACK_2,
                borderTopColor: 'transparent',
                borderTopWidth: 0,
            }
        }}
        sceneContainerStyle={{
            borderTopColor: 'transparent',
            borderTopWidth: 0,
        }}
    >
        <Tab.Screen name="Story" component={StoryStack} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);

const Router = () => {
    const { token, loading } = useAuth();
    // console.log('data -> ', token, loading);

    if (loading) {
        //You can see the component implementation at the repository
        return <View><Text>Loading...</Text></View>;
    }

    // {"loading": false, "signIn": [Function signIn], "signOut": [Function signOut], "token": undefined}
    return (
        <>
            {!token
                ? <AuthStack />
                : <AppStack />
            }
        </>
    );
}

export default Router;