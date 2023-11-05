import axios from 'axios';

export async function getImg(searchValue, page) {
  const options = new URLSearchParams({
    key: '40327918-ba28b3f3e38de725167cd32ac',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  });
  try {
    const resp = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?${options}`,
    });
    return resp.data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
