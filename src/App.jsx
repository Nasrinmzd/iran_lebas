import Footer from "./components/modules/footer/Footer";
import Header from "./components/modules/header/Header";
import SvgComponents from "./components/svgComponents/svgComponents";
import Banner from "./components/templates/index/Banner";
import Categories from "./components/templates/index/Categories";
function App() {
  return (
    <>
    <SvgComponents />
      <Header />
      <main>
        <Banner />
        <Categories />
      </main>
      <Footer />
    </>
  );
}

export default App;
