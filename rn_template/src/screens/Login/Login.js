import { useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
//import { Button, ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Login/Login.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { shadow } from '@/theme';
import {
  Box,
  Text,
  Input,
  Button,
  VStack,
  InputField,
  ButtonText,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItem,
  ActionsheetItemText,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export function Login() {

  console.log("config ", config.aliases)

  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((state) => errorsSelector([TYPES.LOGIN], state), shallowEqual);
  const isLoading = useSelector((state) => isLoadingSelector([TYPES.LOGIN], state));

  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  const handleLogin = () => {
    console.log('jello');
    //dispatch(login(username, password));
  };

  return (
    <Box bg="background" alignItems="center" justifyContent="center">
      <VStack>
        <Input size="md">
          <InputField value={username} onChangeText={setUsername} placeholder="Phone number" />
        </Input>
        <Input size="md">
          <InputField value={password} onChangeText={setPassword} placeholder="Password" />
        </Input>

        <Button $dark-bg="#B0BEC5" $light-bg="#B0BEC5" onPress={handleLogin}>
          <ButtonText>Login1</ButtonText>
        </Button>

        <Box>
          <Button onPress={handleClose}>
            <ButtonText>Open</ButtonText>
          </Button>
          <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
            <ActionsheetBackdrop />
            <ActionsheetContent h="$72" zIndex={999}>
              <ActionsheetDragIndicatorWrapper>
                <ActionsheetDragIndicator />
              </ActionsheetDragIndicatorWrapper>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Delete</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Share</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Play</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Favourite</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Cancel</ActionsheetItemText>
              </ActionsheetItem>
            </ActionsheetContent>
          </Actionsheet>
        </Box>
      </VStack>
    </Box>
  );

  // return (
  //   <Box flex={1} justifyContent="center" alignItems="center" padding={4} bg="background">
  //     <VStack space={4} width="90%" maxWidth={400}>
  //       <Input
  //         placeholder="Email"
  //         value={username}
  //         onChangeText={setUsername}
  //         keyboardType="email-address"
  //         bg="surface"
  //         borderColor="border"
  //         placeholderTextColor="text.secondary"
  //       />
  //       <Input
  //         placeholder="Password"
  //         value={password}
  //         onChangeText={setPassword}
  //         secureTextEntry
  //         bg="surface"
  //         borderColor="border"
  //         placeholderTextColor="text.secondary"
  //       />
  //       <Button
  //         onPress={handleLogin}
  //         bg="primary"
  //       >
  //         Login
  //       </Button>
  //       <Text fontSize="sm" color="text.secondary" textAlign="center">
  //         Don’t have an account? Sign up now!
  //       </Text>
  //     </VStack>
  //   </Box>
  // );

  // return (
  //   <View style={styles.container}>
  //     <View style={[styles.formContainer, shadow.primary, { backgroundColor: colors.primary }]}>
  //       <TextField
  //         autoCapitalize="none"
  //         accessibilityHint={strings.login.usernameHint}
  //         accessibilityLabel={strings.login.username}
  //         onChangeText={setUsername}
  //         placeholder={strings.login.username}
  //         value={username}
  //       />
  //       <TextField
  //         secureTextEntry
  //         accessibilityHint={strings.login.passwordHint}
  //         accessibilityLabel={strings.login.password}
  //         autoCapitalize="none"
  //         onChangeText={setPassword}
  //         placeholder={strings.login.password}
  //         textContentType="password"
  //         value={password}
  //       />
  //       <ErrorView errors={errors} />
  //       <Button
  //         onPress={handleSubmit}
  //         style={styles.submitButton}
  //         title={isLoading ? strings.common.loading : strings.login.button}
  //       />
  //     </View>
  //   </View>
  // );
}
