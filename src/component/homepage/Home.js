import SearchBar from "./body/SearchBar";
import ImageCard from "./body/ImageCard";
import Footer from "./Footer";
import Header from "./header/Header";
import styles from "./Home-module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <p>Hey!</p>
        <p>Lets get your order</p>
      </div>
      <SearchBar />
      <ImageCard />
      <Footer />
    </>
  );
};
export default Home;
