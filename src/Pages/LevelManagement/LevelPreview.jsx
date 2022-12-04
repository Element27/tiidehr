import React from 'react'

import { Formik, Field } from "formik";
import {
  // Box,
  Button,
  // Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  // VStack,
  // HStack,
  Textarea,
  Box,
} from "@chakra-ui/react";

const LevelPreview = () => {

  return (
    <Flex bg="black" align="center" justify="center" h="100vh" >
      <Box bg="white" p="2rem" rounded="md" align="center" justify="center" w="50%">
        <Formik
          initialValues={{
            email: "",
            password: "",
            desc: "",
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <Box align="flex-start" width="90%">
                {/* <HStack> */}
                <FormControl w="100%" isInvalid={!!errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    w="100%"
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage color="red" fontSize="xs">{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl w="100%" isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    w="100%"
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;
                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }
                      return error;
                    }}
                  />
                  <FormErrorMessage color="red" fontSize="xs">{errors.password}</FormErrorMessage>
                </FormControl>

                {/* </HStack> */}
                <FormControl w="100%">
                  <FormLabel>Text Area</FormLabel>
                  <Textarea
                    resize="none"
                    id="desc"
                    name="desc"
                    variant="filled"
                    w="100%"
                    h="200px"
                    p="1rem"
                    placeholder="this is a textarea..."
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Flex >
  );
}



export default LevelPreview

