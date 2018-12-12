import React, { Component } from 'react';
import Header from './Header';
import { getPhoneNumbers } from '../action'

/**
 * @class PhoneNumbers
 *
 * @classdesc List all phone numbers
 *
 */
class PhoneNumbers extends Component {
  /**
   * constructor - contains the constructor
   *
   * @param  {object} props the properties of the class component
   *
   * @return {void} no return or void
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      dateSort: 'fa fa-sort-alpha-asc',
      numberSort: 'fa fa-sort-numeric-asc',
      phoneNumbers: []
    };
    this.dateSort = this.dateSort.bind(this);
    this.numberSort = this.numberSort.bind(this);
  }

  /**
   * @description - get phone numbers
   *
   * @return {void} no return or void
   *
   */
  componentDidMount() {
    getPhoneNumbers().then((numbers) => {
      this.setState({
        phoneNumbers: numbers
      })
    })
  }

   /**
   * @description - handle date sort
   *
   * @return {void} no return or void
   */
  dateSort() {
    const { phoneNumbers } = this.state;
    if (this.state.dateSort === 'fa fa-sort-alpha-asc') {
      this.descendDate(phoneNumbers)
      this.setState({
        phoneNumbers: phoneNumbers,
        dateSort: 'fa fa-sort-alpha-desc'
      })
    } else {
      this.ascendDate(phoneNumbers)
      this.setState({
        phoneNumbers: phoneNumbers,
        dateSort: 'fa fa-sort-alpha-asc'
      })
    }
  }

  /**
   * @description - sort date in acending order
   *
   */
  ascendDate(phoneNumbers) {
    phoneNumbers.sort((a, b) => {
      var keyA = new Date(a.generatedAt),
        keyB = new Date(b.generatedAt);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  /**
   * @description - sort date in descending order
   *
   */
  descendDate(phoneNumbers) {
    phoneNumbers.sort((a, b) => {
      var keyA = new Date(a.generatedAt),
        keyB = new Date(b.generatedAt);
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
  }

  /**
   * @description - handle number sort
   *
   * @return {void} no return or void
   */
  numberSort() {
    const { phoneNumbers } = this.state
    if (this.state.numberSort === 'fa fa-sort-numeric-asc') {
      this.maxNumber(phoneNumbers)
      this.setState({
        numberSort: 'fa fa-sort-numeric-desc'
      })
    } else {
      this.minNumber(phoneNumbers)
      this.setState({
        numberSort: 'fa fa-sort-numeric-asc'
      })
    }
  }

  assignSortNumber(phoneNumbers) {
    phoneNumbers.forEach((number) => {
      const numbers = number.phoneNumber.replace(/-/gi, "").split('')
      let sum = 0
      numbers.forEach((number) => {
        sum += parseInt(number, 10)
      })
      number.sortNumber = sum
    })

    return phoneNumbers
  }

  /**
   * @description - sort phone number based 
   * on the minimum number
   *
   */
  minNumber(phoneNumbers) {
    this.assignSortNumber(phoneNumbers)
    phoneNumbers.sort((a, b) => {
      var keyA = a.sortNumber,
        keyB = b.sortNumber;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  /**
   * @description - sort phone number based 
   * on the maximum number
   *
   */
  maxNumber(phoneNumbers) {
    this.assignSortNumber(phoneNumbers)
    phoneNumbers.sort((a, b) => {
      var keyA = a.sortNumber,
        keyB = b.sortNumber;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
  }

  /**
   * @description render - renders the class component
   *
   * @return {object} returns an object
   *
   */
  render() {
    const { phoneNumbers } = this.state
    return (
      <div>
        <Header />
        <div className="table-wrapper">
          {
            phoneNumbers.length === 0 ? <h3 style={{ textAlign: 'center', marginTop: 20 }}>No Phone Numbers available</h3> :
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th onClick={this.numberSort} scope="col" id="number-sort">Phone Numbers <i className={this.state.numberSort} aria-hidden="true"></i></th>
                    <th onClick={this.dateSort} scope="col" id="date-sort">Generated Date <i className={this.state.dateSort} aria-hidden="true"></i></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    phoneNumbers.map((number) => {
                      return (
                        <tr key={number.phoneNumber}>
                          <td>{number.phoneNumber}</td>
                          <td>{number.generatedAt}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          }
        </div>

      </div>
    )
  }
}

export default PhoneNumbers;