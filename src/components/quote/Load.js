import React from 'react';
import Quote from './Quote';

const Load = ({ quote, getQuote }) => {


  return (
    <main className="flex pt-12 h-full w-full flex-col justify-center items-center">
      <button className="bg-pink-500 hover:bg-pink-400 font-bold uppercase tracking-widest rounded-full text-white px-8 py-4"
        onClick={getQuote}>Load Quote</button>

      {quote
        ? <Quote quote={quote} />
        : <p className="mt-12 text-lg font-semibold">Click the button</p>
      }

    </main>
  );
}

export default Load;