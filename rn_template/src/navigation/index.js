import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { AppNavigator } from '@/navigation/AppNavigator';
import { AuthNavigator } from '@/navigation/AuthNavigator';
import { getUser } from '@/selectors/UserSelectors';
import { theme } from '@/theme';
import { GluestackUIProvider, Text, Spinner, Switch } from '@gluestack-ui/themed';

export function RootNavigator() {
  const user = useSelector(getUser);
  const scheme = useColorScheme();
  const currentTheme = theme[scheme];
  return (
    <NavigationContainer>
      <GluestackUIProvider config={currentTheme}>
        <Text>Hello World!</Text>
        <Spinner size="small" />
        <Switch />
        {user ? <AppNavigator /> : <AuthNavigator />}
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
