import React from 'react'
import Item from './Item'
import {
    Grid, Center
  } from "@chakra-ui/react";

const ItemList = ({products}) => {
  return (
    <>
        <div>
            <Center>
                <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(3, 1fr)']} gap={14} mt='40'>
                    {products.map((product) => (
                        <Item
                            products={product} key={product.id}
                        />
                    ))}
                </Grid>
            </Center>
        </div>
    </>
  )
}

export default ItemList