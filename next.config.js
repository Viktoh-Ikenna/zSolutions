const withImages = require("next-images");

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  esModule: true,
  webpack(config, options) {
    return config;
  },
});
