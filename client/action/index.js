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

/**
 * @description Get phone numbers
 *
 */
export const getPhoneNumbers = () => 
  axios.get('/api/phonenumbers')
    .then((response) => {
      return response.data
    })


export default generateNumbers;
