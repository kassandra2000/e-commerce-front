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
    num1={0}
    num2={8}
      text1="Featured products"
      text2="Summer Collection New Modern Design"
    />
    <Banner />
    <AllProducts
    num1={8}
    num2={16}
      text1="New Arrivals"
      text2="Summer Collection New Modern Design"
    />
    <BannerDouble />
    <ThreeBanner />
  </>
);
export default Home;
