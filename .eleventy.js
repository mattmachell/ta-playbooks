const fs = require('fs');

module.exports = function(config) {

    config.addPassthroughCopy('src/imgs');
    config.addPassthroughCopy('src/media');
    config.addPassthroughCopy('src/css');
    config.addPassthroughCopy('src/js');
    //removed until domain created
    //config.addPassthroughCopy('CNAME');

    config.addCollection('playbooks', collection => {
        return [
          ...collection.getFilteredByGlob('./src/playbooks/*.md')
        ].reverse()
      });

    // 404
    config.setBrowserSyncConfig({
        callbacks: {
        ready: function(err, browserSync) {
            const content_404 = fs.readFileSync('dist/404.html');

            browserSync.addMiddleware('*', (req, res) => {
            // Provides the 404 content without redirect.
            res.write(content_404);
            res.end();
            });
        }
        }
    });

    return {
        dir: {
          input: 'src',
          output: 'dist'
        },
        passthroughFileCopy: true
      };
}