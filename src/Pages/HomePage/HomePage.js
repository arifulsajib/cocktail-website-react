import React from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeDrinks from "../../Components/HomeDrinks/HomeDrinks";
import HomeFilteredDrinks from "../../Components/HomeFilteredDrinks/HomeFilteredDrinks";
import HomeIngredents from "../../Components/HomeIngredents/HomeIngredents";

const HomePage = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <HomeDrinks></HomeDrinks>
      <HomeIngredents></HomeIngredents>
      <HomeFilteredDrinks></HomeFilteredDrinks>
    </>
  );
};

export default HomePage;
