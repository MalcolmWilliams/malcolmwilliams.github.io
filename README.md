# malcolmwilliams.github.io

This is a portfolio website made with Jekyll and GitHub Pages. The goal of this project is to have a simple, clean and free way to easily share projects I have been working on.

# Instructions:

Follow the Jekyll docs for installation intructions: https://jekyllrb.com/docs/

# Development:

Serve locally with:

```
bundle exec jekyll serve --host 0.0.0.0
```

View the site at: `http://localhost:4000`

> :note: Adding the `--host 0.0.0.0` option allows us to listen to all available IP addresses. This means we can preview the locally served development website on another device on the local network, such as a cellphone.

# Improving site performance:

As this is a visual media heavy portfolio, images are by far the largest source of poor performance. The best approaches to improving performance is responsive image loading and using efficient encoding schemes. Thanks to these changes the PageSpeed performance score was improved from a [laggy 37](https://pagespeed.web.dev/analysis/https-malcolmwilliams-ca-artwork-2023-06-10-artwork-html/pnrdknalok?form_factor=mobile) to a [blisteringt 91](https://pagespeed.web.dev/analysis/https-malcolmwilliams-ca-artwork-2023-06-10-artwork-html/6b10ldrb9c?form_factor=mobile).

From each image in the `assets` folder, multiple smaller images can be generated automatically using a `gulp` task. We will generate both a jpg (for maximum compatibility) and webp (for maximum compression efficiency) version of each image.

### Generating responsive images:

Install `gulp`

```
npm install --global gulp-cli
npm install --save-dev gulp gulp-responsive
```

Process the images with:

```
gulp images
```

### Testing page speed locally with lighthouse

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
