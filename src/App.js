import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpensisTotal from './components/ExpensisTotal';
import ExpensesList from './components/ExpensesList';
import AddExpenses from './components/AddExpenses';
import {AppProvider} from "./components/context/AppContext";

function App() {
  return (
    <AppProvider>
    <div className="container">
      <h1 className= "mt-3">Budget-planner</h1>
      <div className="row mt-3">
        <div className= "col-sm">
          <Budget/>
        </div>
        <div className='col-sm'>
          <Remaining/>
        </div>
        <div className='col-sm'>
          <ExpensisTotal/>
        </div>
      </div>
      <h3 className='mt-3'>Expences</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpensesList/>
        </div>
      </div>
      <h3 className='mt-3'>Add expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenses/>
        </div>
      </div>
    </div>
    </AppProvider>
  );
}

export default App;
