import {
  Container,
  Input,
  VStack,
  Heading,
  Button,
  Link,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} p={'2'}>
      <form>
        <VStack
          alignItems={'stretch'}
          w={['full', '96']}
          m={'auto'}
          spacing={'8'}
          my={'16'}
        >
          <Heading alignSelf={'center'}>Movie Hub</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            type={'text'}
            placeholder={'Name'}
            required
            focusBorderColor={'purple.500'}
          />
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

          <Button type={'submit'} colorScheme={'purple'}>
            Sign Up
          </Button>
          <Text alignSelf={'flex-end'} colorScheme={'purple'}>
            Already Sign Up?{' '}
            <Button
              variant={'link'}
              alignSelf={'flex-end'}
              colorScheme={'purple'}
            >
              <Link to={'/login'}> Log In </Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
