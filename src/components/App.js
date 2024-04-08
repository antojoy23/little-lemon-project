import './App.css';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Footer from './Footer';
import NavBar from './NavBar';
import Routing from './Routing';

const theme = extendTheme({
  colors: {
    brand: {
      50: "#F4CE14",
      100: "#F4CE14",
      500: "#F4CE14",
      600: "#e9c200"
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className='app-container'>
        <NavBar />
        <Routing />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
