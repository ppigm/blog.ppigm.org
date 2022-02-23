# PPI Greater Manchester Blogs

A [Gatsby](http://gatsbyjs.com/) blog powered by [Contentful](https://www.contentful.com).

### Preface
Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Contentful comes into play.

With Contentful and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content and automate the publishing using services like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/).

## Getting started

See our [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

### 1. Get the source code and install dependencies.

```zsh
$ git clone https://github.com/ppigm/blog.ppigm.org.git
$ npm install
```

### 2. Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`

This command will ask you for a `spaceID`, and access tokens for the Contentful Management and Delivery API.

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.

----
## Guides
### Deployment

See the [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

A blog on your local machine is nice to have, but a blog on the internet is even better. Return to the [tutorial doc](https://www.contentful.com/developers/docs/tutorials/general/get-started/#deploy-the-starter-gatsby-blog), select a hosting service (Gatsby Cloud, Netlify, or Heroku) and follow the instructions to deploy.

### Explore the blog content structure

Return to the [tutorial doc](https://www.contentful.com/developers/docs/tutorials/general/get-started/#explore-how-the-sample-website-is-built-with-contentful) to view the relationship between the blog content and the data model.

### Modify content and redeploy

Follow this [tutorial](https://www.contentful.com/developers/docs/tutorials/general/automate-site-builds-with-webhooks/) to learn how to use webhooks to automate the process of redeploying your site after publishing new content.

-----

## Contribution

Feel free to open pull requests to fix bugs. If you want to add features, please have a look at the [original version](https://github.com/contentful-userland/gatsby-contentful-starter). It is always open to contributions and pull requests.

You can learn more about how Contentful userland is organized by visiting [our about repository](https://github.com/contentful-userland/about).
