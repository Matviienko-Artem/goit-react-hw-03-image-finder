import axios from 'axios';

const ourKey = '20021073-06e49a3937cc05a529719264b';

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=${ourKey}&q=${searchQuery}&image_type=photo&per_page=${perPage}&page=${currentPage}`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
