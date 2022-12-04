import React from 'react'
import SideNav from "../../Components/Dashboard/SideNav/SideNav";
import { Text } from "@chakra-ui/react";
import styles from './nots.module.css'

import {
    Flex,
    Card,
    CardHeader,
    StackDivider,
    Heading,
    Stack,
    Box,
    CardBody,

    } from "@chakra-ui/react";
import { FaUserCircle } from 'react-icons/fa';


const SubNotification = () => {
  return (
    <div>
        <Flex>
    <SideNav/>

    <Card width="100%">
<CardHeader>
<Heading size='md'>Client Report</Heading>
</CardHeader>

<CardBody >
<Stack divider={<StackDivider />} spacing='4'>
  <Box >
    <Box display="flex" alignItems='center' gap='4'>
    <FaUserCircle className={styles.FaUser} />
    
    <Heading size='xs' textTransform='uppercase'>
      Leave
    </Heading>
    </Box>
    
    <Text pt='2' fontSize='sm'>
      View a summary of all your clients over the last month.
    </Text>
    
  </Box>
  <Box >
    <Box display="flex" alignItems='center' gap='4'>
    <FaUserCircle className={styles.FaUser} />
    
    <Heading size='xs' textTransform='uppercase'>
      Project
    </Heading>
    </Box>
    
    <Text pt='2' fontSize='sm'>
      View a summary of all your clients over the last month.
    </Text>
    
  </Box>
  <Box >
    <Box display="flex" alignItems='center' gap='4'>
    <FaUserCircle className={styles.FaUser} />
    
    <Heading size='xs' textTransform='uppercase'>
      Wedding Anniversary
    </Heading>
    </Box>
    
    <Text pt='2' fontSize='sm'>
      View a summary of all your clients over the last month.
    </Text>
    
  </Box>
 
</Stack>
</CardBody>
</Card>
    
  </Flex></div>
  )
}

export default SubNotification