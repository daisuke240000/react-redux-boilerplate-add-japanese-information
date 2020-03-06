const path = require('path');
const express = require('express');
const compression = require('compression');

module.exports = function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // 圧縮ミドルウェアは、サーバーの応答を圧縮するため、応答が小さくなります（資産にも適用されます）。
  // Express.jsの公式ドキュメントhttp://mxs.is/googmyで、この手法とその他の優れた
  // プラクティスについて詳しく読むことができます。
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));
};
