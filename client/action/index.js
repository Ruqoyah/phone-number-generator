import axios from 'axios';

/**
 * @description Generate phone numbers
 *
 */
export const generateNumbers = () => 
  axios.get('/api/numbers')
    .then((response) => {
      return response.data.message
    })
    .catch(error => Promise.reject(error.response.data.message));

/**
 * @description Get phone numbers
 *
 */
export const getPhoneNumbers = () => 
axios.get('/api/phonenumbers')
  .then((response) => {
    return response.data
  })
  .catch(error => Promise.reject(error.response.data.message));


export default generateNumbers;
