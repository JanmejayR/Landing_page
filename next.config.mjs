/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
      // Add a rule for handling .gltf files
      config.module.rules.push({
        test: /\.(gltf|glb)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/gltf/', // Path where the files will be saved
              publicPath: '/_next/static/gltf/', // Path used in the application to access the files
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  