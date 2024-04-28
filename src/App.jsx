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