# [cpbitmap.github.io](https://cpbitmap.githup.io)

![Website](https://img.shields.io/website?label=Website&url=https%3A%2F%2Fcpbitmap.github.io)
![typescript](https://img.shields.io/github/languages/top/cpbitmap.githup.io/cpbitmap.githup.io?label=TypeScript)
![license](https://img.shields.io/github/license/cpbitmap.githup.io/cpbitmap.githup.io?label=License)

## Development

First, clone the repo and install any dependencies:

```
git clone git@github.com:cpbitmap/cpbitmap.github.io.git
npm ci
```

All `npm` dependencies should now be installed. A development server can now be run using:

```
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) with a browser to see a local version of the site.

## Deployment

The site should automatically be deployed to [https://cpbitmap.githup.io](https://cpbitmap.githup.io) by a GitHub action ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that is triggered when any code is pushed to the [`main`](https://github.com/cpbitmap/cpbitmap.github.io/tree/main) branch.

The action uses `next build` and `next export` to generate HTML, CSS, and JS files which can be served statically. Once these files are generated, the [`github-pages-deploy-action`](https://github.com/JamesIves/github-pages-deploy-action) is used to push the generated files to the [`gh-pages`](https://github.com/cpbitmap/cpbitmap.github.io/tree/gh-pages) branch which is used by GitHub pages to serve the files.
