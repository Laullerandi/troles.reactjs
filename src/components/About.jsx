import React from 'react'
import { Text, Divider, Box, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFront, faCheck, faShieldHalved } from "@fortawesome/free-solid-svg-icons";


const About = () => {

  const about = "Somos una pequeña tienda en busca de grandes aspiraciones."
  const shipping = "Envíos a todo el país."
  const quality = "La indumentaria es 100% de algodón y de excelente calidad."
  const security = "Te garantizamos una compra segura y excelentes condiciones de envío, asegurándonos que recibas lo que compraste."

  return (
    <>
      <Box bg='#ffffff' minHeight='200vh'>
        <div className='about'>
          <Center>
            <Text p="3" marginTop='100' mb='-20'>{about}</Text>
          </Center>
        </div>
        <div className='content'></div>
        <Divider borderColor='grey.200' />
        <div className="about-us-list">
          <ul className="list">
            <Text p="4" className="item-list"><FontAwesomeIcon icon={faTruckFront} style={{ fontSize: '24px' }} />   {shipping}</Text>
            <Text p="3" className="item-list"><FontAwesomeIcon icon={faCheck} style={{ fontSize: '24px' }} />   {quality}</Text>
            <Text p="3" className="item-list"><FontAwesomeIcon icon={faShieldHalved} style={{ fontSize: '24px' }} />   {security}</Text>
            <Divider p="3" borderColor='grey.200'/>
          </ul>
        </div>

        
      </Box>
    </>
  )
}

export default About