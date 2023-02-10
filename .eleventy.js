const fs = require('fs');
const rssPlugin = require('@11ty/eleventy-plugin-rss');

module.exports = function(config) {

    config.addPassthroughCopy('src/imgs');
    config.addPassthroughCopy('src/media');
    config.addPassthroughCopy('src/css');
    config.addPassthroughCopy('src/js');
    //removed until domain created
    //config.addPassthroughCopy('CNAME');

    config.addPlugin(rssPlugin);

    config.addCollection('playbooks', collection => {
        return [
          ...collection.getFilteredByGlob('./src/playbooks/*.md').sort((a, b) => {
            if (a.data.title > b.data.title) return -1;
            else if (a.data.title < b.data.title) return 1;
            else return 0;
          })
        ]
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