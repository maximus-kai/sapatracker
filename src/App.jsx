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
    <GlobalProvider>
      <h5 className="text-3xl font-bold underline">
        Working fine, as of march 30, 2024.
          </h5>
          <Nav/>
          <Heading/>
          <Balance/>
          <Summary/>
          <History/>
          <AddTransaction/>
 </GlobalProvider>
      )
    }
    
    export default App;
    
    {/* 
    
     */}