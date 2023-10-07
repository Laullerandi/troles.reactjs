import React from 'react'
import { Box, Image, Card, CardBody, CardFooter, Text, Stack, Heading, Divider, Center} from "@chakra-ui/react";
import ItemCount from './ItemCount';



const ItemDetail = ({product}) => {

  return (
    <>
        <div>
            <Box bg='#ffffff' minHeight='100vh' mt='100'>
                <Center>
                    <Box display="flex" alignItems="center">
                        <Card maxW='sm' style={{backgroundColor: '#ffffff'}}>
                            <CardBody>
                                <Image
                                    src={product.image}
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='md'>{product.title}</Heading>
                                <Text color='black.600' fontSize='2xl'>
                                    ${product.price}
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ItemCount product={product} />
                            </CardFooter>
                        </Card>
                        
                        <Box ml='10' border='1px solid black' p='10px' width='500px' height='auto'>
                            <Center><Text fontSize='2xl'>Descripción del producto</Text></Center>
                            <Divider />
                            <Text fontSize='2xl'>
                                {product.description}
                            </Text>
                        </Box>
                    </Box>
                    
                </Center>
            </Box>
        </div>
    </>
  )
}

export default ItemDetail