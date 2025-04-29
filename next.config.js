/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // For Sanity.io image hosting
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/fonts/',
        },
      },
    });
    return config;
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      preprocess: false,
    },
  },
  // Ensure CSS is properly handled in production
  experimental: {
    optimizeCss: true,
  },
  // Enable static optimization
  output: 'standalone',
}

module.exports = nextConfig 
module.exports = nextConfig 