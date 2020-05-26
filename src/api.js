import axios from 'axios';

const getData = async ()=> {
  const res = await axios.get(`http://127.0.0.1:3001/api/all`);
  console.log('getData() called. Returning res.data: ', res.data)
  return res.data;
}

export { getData };