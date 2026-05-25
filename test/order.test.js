const request = require('supertest');
const app = require('../src/app'); // Your Express app

describe('Order API', () => {
  it('rejects unauthenticated', async () => {
    const res = await request(app)
      .post('/api/order').send({ productId: "xxxx", quantity: 1 });
    expect(res.status).toBe(401); // If you require auth
  });

  it('rejects invalid input', async () => {
    const token = "yourvalidjwttoken";
    const res = await request(app)
      .post('/api/order')
      .set('Authorization', `Bearer ${token}`)
      .send({ quantity: 0 }); // Missing productId, quantity < 1
    expect(res.status).toBe(400);
    expect(Array.isArray(res.body.error)).toBe(true);
  });

  // To run: npx jest
});
