import {
  Container,
  Input,
  VStack,
  Heading,
  Button,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Login = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          w={['full', '96']}
          m={'auto'}
          spacing={'8'}
          my={'16'}
        >
          <Heading>Welcome Back</Heading>
          <Input
            type={'email'}
            placeholder={'Email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            type={'password'}
            placeholder={'Password'}
            required
            focusBorderColor={'purple.500'}
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forget password'}> Forget Password? </Link>
          </Button>
          <Button type={'submit'} colorScheme={'purple'}>
            Log In
          </Button>
          <Text alignSelf={'flex-end'} colorScheme={'purple'}>
            New User?{' '}
            <Button
              variant={'link'}
              alignSelf={'flex-end'}
              colorScheme={'purple'}
            >
              <Link to={'/signup'}> Signup </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
