import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://lustrous-profiterole-958625.netlify.app/api/books')
      .then((res) => res.json())
      .then((data) => {
        const bookList = Array.isArray(data) ? data : (data.books || data.data || []);
        setBooks(bookList);
      })
      .catch((err) => console.error('Error fetching books:', err));
  }, []);

  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `https://lustrous-profiterole-958625.netlify.app${path}`;
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {books.map((book) => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <img
                src={getImageUrl(book.coverImage)}
                alt={book.title}
                className="img-fluid"/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;