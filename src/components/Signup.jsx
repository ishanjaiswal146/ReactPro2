import {
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Link,
  Button,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome to VideoHub </Heading>
          <Avatar alignSelf={'center'} bgSize={'32'} />

          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor="purple.500"
          />

          <Button colorScheme={'purple'} type={'submit'}>
            SignUp
          </Button>

          <Text textAlign={'right'}>
            Already Signe Up?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
