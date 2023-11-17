module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{json,ico,html,png,js,css}'],
    swDest: 'build/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
  };
  