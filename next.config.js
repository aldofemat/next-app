/** @type {import('next').NextConfig} */
const nextConfig={
    reactStrictMode: true,
}
module.exports = {
    images: {
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
  
  