module.exports = {
  cloudinaryUri: process.env.CLOUDINARY_URL,
  baseUrl: process.env.BASE_URL || 'http://localhost:8000',
  maxPageSize: process.env.MAX_PAGE_SIZE || 25,
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/rc_test'
};
