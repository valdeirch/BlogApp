import React, {useState, useCallback} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';

// API
import api from '../../services/api';

// Styles
import {
  Container,
  InputEmail,
  Title,
  Button,
  FormContainer,
  ButtonText,
  ErrorMessage,
} from './styles';

// Actions
import {setUser} from '../../store/modules/user/actions';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    const response = await api.get(`users?email=${email}`);
    if (response.data.length > 0) {
      dispatch(setUser(response.data[0]));
      navigation.navigate('TabNav');
    } else {
      //set Error
      setError('User not found! Try again!');
    }
    setLoading(false);
  }, [dispatch, email, navigation]);

  return (
    <Container>
      <Title>Welcome!</Title>
      <FormContainer>
        <InputEmail
          type="email"
          placeholder="Type your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button disabled={!email || loading} onPress={() => getUser()}>
          {loading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <ButtonText>Login</ButtonText>
          )}
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Login;
