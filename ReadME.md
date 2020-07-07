# Steven Universe The Movie Alternate Cut Tumblr theme

This tumblr theme is influenced by [Simple Webcomic Theme](https://github.com/geoneo1/SimpleWebcomicTheme) written by [George Neocleous](https://github.com/geoneo1).

However, that theme is no longer actively maintained, and it leaves quite a bit to be desired.

Tumblr has since been updated numerous times since the theme was created. Most recently, Tumblr added a [pinned posts](https://tumblr.zendesk.com/hc/en-us/articles/360047994014-Pinned-posts) feature which is not supported.

It was my goal to create a minimalistic, responsive, and modern theme replacement that kept or improved the major features of the original theme. It adds support for new features introduced to Tumblr and is well-commented and easy-to-maintain.

## Dependencies

This theme depends on [Bootstrap v4.5](https://github.com/twbs/bootstrap/tree/v4.5.0). It uses Bootstrap css and scripts. 

Bootstrap, and therefore this theme, is co-dependent on [jQuery 3.5.1](https://github.com/jquery/jquery/tree/3.5.1) and [Popper.js 1.16.0](https://github.com/popperjs/popper-core/tree/v1.16.0).

Install Bootstrap via instructions located on [their website](https://getbootstrap.com/).

## Installation Guide

There are two options for installing this theme.

1. Host the `src` directory on some server to properly separate components. This increases maintainability, but for the purposes of Tumblr may be unnecessary.
1. Use the monolithic `index.html` file found in the `dist` directory. This is the easiest approach for installing via Tumblr - simply copy and paste the HTML into your theme editor - but this file may be more difficult to maintain.
