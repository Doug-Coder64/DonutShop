import logo from "../public/logo.svg";
import { Grid, GridItem, Heading, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
const Header = () => {
  return (
    <Grid boxShadow='md' py='12.5px' templateColumns='repeat(12, 1fr)'>
      <GridItem colSpan={[1]} h={["8vw", "7vw"]} w='100%'>
        <Box mx='1vw'>
          <Image src={logo} alt='logo' />
        </Box>
      </GridItem>
      <GridItem
        colStart={[3, 3, 2]}
        colSpan={[6, 5, 4]}
        justifyContent='center'
      >
        <Heading
          mx={["3vw", "2vw"]}
          my='1.75vw'
          fontSize={["4vw", "3.5vw", "3vw"]}
        >
          The Donut Shop
        </Heading>
      </GridItem>
      <GridItem colStart={[10, 11]}>
        <Button size='md' my='1.75vw'>
          Order Now
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Header;
