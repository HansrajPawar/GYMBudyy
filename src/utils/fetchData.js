
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '982c5098d0msh46d3e00674e8230p13c49djsn39f1096c06d1',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '982c5098d0msh46d3e00674e8230p13c49djsn39f1096c06d1',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};