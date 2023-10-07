import React from 'react'
import { Center, Text, Box } from "@chakra-ui/react";
import image1 from '../assets/Buzo-1.png';
import image2 from '../assets/Buzo-2.png';
import image3 from '../assets/Buzo-3.jpg';
import image4 from '../assets/Remera-1.png';
import image5 from '../assets/Remera-2.jpg';
import image6 from '../assets/Remera-3.jpg'
import image7 from '../assets/Accesorio-1.png'
import image8 from '../assets/Accesorio-2.png'
import image9 from '../assets/Accesorio-3.jpg'




const Home = () => {

  const greeting = "Bienvenidxs a Troles Indumentaria"
  const welcome = "Indumentaria con diseños únicos y de excelente calidad."

  return (
    <>
      <Box bg='#ffffff' minHeight='100vh'>
        <div className="home" id="home">
            <Center h='120px'>
              <Text fontSize="2xl" marginTop='150' > {greeting}</Text>
            </Center>
            <Center>
              <Text marginTop="70" mb='50'>{welcome}</Text>
            </Center>
        </div>
      
      <div className='slider'>
        <ul>
          <li>
            <img src={image1}></img>
          </li>
          <li>
            <img src={image2}></img>
          </li>
          <li>
            <img src={image3}></img>
          </li>
          <li>
            <img src={image4}></img>
          </li>
          <li>
            <img src={image5}></img>
          </li>
          <li>
            <img src={image6}></img>
          </li>
          <li>
            <img src={image7}></img>
          </li>
          <li>
            <img src={image8}></img>
          </li>
          <li>
            <img src={image9}></img>
          </li>
        </ul>
      </div>
      </Box>
    </>
  )
}

export default Home