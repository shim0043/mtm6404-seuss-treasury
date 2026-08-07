import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://lustrous-profiterole-958625.netlify.app/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error('Error fetching book details:', err));
  }, [id]);

  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    return `https://lustrous-profiterole-958625.netlify.app${path}`;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img
            src={getImageUrl(book?.coverImage)}
            alt={book?.title || ''}
            className="img-fluid w-100"/>
        </div>

        <div className="col-md-7">
          <h2 className="fs-1">{book?.title}</h2>
          <p className="text-secondary">
            {book?.summary}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;