import { ShoppingShoesProvider } from "./Components/Context/Context";
import { Description } from "./Components/Description/Description";
import { Header } from "./Components/Header/Header";
import { Slider } from "./Components/Slider/Slider";
import { Layout } from "./Layout";
import { ImagesCarousel } from "./Components/ImagesCarousel/ImagesCarousel";
import style from "./index.module.css"

function App() {
  return (
    <>
      <ShoppingShoesProvider>
        <Layout>
          <Header />
          <Slider />
          <section className={style.content}>
            <ImagesCarousel />
            <Description />
          </section>
        </Layout>
      </ShoppingShoesProvider>
    </>
  );
}

export default App;
