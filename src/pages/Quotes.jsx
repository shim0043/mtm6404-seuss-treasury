import { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://lustrous-profiterole-958625.netlify.app/api/quotes/random')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const quotesList = Array.isArray(data) ? data : (data.quotes || data.data || []);
        setQuotes(quotesList);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching quotes:', err);
        setLoading(false);
      });
  }, []);
}

export default Quotes;