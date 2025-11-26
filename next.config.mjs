/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  // Opciones básicas de configuración para PWA
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Deshabilita PWA en desarrollo para que no cachee mientras programas
})
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}



module.exports = withPWA(nextConfig)