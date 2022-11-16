import Navs from "./components/Navigation";
import Caros from "./components/Carousel";
import Searchinput from "./components/Search";
import Card from "./components/Card";
// import {Routes, Route} from "react-router-dom";
import "./App.css";

const App = () => {
  return (
      <div className="back-color">
        <Navs/>       
        <Caros />
        <Searchinput />
     <br/>
     <br/>
       <Card />     
       <br />
       <br />
      </div>

   
  );

  function App(){

    <div className="App">
        <card
        title='card title'
        imageUrl='https://cdn-2.tstatic.net/jakarta/foto/bank/images/logo-serial-manga-one-piece.jpg'
        body='sdasdasdasdasd  '
        />
    </div>
  }
}


export default App;
