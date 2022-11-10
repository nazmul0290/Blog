import HeroArea from "../components/HeroArea/Hero";
import HBlogTwo from "../components/HomeBlogs/HBlogTwo";
import HomeBlogs from "../components/HomeBlogs/HomeBlogs";
import Header from "../components/layout/Header";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const HomePage = () => (
  <>
    <Header />
    <HeroArea />
    <HBlogTwo/>
    <HomeBlogs/>
    <NewsLetter/>
  </>
);
export default HomePage;
