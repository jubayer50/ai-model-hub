import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Carts from "./Components/Carts/Carts";
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
  const [carts, setCarts] = useState([]);
  // console.log(activeTab);
  // console.log(carts);

  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Tabs setActiveTab={setActiveTab}></Tabs>

      {activeTab === "models" ? (
        <Models
          modelsPromise={modelsPromise}
          carts={carts}
          setCarts={setCarts}
        ></Models>
      ) : null}

      {activeTab === "cart" ? <Carts carts={carts}></Carts> : null}

      <Footer></Footer>
    </>
  );
}

export default App;
