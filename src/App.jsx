import Footer from "./components/modules/footer/Footer";
import Header from "./components/modules/header/Header";
import Banner from "./components/templates/index/Banner";
import Categories from "./components/templates/index/Categories";

function App() {
  return (
    <>
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
