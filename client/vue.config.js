const path = require('path');

module.exports = {
    devServer: {
        proxy: {
            'api': {
                target: 'http://localhost'
            }
        }
    },
    outputDir: path.resolve(__dirname, '../public')
}