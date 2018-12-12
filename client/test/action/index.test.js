import expect from 'expect';
import moxios from 'moxios';
import mockData from '../mockData'
import {
  generateNumbers,
  getPhoneNumbers
} from '../../action';



describe('Number generator actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('get phone numberes', () => {
    it('gets all phone numbers action', async (done) => {
      const { getNumbers } = mockData;
      moxios.stubRequest('/api/phonenumbers', {
        status: 200,
        response: getNumbers
      });
      await getPhoneNumbers()
        .then(() => {
          expect(getNumbers.length).toEqual(4)
        });
      done();
    });
  });

  it('generates numbers', async (done) => {
    const { message } = mockData;
    moxios.stubRequest('/api/numbers', {
      status: 200,
      response: message
    });
    await generateNumbers()
      .then(() => {
        expect(message).toEqual('10 Numbers generated successfully')
      });
    done();
  });
});
