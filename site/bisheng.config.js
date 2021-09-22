const themeConfig = require('./themeConfig');

module.exports = {
  exclude: /should-be-ignore/,
  hash: true,
  source: {
    components: './components',
    docs: './docs'
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  themeConfig,
  filePathMapper(filePath) {
    console.log('filePathfilePath', filePath)
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  lessConfig: {
    javascriptEnabled: true,
    modifyVars: {
      'root-entry-name': 'variable',
    },
  },
  // root: '/',
  port: 8111
};