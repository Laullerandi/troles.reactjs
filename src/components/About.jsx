import React from 'react'
import { Text, Divider, Box, Center } from "@chakra-ui/react";


const About = ({about, shipping, quality, security}) => {
  return (
    <>
      <Box bg='#ffffff' minHeight='100vh'>
        <div className='about'>
          <Center>
            <Text p="3" marginTop='200'>{about}</Text>
          </Center>
        </div>
        <Divider borderColor='grey.300' />
        <div className="about-us-list">
          <ul className="list">
            <Text p="4" className="item-list">- {shipping}</Text>
            <Text p="3" className="item-list">- {quality}</Text>
            <Text p="3" className="item-list">- {security}</Text>
            <Divider p="3" borderColor='grey.300' />
          </ul>
        </div>
      </Box>
    </>
  )
}

export default About