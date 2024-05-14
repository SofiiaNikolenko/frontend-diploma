import Hero from "../../components/HomeSection/Hero/Hero"
import Places from "components/HomeSection/Places/Places";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Places></Places>
    </>
    // <ContainerHome>
    //   <Overlay />
    //   <TitleHome>Welcome to Our Car Rental Service</TitleHome>
    //   <DescriptionHome>
    //     We provide a wide range of cars for rent, tailored to your needs and
    //     budget. Whether you need a compact car for a quick city trip or a
    //     spacious SUV for a family vacation, we have you covered.
    //   </DescriptionHome>
    // </ContainerHome>
  );
};

export default Home;
