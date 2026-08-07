import { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://lustrous-profiterole-958625.netlify.app/api/quotes/random')
  }, []);
}

export default Quotes;