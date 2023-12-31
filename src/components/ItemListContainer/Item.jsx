import React from 'react'
import {
    Box, Image, Card, CardBody, CardFooter, Button, ButtonGroup, Text, Stack, Heading, Divider
  } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Item = ({products}) => {
  return (
    <>
        <div>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Card maxW='sm' style={{backgroundColor: '#c0d96b'}}>
                    <CardBody>
                        <Image
                        src={products.image}
                        alt=''
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>{products.title}</Heading>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Link to={`/item/${products.id}`}>
                                <Button variant='solid' style={{ backgroundColor: '#c0d96b', color: 'black' }}>
                                    Detalles
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Box>
        </div>
    </>
  )
}

export default Item