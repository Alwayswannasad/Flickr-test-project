import React, {useState} from 'react';
import {View} from 'react-native';
import InputFields from '../../components/Input/inputs';
import {COLORS, ELEMENTS_NAME} from '../../utils/constants';
import {inject, observer} from 'mobx-react';
import {validationSchema} from '../../utils/validation';
import {Formik} from 'formik';
import styles from './styles';
import HeaderWaves from '../../components/Header/header';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../components/Button/button';
import { useNavigation } from '@react-navigation/native';
interface AuthProps {
  rootStore: {
    authStore: {
      loaderShow: () => void;
      authLogin: (arg: string, arg2: string) => void;
    };
  };
}
export const EmailForm = ({logIn, loader, handleInputChange}) => {
  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}>
      {({
        values,
        errors,
        isValid,
        setFieldTouched,
        setFieldValue,
        handleSubmit,
      }) => (
        <View>
          <InputFields
            value={values.email}
            handleInputChange={handleInputChange}
            secureTextEntry={false}
            inputName="email"
            title={ELEMENTS_NAME.EMAIL}
            setFieldTouched={setFieldTouched}
            setFieldValue={setFieldValue}
            error={errors.email}
            isValid={isValid}
            autoCapitalize="none"
            isEditable={true}
            keyboardType="email-address"
          />
          <InputFields
            value={values.password}
            handleInputChange={handleInputChange}
            secureTextEntry={true}
            inputName="password"
            title={ELEMENTS_NAME.PASSWORD}
            setFieldTouched={setFieldTouched}
            setFieldValue={setFieldValue}
            error={errors.password}
            isValid={isValid}
            autoCapitalize="none"
            isEditable={true}
          />
          <Button
            title={ELEMENTS_NAME.LOGIN}
            style={styles.btnStyle}
            onPress={() => {
              logIn(values.email, values.password);
              handleSubmit();
            }}
            color={COLORS.whiteBg}
            isLoading={loader}
          />
        </View>
      )}
    </Formik>
  );
};

const Auth = ({rootStore}: AuthProps) => {
  const {authStore} = rootStore || {};
  const {loaderShow, authLogin, loader} = authStore;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()
  const logIn = (mail: string, pass: string) => {
    setEmail(mail);
    setPassword(pass);
    // if (mail !== '' && pass !== '') {
    //   loaderShow();
    //   authLogin(mail, pass);
    // }
    navigation.navigate('Home');
  };
  const handleInputChange = (
    inputText: string,
    inputName: string,
    setFieldValue: (arg1: string, arg2: string) => void,
  ) => {
    setFieldValue(inputName, inputText);
  };

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={{
        backgroundColor: COLORS.mainBackground,
        flexGrow: 1,
      }}
      keyboardShouldPersistTaps="handled">
      <View style={styles.authContainer}>
        <HeaderWaves headerTitle="Welcome to Flick!" headerContainerStyle={styles.authScrnHeaderContStyle}/>

        <View style={styles.inputContainer}>
          <EmailForm
            logIn={logIn}
            loader={loader}
            handleInputChange= {handleInputChange}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default inject('rootStore')(observer(Auth));
