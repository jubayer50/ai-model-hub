import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Models from "./Components/Models/Models";
import NavBar from "./Components/NavBar/NavBar";

const getModel = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelsPromise = getModel();

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Banner></Banner>

      <Models modelsPromise={modelsPromise}></Models>

      <Footer></Footer>
    </>
  );
}

export default App;
