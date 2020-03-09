const key =
  "?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";
const url = `https://api.unsplash.com/photos`;

const fetchImages = async page => {
  const response = await fetch(`${url}${key}&page=${page}`);
  const data = await response.json();
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchImageStats = async id => {

  console.log(`${url}/${id}/statistics${key}`);
  
  const response = await fetch(`${url}/${id}/statistics${key}`);
  const data = await response.json();
  if (response.status > 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchImages,fetchImageStats };
