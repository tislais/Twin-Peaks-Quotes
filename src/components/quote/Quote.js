import React from 'react';

const Quote = ({ quote }) => {
  return (
      <>
        <h1 className="font-bold mt-12 mb-6 text-3xl">{quote.name}:</h1>
        <p className="w-1/4 text-lg">"{quote.quoteTextOnly}"</p>
      </>
  )
}

export default Quote;