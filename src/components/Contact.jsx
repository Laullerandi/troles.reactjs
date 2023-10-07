import React from 'react'
import { Center, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {

  const email = 'lauullerandi@gmail.com'
  const phone = '+54 9 1169395218'
  const name = 'Laura Llerandi'
  const pageName = 'Troles Indumentaria'

  return (
    <div className="contact" id="contact">
      <Box bg='#ffffff' minHeight='100vh'>
            <div>
              <Center>
                <Text color='black' marginTop='200' display='block' fontSize='2xl' fontWeight='bold'> {pageName}</Text>
              </Center>
              <Center>
                <Text color='black' marginTop='10' display='block' fontWeight='bold'>{name}</Text>
              </Center>
              <Center>
                <Text color='black' marginTop='10' display='block' fontWeight='bold'><FontAwesomeIcon icon={faMobile} style={{ fontSize: '24px' }} /> {phone}</Text>
              </Center>
              <Center>
                <Text color='black' marginTop='10' display='block' fontWeight='bold'><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px' }} />  {email}</Text>
              </Center>
            </div>
      </Box>
    </div>
  )
}

export default Contact