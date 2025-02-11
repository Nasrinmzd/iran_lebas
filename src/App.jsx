import Footer from "./components/modules/footer/Footer";
import Header from "./components/modules/header/Header";
import SvgComponents from "./components/svgComponents/svgComponents";
import Blog from "./components/templates/Blog/Blog";
import Banner from "./components/templates/index/Banner";
import BestSellers from "./components/templates/index/BestSellers";
import Categories from "./components/templates/index/Categories";
import QASection from "./components/templates/index/QASection";
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
