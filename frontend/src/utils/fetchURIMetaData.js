import axios from 'axios';

async function getURIMetaData(uri) {
    const response =await axios.get(uri);
    return response.data;
}

export {getURIMetaData};