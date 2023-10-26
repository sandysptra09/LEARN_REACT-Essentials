// import {Fragment} from 'react'; => untuk mengganti element parent
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    // bisa juga hanya menggunakan <> dan </> saja atau dengan tag <Fragment></Fragment> 
    // untuk mengganti pembungkus (<div></div>) atau bisa disebut juga dengan parents
    <div>
      <Header />
      <main>
        <CoreConcepts/>       
        <Examples/>
      </main>
    </div>
  );
}

export default App;
