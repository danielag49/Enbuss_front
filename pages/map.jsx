import Map from '../src/components/Map/Map';
import { ChakraProvider } from '@chakra-ui/react'

const HomePage = () => {
  return (  <ChakraProvider>

<div>
      <h1>Welcome to Enbuss - Mapp</h1>
      
      <Map />
    </div>

  </ChakraProvider>
  );
}


export default HomePage;