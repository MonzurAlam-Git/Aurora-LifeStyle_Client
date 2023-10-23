import Categories from "../Categories/Categories";
import Navbar from "../Shared/Navbar";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Categories></Categories>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
