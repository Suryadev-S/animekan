import axios from 'axios';

const searchFunc = async (url) =>{
    // console.log(url);
    const response = await axios.get(url);
    return response.data;
}

export default searchFunc;