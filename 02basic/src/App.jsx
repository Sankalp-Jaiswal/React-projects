import { useState } from 'react'
import Header from './Component/Header.jsx'
import Balance from './Component/Balance.jsx'
import './App.css'
import IncomeExpense from './Component/IncomeExpense.jsx'
import TransactionList from './Component/TransactionList.jsx'
import AddTransaction from './Component/AddTransaction.jsx'
import { GlobalProvider } from './Context/Globalprovider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <div className='card-container'>
      <Header />
      <Balance />
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}

export default App
