# Jekyll Theme - Mundana by WowThemes.net

### Live Demo

[Live Demo](https://wowthemesnet.github.io/mundana-theme-jekyll/) &nbsp; | &nbsp; 
[Download](https://github.com/wowthemesnet/mundana-theme-jekyll/archive/master.zip) &nbsp; | &nbsp; 
[Buy me a coffe](https://wowthemesnet.github.io/mundana-theme-jekyll//buy-me-a-coffee.html)

![mundana jekyll theme screenshot](assets/images/screenshot.jpg)

### Install Mundana

- [Download](https://github.com/wowthemesnet/mundana-theme-jekyll/archive/master.zip) or `git clone https://github.com/wowthemesnet/mundana-theme-jekyll`
- In Mundana's newly created directory `bundle`
- Change your configuration in `_config.yml`. If your site is in root, for `baseurl`, make sure this is set to `baseurl: ''`

### Use

**YAML Post Example**:

```
---
layout: post
title:  "We all wait for summer"
author: john
categories: [ Jekyll, tutorial ]
image: assets/images/5.jpg
featured: true
---
```


### Features

- Built for Jekyll
- Compatible with Github pages
- Featured Posts
- Index Pagination
- Post Share
- Post Categories
- Prev/Next Link
- Category Archives (this is not yet compatible with github pages though)
- Jumbotron Categories
- Integrations:
    - Disqus Comments
    - Google Analaytics
    - Mailchimp Integration
- Design Features:
    - Bootstrap v4.x
    - Font Awesome
    - Masonry
- Layouts:
    - Default
    - Post
    - Page
    - Archive
    
### Using Mediumish

- Open `_config.yml`. If your site is in root, for `baseurl`, make sure this is set to `baseurl: ''`
Also, change your Google Analytics code, disqus username, authors, Mailchimp list etc.
- Mediumish requires 2 plugins: 
    - `$ gem install jekyll-paginate`
    - `$ gem install jekyll-archives`.
- Edit the menu and footer copyrights in `default.html`
- Start by adding your .md files in `_posts`. Mediumish already has a few as an example. 
- YAML front matter
    - featured post - `featured:true`
    - exclude featured post from "All stories" loop to avoid duplicated posts - `hidden:true`
    - post image - `image: assets/images/mypic.jpg`
    - page comments - `comments:true`
    - meta description (optional) - `description: "this is my meta description"`
    
**YAML Post Example**:

```
---
layout: post
title:  "We all wait for summer"
author: john
categories: [ Jekyll, tutorial ]
image: assets/images/5.jpg
---
```

`comments: false` - disable comments in posts

`image: "https://www.myexternal.com/image.jpg"`  - set external featured image

`tags: [featured]` - to display Featured posts on homepage


**YAML Page Example**:

```
---
title: "About"
permalink: "/about.html"
image: "/assets/images/screenshot.jpg"
---
```

### Contribute

- [Clone the repo](https://github.com/wowthemesnet/mundana-theme-jekyll).
- Create a branch off of master and give it a meaningful name (e.g. this-new-feature).
- Open a pull request on GitHub and describe the feature or fix.

Thank you so much for your contribution!


### Copyright

Copyright (C) 2019 WowThemes.net.

Theme designed and developed by [Sal](https://www.wowthemes.net), *free* under MIT license. 

<a href="https://wowthemesnet.github.io/mundana-theme-jekyll//buy-me-a-coffee.html" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

### Live Demo

[Live Demo](https://wowthemesnet.github.io/mundana-theme-jekyll/)