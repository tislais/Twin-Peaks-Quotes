import React, { useState } from 'react';

const Load = () => {

  const [quote, getQuote] = useState(0);

  return (
    <main className="flex pt-12 h-full w-full justify-center items-center">
      <button className="col-span-2 bg-red-400 ml-4 rounded-full text-white w-36 p-2"
        onClick={getQuote}>Get Quote</button>
      <p>{quote}</p>
    </main>
  );
}

export default Load;