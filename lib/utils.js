export const fetchData = async () => {
const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2M0NDcwOWUxOTUzNTI5NTU5NDcwNjRlOWJiMGY1YSIsInN1YiI6IjY1Y2VmOWIwNjY0NjlhMDE3YzA5ZDRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D1_RKh782uQaSh8R5kRmTBKFrEWotyTGCanHzm5ZG2w'
    }
  };

  const url = "https://api.themoviedb.org/3/movie";

  return fetch(`${url}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
  