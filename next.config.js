const prod = process.env.NODE_ENV === "production";
module.exports = {
  assetPrefix: prod ? `/${process.env.NEXT_PUBLIC_REPO_NAME}/` : ".",
  reactStrictMode: true,
  // https://github.com/oliver-moran/jimp/issues/903#issuecomment-913092950
  // https://github.com/vercel/next.js/issues/21703#issuecomment-888001471
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};
