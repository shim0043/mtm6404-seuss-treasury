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

  return (
    <div className="container">
      <div>
        {quotes.map((quoteItem, index) => {
          const quoteText = quoteItem.quote || quoteItem.text || '';
          
          const bookTitle = 
            typeof quoteItem.book === 'object' && quoteItem.book !== null
              ? quoteItem.book.title
              : quoteItem.book || '';

          return (
            <div key={quoteItem.id || index}>
              <div>
                <p>{quoteText}</p>
                <p>— Dr. Seuss {bookTitle && <span>in <i>{bookTitle}</i></span>}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Quotes;