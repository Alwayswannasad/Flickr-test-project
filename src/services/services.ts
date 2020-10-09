import axios from 'axios';
import {API} from '../utils/API';

export const searchFoPhotos = async (text) => {
  try {
    let url = `${API.newUrl}rest/?method=flickr.photos.search&api_key=d923a0f1212913d6401991e26c3959f3&user_id=&text=${text}&format=json&nojsoncallback=1`;
    const {data} = await axios.post(url);
    return data;
  } catch (error) {
      console.log(error);
  }
};
