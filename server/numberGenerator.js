import path from 'path';
import fs from 'fs';

/**
 * Generate phone numbers
 *
 * @param {object} req - request object
 * @param {object} res - response object
 *
 */
export const numberGenerator = async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../client/store/index.json')
    let file = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    let lastNumber
    file.phoneNumbers.forEach((number) => {
      lastNumber = number
    })

    const phoneNumbers = []

    let phoneNumber
    if(!lastNumber) {
      phoneNumber = 911000000
    } else {
      phoneNumber = parseInt(lastNumber.phoneNumber.replace(/-/gi, ""), 10)
    }

    for (let x = 0; x < 10; x++) {
      phoneNumber++
      const number = "0".concat(phoneNumber)
      phoneNumbers.push({phoneNumber: number.substring(0,3) + "-" + number.substring(3,6) + "-" + number.substring(6, number.length), generatedAt: new Date()})
    }

    phoneNumbers.forEach((phoneNumber) => {
      file.phoneNumbers.push(phoneNumber)
    })
    fs.writeFileSync(filePath, JSON.stringify(file))
  
    return res.status(200).json({message: '10 Numbers generated successfully'})
  } catch(err) {
    return res.status(500).json({error: err.message})
  }
}
 

/**
 * Get phone numbers
 *
 * @param {object} req - request object
 * @param {object} res - response object
 *
 */
export const getPhoneNumbers = async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../client/store/index.json')
    let file = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    return res.status(200).json(file.phoneNumbers)
  } catch(err) {
    return res.status(500).json({error: err.message})
  }
}