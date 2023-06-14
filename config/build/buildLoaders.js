import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders({ isDev }) {
  const babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff|avif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  return [
    fileLoader,
    svgLoader,
    babelLoader,
    cssLoader,
  ];
}
