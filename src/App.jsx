import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Models from "./Components/Models/Models";
import NavBar from "./Components/NavBar/NavBar";
import Tabs from "./Components/Tabs/Tabs";

const getModel = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelsPromise = getModel();

function App() {
  const [activeTab, setActiveTab] = useState("models");
  // console.log(activeTab);

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Tabs setActiveTab={setActiveTab}></Tabs>

      {activeTab === "models" ? (
        <Models modelsPromise={modelsPromise}></Models>
      ) : null}

      {activeTab === "cart" ? <Cart></Cart> : null}

      <Footer></Footer>
    </>
  );
}

export default App;
