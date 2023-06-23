# malcolmwilliams.github.io

This is a portfolio website made with Jekyll and GitHub Pages. The goal of this project is to have a simple, clean and free way to easily share projects I have been working on.

# Instructions:
This project relies on Ruby 3, and Node 14.

Follow the Jekyll docs for [installation intructions](https://jekyllrb.com/docs/installation/ubuntu/).
```
sudo apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler
```

Install the required gems:
```
bundle install
```

Install node requirements:
```
npm install
```

Note, this was tested on the following versions:
```
node 14.19.3
npm 6.14.17
```
If there are installation errors, you may want to check your node version and install to match:
```
sudo npm cache clean -f
sudo npm install -g n
sudo n 14.19
```


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

Gulp is configured as a script in `package.json`. To generate new responsive images, simply:
```
npm run gulp images
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
