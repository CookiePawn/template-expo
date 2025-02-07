require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
});

module.exports = {
  name: 'template-expo',
  scheme: 'template-expo',
  newArchEnabled: true,
  extra: {
    ...process.env
  }
}