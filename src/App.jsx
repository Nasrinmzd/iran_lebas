import Footer from "./components/modules/footer/Footer";
import Header from "./components/modules/header/Header";
import SvgComponents from "./components/svgComponents/SvgComponents";
import Blog from "./components/templates/Blog/Blog";
import AboutUs from "./components/templates/index/AboutUs";
import Banner from "./components/templates/index/Banner";
import BestSellers from "./components/templates/index/BestSellers";
import CategoriCart from "./components/templates/index/CategoriCart";
import Categories from "./components/templates/index/Categories";
import QASection from "./components/templates/index/QASection";
import SpecialDiscounts from "./components/templates/index/SpecialDiscounts";
import SpecialOffers from "./components/templates/index/SpecialOffers";
import UserComments from "./components/templates/index/UserComments";
function App() {
  return (
    <>
    <SvgComponents />
      <Header />
      <main>
        <Banner />
        <Categories />
        <CategoriCart />
        <SpecialDiscounts />
        <AboutUs />
        <BestSellers />
        <UserComments />
        <SpecialOffers />
        <QASection />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;
