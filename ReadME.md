# Steven Universe The Movie Alternate Cut Tumblr theme

This tumblr theme is influenced by [Simple Webcomic Theme](https://github.com/geoneo1/SimpleWebcomicTheme) written by [George Neocleous](https://github.com/geoneo1).

However, that theme is no longer actively maintained, and it leaves quite a bit to be desired.

Tumblr has since been updated numerous times since the theme was created. Most recently, Tumblr added a [pinned posts](https://tumblr.zendesk.com/hc/en-us/articles/360047994014-Pinned-posts) feature which is not supported.

It was my goal to create a minimalistic, responsive, and modern theme replacement that kept or improved the major features of the original theme. It adds support for new features introduced to Tumblr and is well-commented and easy-to-maintain.

The theme is written specifically with the clients in mind, and thus some SVGs, default variables, etc. are not relevant for other users.

## Dependencies

This theme depends on [Bootstrap v4.5](https://github.com/twbs/bootstrap/tree/v4.5.0). It uses Bootstrap css and scripts. 

Bootstrap, and therefore this theme, is co-dependent on [jQuery 3.5.1](https://github.com/jquery/jquery/tree/3.5.1) and [Popper.js 1.16.0](https://github.com/popperjs/popper-core/tree/v1.16.0).

Install Bootstrap via instructions located on [their website](https://getbootstrap.com/).

## Installation Guide

There are two options for installing this theme.

1. Host the `src` directory on some server to properly separate components. This increases maintainability, but for the purposes of Tumblr may be unnecessary.
1. Use the monolithic `index.html` file found in the `dist` directory. This is the easiest approach for installing via Tumblr - simply copy and paste the HTML into your theme editor - but this file may be more difficult to maintain.

## Main Features

1. Spoilers - Spoilers may appear on the home page of the Tumblr blog. Spoiler content is blurred unless tapped on a mobile device or hovered over otherwise. To mark a post as a spoiler, tag it with `#sumac-spoiler`, `#sumac spoiler`, or `#sumac_spoiler`.
1. Navigation Bar Blur - On thin screens, when the navigation bar is expanded, the focus of the screen may be ambiguous. To remedy this issue, when the navigation bar is expanded on a small enough screen whereby it appears on top of content, the content behind is blurred.
1. Chapter Home Page - Preview a grid of images with clickthrough links on your home page instead of viewing posts. This allows for quick navigation to specific chapters or standard chronologically tagged posts. For example, you may have a tag `#fullcomic` which is viewable in chronological (i.e. standard comic format) order through `/tagged/fullcomic/chrono`.
1. Redirect Home Page - Automatically redirect to a new page whenever the visitor visits your_blog.tumblr.com. This may be useful to redirect to a specific chronological tagged page for proper navigation, or perhaps to redirect to a cover page.
1. SVG Icons - Icons included in the theme use vector graphics so that they appear in perfect quality regardless of device or screen size.
1. Localization - Visitors with various locales will see Tumblr-specific and Tumblr-supported verbiage in their language.
1. Well Commented HTML - It is relatively easy to maintain this theme because of the comments guiding your way through the code.
1. Responsive - This theme is compatible with mobile devices, although the preferred viewing medium is a desktop, tablet, or laptop.
1. Analytic Support - Support for Google analytics or Clicky.
1. Tumblr Pages - When you create a new Tumblr page through your theme, that page link is accessible in the theme's navigation bar.
1. Background Images - Use a background image instead of a background color.
1. Share Popover - Individual posts may optionally include a share button and popover for quick access to share to Facebook, Pinterest, and Twitter.
1. Custom Fonts - View the theme in non-standard fonts thanks to Google font support.

## Known Issues

1. The expand/retract navigation bar buttons do not necessarily align depending on navigation bar size and screen size.
1. To dismiss a share popover, the share button must be tapped again. Ideally, the popover would dismiss whenever you click outside of the bounds of the popover. Note: This should not cause the popover to dismiss when you click *inside* of the bounds of the popover, and it's better to keep this known issue behavior than to introduce dismissal when clicking inside of the popover.

## Preview

There is a preview of this theme available at [https://testing-theme-for-sumac.tumblr.com/](https://testing-theme-for-sumac.tumblr.com/).
