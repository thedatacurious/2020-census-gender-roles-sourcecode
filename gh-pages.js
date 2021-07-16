var ghpages = require('gh-pages');

ghpages.publish(
    './public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/thedatacurious/2020-census-gender-roles.git', // Update to point to your repository
        user: {
            name: 'Alexandra Khoo', // update to use your name
            email: 'thedatacurious@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
