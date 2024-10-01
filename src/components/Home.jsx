import AllProducts from "./AllProducts";
import Banner from "./Banner";
import BannerDouble from "./BannerDouble";
import Feature from "./Feature";
import Hero from "./Hero";
import ThreeBanner from "./TreeBanner";

const Home = () => (
  <>
    <Hero />
    <Feature />
    <AllProducts
      text1="Featured products"
      text2="Summer Collection New Modern Design"
    />
    <Banner />
    <AllProducts
      text1="New Arrivals"
      text2="Summer Collection New Modern Design"
    />
    <BannerDouble />
    <ThreeBanner />
  </>
);
export default Home;
