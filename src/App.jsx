import { Description } from "./Components/Description/Description";
import { Header } from "./Components/Header/Header";
import { Price } from "./Components/Price/Price";
import { Slider } from "./Components/Slider/Slider";
import { Layout } from "./Layout";

function App() {
  

  return (
    <>
    <Layout>
      <Header/>
      <Slider />
      <Description />
      <Price />
    </Layout>
    </>
  );
}

export default App;
