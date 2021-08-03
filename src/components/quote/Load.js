import React, { useState } from 'react';
import { makeRequest } from '../../services/twinPeaksApi';

const Load = () => {

  const [quote, setQuote] = useState();

  const getQuote = async () => {
    const resQuote = await makeRequest();
    setQuote(resQuote);
  }

  return (
    <main className="flex pt-12 h-full w-full flex-col justify-center items-center">
      <button className="col-span-2 bg-blue-500 hover:bg-green-500 font-bold uppercase tracking-widest ml-4 rounded-full text-white w-36 p-2"
        onClick={getQuote}>Load</button>
      {quote ?
        <>
          <h1 className="font-bold mt-12 mb-6 text-3xl">{quote.name}:</h1>
          <p className="w-1/4 text-lg">"{quote.quoteTextOnly}"</p> 
        </>
        : <p>click the button</p>
        }
    </main>
  );
}

export default Load;