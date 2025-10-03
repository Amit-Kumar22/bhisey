import request from 'supertest';
import app from '../src/app';
import { pool } from '../src/config/db';
import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';

// Ensure required env vars for JWT in test (fallbacks for test runtime)
process.env.JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'test_access_secret_12345678901234567890';
process.env.JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'test_refresh_secret_12345678901234567890';

describe('Auth API', () => {
  const email = 'test-admin@example.com';
  const password = 'TestPass123!';
  let adminId: string;

  beforeAll(async () => {
    // Clean previous test admin
    await pool.query('DELETE FROM admins WHERE email = $1', [email]);
    const hash = await bcrypt.hash(password, 12);
    adminId = uuid();
    await pool.query('INSERT INTO admins (id, email, password_hash) VALUES ($1,$2,$3)', [adminId, email, hash]);
  });

  afterAll(async () => {
    await pool.query('DELETE FROM admins WHERE email = $1', [email]);
    await pool.end();
  });

  it('rejects invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email, password: 'wrongpass' });
    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it('logs in with valid credentials and returns tokens', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email, password });
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.token).toBeDefined();
    expect(res.body.data.refreshToken).toBeDefined();
    expect(res.body.data.user.email).toBe(email);
  });

  it('refreshes access token', async () => {
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email, password });
    const refreshToken = loginRes.body.data.refreshToken;
    const refreshRes = await request(app)
      .post('/api/auth/refresh')
      .send({ refreshToken });
    expect(refreshRes.status).toBe(200);
    expect(refreshRes.body.data.token).toBeDefined();
  });
});