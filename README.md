# malcolmwilliams.github.io

This is a portfolio website made with Jekyll and GitHub Pages. The goal of this project is to have a simple, clean and free way to easily share projects I have been working on.

# Instructions:

Follow the Jekyll docs for installation intructions: https://jekyllrb.com/docs/

# Development:

Serve locally with:

```
bundle exec jekyll serve
```

View the site at: `http://localhost:4000`

## Generating responsive images:

Install `gulp`

```
npm install --global gulp-cli
npm install --save-dev gulp gulp-responsive
```

Process the images with:

```
gulp images
```

## Testing page speed locally with lighthouse

```
npm install -g lighthouse
```

```
lighthouse http://0.0.0.0:4000/ --view
```

# Tips:

Helpful script to convert `*.HEIC` images to jpg:

```
sudo apt-get install libheif-examples
for file in *.HEIC; do heif-convert $file ${file/%.HEIC/.jpg}; done
```
