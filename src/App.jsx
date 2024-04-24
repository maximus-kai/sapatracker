import Nav  from './Components/Nav';
import Heading from './Components/Heading';
import Balance from './Components/Balance';
import Summary from './Components/Summary';
import History from './Components/HistoryList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import TestTail from './Components/TestTail';

function App() {

  return (
    <GlobalProvider >
      <div>
          <TestTail/>
      <h5 className="text-gray-300 text-xl text-center pt-80 pb-10 font-bold ">
        Working fine, as of April 23, 2024.
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