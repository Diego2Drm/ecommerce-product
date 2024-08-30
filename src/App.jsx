import { Description } from "./Components/Description/Description";
import { Header } from "./Components/Header/Header";
import { Slider } from "./Components/Slider/Slider";
import { Layout } from "./Layout";

function App() {
  

  return (
    <>
    <Layout>
      <Header/>
      <Slider />
      <Description />
    </Layout>
    </>
  );
}

export default App;
