
import { useState, useEffect } from 'react'
import './App.css'
import Quote from './components/Quote'
import { QuotesContextProvider } from './Context/QuoteContext'

function App() {

  return (
    <QuotesContextProvider>
      <Quote />
    </QuotesContextProvider>
  )
}

export default App
