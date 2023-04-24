module.exports = {
    apps: [
      {
        name: 'my-app',
        script: 'serve',
        env: {
          PM2_SERVE_PATH: './build',
          PM2_SERVE_PORT: 3000, // You can set the port you want your app to run on
          PM2_SERVE_SPA: 'true',
          PM2_SERVE_HOMEPAGE: '/index.html'
        }
      }
    ]
  };
  