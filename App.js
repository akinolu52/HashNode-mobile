import React, { createContext } from 'react';
import {
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native';
import Router from '@components/Router';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { AuthProvider } from '@utils';

import 'react-native-gesture-handler';

const queryClient = new QueryClient();

const App: () => Node = () => {
  const theme = {
    mode: useColorScheme()
  };
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <Router />
            </AuthProvider>
          </QueryClientProvider>
        </NavigationContainer>
      </ThemeProvider>

    </SafeAreaProvider>
  );
};

export default App;
