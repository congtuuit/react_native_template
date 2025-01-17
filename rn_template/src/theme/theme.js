//import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { config } from '@gluestack-ui/config';

export const theme = {
  light: {
    ...config,
    colors: {
      ...config.tokens.colors,
      primary: '#B0BEC5',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#212121',
      border: '#212121',
      activeTab: '#1976D2',
      inactiveTab: '#757575',
    },
  },
  dark: {
    ...config,
    colors: {
      ...config.tokens.colors,
      primary: '#212121',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#FFFFFF',
      border: '#FFFFFF',
      activeTab: '#4FC3F7',
      inactiveTab: '#FFFFFF',
    },
  },
};

// export const theme = {
//   light: {
//     ...DefaultTheme,
//     colors: {
//       ...DefaultTheme.colors,
//       primary: '#B0BEC5',
//       secondary: '#29434E',
//       error: '#D32F2F',
//       text: '#212121',
//       border: '#212121',
//       activeTab: '#1976D2',
//       inactiveTab: '#757575',
//     },
//   },
//   dark: {
//     ...DarkTheme,
//     colors: {
//       ...DarkTheme.colors,
//       primary: '#212121',
//       secondary: '#29434E',
//       error: '#D32F2F',
//       text: '#FFFFFF',
//       border: '#FFFFFF',
//       activeTab: '#4FC3F7',
//       inactiveTab: '#FFFFFF',
//     },
//   },
// };
