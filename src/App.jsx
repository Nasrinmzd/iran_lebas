import Footer from "./components/modules/footer/Footer";
import Header from "./components/modules/header/Header";
import SvgComponents from "./components/svgComponents/svgComponents";
import Blog from "./components/templates/Blog/Blog";
import Banner from "./components/templates/index/Banner";
import Categories from "./components/templates/index/Categories";
import QASection from "./components/templates/index/QASection";
function App() {
  return (
    <>
    <SvgComponents />
      <Header />
      <main>
        <Banner />
        <Categories />
        <QASection />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;
