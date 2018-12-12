import express from 'express';
import { numberGenerator, getPhoneNumbers } from './numberGenerator';


const router = express.Router();

/** generate numbers Route
 *
 * @param  {} newContact
 */
router.route('/numbers')
  .get(numberGenerator);

/** get phone numbers Route
 *
 * @param  {} newContact
 */
router.route('/phonenumbers')
.get(getPhoneNumbers);



export default router;
