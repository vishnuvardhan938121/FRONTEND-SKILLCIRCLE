const path = require('path');

module.exports = {
  // other configurations...

  resolve: {
    fallback: {
      "stream": false,
      "url": require.resolve("url"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "assert": require.resolve("assert"),
      "buffer": require.resolve("buffer/"), // If you're using buffer
    },
  },

  // If you're using the buffer in your code, make sure to include the Buffer polyfill
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
