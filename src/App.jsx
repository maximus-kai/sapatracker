import './App.css'
import Nav  from './Components/Nav';
import Heading from './Components/Heading';
import Balance from './Components/Balance';
import Summary from './Components/Summary';
import History from './Components/HistoryList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {

  return (
    <GlobalProvider >
      <div>
      <h5 className="text-gray-700 text-3xl pt-80 pb-10 font-bold ">
        Working fine, as of April 16, 2024.
          </h5>
          <Nav/>
          <Heading/>
          <Balance/>
          <Summary/>
          <History/>
          <AddTransaction/>
      </div>
 </GlobalProvider>
      )
    }
    
    export default App;
    
    {/* 
    
     */}