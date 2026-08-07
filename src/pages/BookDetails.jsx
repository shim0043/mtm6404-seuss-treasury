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
}

export default BookDetails;