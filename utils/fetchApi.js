import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'c3a189bbe6msh004ec8752a89d3ap18e30djsnd18ecf406645' ,
    },
  });
    
  return data;
}