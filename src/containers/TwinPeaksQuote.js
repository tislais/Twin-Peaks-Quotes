import React, { useState } from 'react';
import Header from '../components/Header';
import Load from '../components/quote/Load';
import { makeRequest } from '../services/twinPeaksApi';

export default function TwinPeaksQuote() {
  
  const [quote, setQuote] = useState();

  const getQuote = async () => {
    const resQuote = await makeRequest();
    setQuote(resQuote);
  }

  return (
    <div className="App h-screen">
      <Header />
      <Load quote={quote} getQuote={getQuote} />
    </div>
  );
}