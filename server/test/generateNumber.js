import expect from 'expect';
import supertest from 'supertest';
import 'babel-polyfill';
import app from '../app';

describe('Number generator: ', () => {
  it('generate numbers', (done) => {
    supertest(app)
      .get('/api/numbers')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body.message).toBe('10 Numbers generated successfully');
        done();
      });
  });

  it('gets all phone numbers', (done) => {
    supertest(app)
      .get('/api/phonenumbers')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body);
        done();
      });
  });
});

