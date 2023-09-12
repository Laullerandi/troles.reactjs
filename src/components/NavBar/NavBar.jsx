import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Flex,
  Box,
  Spacer,
  Text,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Flex alignItems="center">
        <Box p="4">
          <div className="navbar-title">
            <Link to={'/'}>
              <Text fontSize="2xl">Troles Indumentaria</Text>
            </Link>           
          </div>
        </Box>
        <Box p="4">
          <div className="navbar-menu">
            <Breadcrumb separator="-">
            <BreadcrumbItem>
                <Link to={'/home'}>
                  <BreadcrumbLink>Home</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to={'/about'}>
                  <BreadcrumbLink>Sobre nosotros</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Link to={'/contact'}>
                  <BreadcrumbLink>Contacto</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Menu>
                  <MenuButton>Categorias</MenuButton>
                  <MenuList>
                    <Link to={`/category/${"Buzos"}`}><MenuItem>Buzos</MenuItem></Link>
                    <Link to={`/category/${"Remeras"}`}><MenuItem>Remeras</MenuItem></Link>
                    <Link to={`/category/${"Accesorios"}`}><MenuItem>Accesorios</MenuItem></Link>
                  </MenuList>
                </Menu>
              </BreadcrumbItem>
              
            </Breadcrumb>
          </div>
        </Box>
        <Spacer />
        <Box p="4">
          <Link to={'/cart'}>
            <CartWidget />
          </Link>
        </Box>
      </Flex>
    </nav>
  );
};

export default NavBar;