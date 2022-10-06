import "./App.css"


import { Main } from "../../components/Main";
import { AppContext} from "../../components/context";


function App() {


  return (
    <AppContext>
      <div className="App">
       
        <Main />
      </div>
    </AppContext>
  );
}

export default App;
