#!/usr/bin/env node
// Simple bcrypt hash generator for convenience.
// Usage: npm run gen:hash -- "Password123!"  (quotes recommended)
const bcrypt = require('bcryptjs');

async function main() {
  const pwd = process.argv[2];
  if(!pwd) {
    console.error('Usage: npm run gen:hash -- "YourPasswordHere"');
    process.exit(1);
  }
  const hash = await bcrypt.hash(pwd, 12);
  console.log('Plain :', pwd);
  console.log('Hash  :', hash);
  console.log('\nSQL example:');
  console.log(`INSERT INTO admins (email, password_hash) VALUES ('admin@example.com', '${hash}');`);
}
main();