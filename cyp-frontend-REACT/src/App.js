import * as React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { ChakraProvider,extendTheme,Container,Divider,Center} from '@chakra-ui/react';
import Navbar from './componenets/Navbar'
import Main from './componenets/Main';
function App() {
  const customTheme = extendTheme({
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Arial', sans-serif`,
    },
  })
  return (
    <>
    <ChakraProvider  theme={customTheme}>
      <Route>
        <Navbar/>
        <Container
              backgroundImage={require("./assets/herobg.png")}
              backgroundColor="gray"
              backgroundSize="cover"
              backgroundPosition="center"
              minHeight="100%"
              minWidth="100%"
              overflowX="hidden"

        >

        <Center>
          <Divider my={5} width={"60%"} borderWidth={1.5} borderColor="#151030" />
        </Center>
          <Main/>
        </Container>
      </Route>
    </ChakraProvider>
    </>
  );
}
export default App;
