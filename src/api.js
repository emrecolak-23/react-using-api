import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID HCeJujPAkaWOALlF7Fm3QVpxJY1y2289rsFSgmIvxOo',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
