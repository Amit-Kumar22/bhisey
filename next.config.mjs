/** @type {import('next').NextConfig} */
const nextConfig = {
  // External packages for serverless functions
  serverExternalPackages: ['pg', 'bcryptjs', 'jsonwebtoken'],
};

export default nextConfig;
