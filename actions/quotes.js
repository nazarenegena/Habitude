'use server';

const api_url = 'https://zenquotes.io/api/quotes/';

const images_url =
  'https://api.pexels.com/v1/search?query=motivation&orientation=landscape&size=large&per_page=50';

export async function getRandomQuotes() {
  const response = await fetch(api_url);
  const quotes = await response.json();

  let images = [];
  const res = await fetch(images_url, {
    headers: { Authorization: process.env.PEXELS_API_KEY }
  })
    .then(res => res.json())
    .then(json => {
      images = json['photos'];
    });

  const data = quotes?.map((quote, index) => {
    return { ...quote, image_url: images[index]?.src?.large };
  });

  return data || [];
}
