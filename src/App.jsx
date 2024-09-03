import { ShoppingShoesProvider } from "./Components/Context/Context";
import { Description } from "./Components/Description/Description";
import { Header } from "./Components/Header/Header";
import { Price } from "./Components/Price/Price";
import { Slider } from "./Components/Slider/Slider";
import { Layout } from "./Layout";

function App() {
  

  return (
    <>
      <ShoppingShoesProvider>
        <Layout>
          <Header />
          <Slider />
          <Description />
          <Price />
        </Layout>
      </ShoppingShoesProvider>
    </>
  );
}

export default App;
