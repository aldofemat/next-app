/** @type {import('next').NextConfig} */
const nextConfig={
    reactStrictMode: true,
}
module.exports = {
    images: {
      domains: ['api.exercisedb.io'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.app',
          port: '',
          pathname: '/image/**',
        },
        
      ],
    },
  }
  
  