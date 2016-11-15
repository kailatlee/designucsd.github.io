---
layout: post
title: Intro to HTML/CSS Workshop
hosted: Hosted by Design at UCSD
time: Wednesday, Nov 20, 7:00-8:30pm
location: H&SS 1346
image: FA16_IntroHTML.png
published: true

excerpt: Knowing HTML and CSS can help you build great websites, though getting started with it may seem daunting at first. Join us at this hands-on workshop where we tackle the basics of HTML and CSS. Just bring your computer and your favorite text editor.
---
Note: this guide is still a WIP

## Getting Set Up

If you haven't already done so, find and install a text editor. Here are two we recommend:

* [Sublime Text](https://www.sublimetext.com/)
* [Atom](https://atom.io/)

Go ahead and create a folder to hold everything in this workshop. Call it something like `HTMLWorkshop`. Navigate into that directory and create a file called `index.html` using your new code editor.

Now go ahead and write this in your `index.html`

```
Hello World!
```

Then navigate to the file in your browser to view it. You should see something like this:

![](/public/images/events/FA16_IntroHTML_HelloWorld.jpg)

### Wait, so what do HTML and CSS do?

HTML (HyperText Markup Language) basically describes the structure of a webpage, while CSS (Cascading Style Sheets) gives the styles (positioning, colors, etc) of elements on the webpage.

### Introductory HTML

Now go ahead and paste this code into your index.html:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Welcome to HTML and CSS!</title>
    </head>
    <body>
        <div>
            <h1>My first HTML page</h1>
            <p>This is my first HTML page</p>
            <!-- This is a comment and it won't show up -->
            <p>Here's some text content </p>
        </div>
    </body>
</html>
```
Now refresh the browser to view this new content.

The elements inside the angled brackets are called `tags`. Most of these tags require a corresponding **closing tag**, ie `<h1>` and `</h1>`. Here's what each of these do:

* `<!DOCTYPE html>` Tells the browser this is an HTML5 file.
* `<html>` Root element of HTML page
* `<head>` Contains undisplayed information about this HTML document
* `<title>` Denotes title (displayed on tab or window bar) of page
* `<body>` Contains all content of an HTML document
* `<div>` Denotes a division (like a section) of an HTML document
* `<h1>` Largest header tag - used for key headers
* `<p>` A paragraph tag - used for most text content

There are many more types of tags you'll encounter as you continue learning frontend, but these should be enough for now. 

### Cascading Style Sheets

Given your newfound knowledge of basic HTML, it's time to dive into basic CSS. 

First let's try something. Change your `<p>` tag in your HTML file to `<p style="color: red">`. Refresh your browser and see what happens.

Imagine if you had to add *inline styles* (like we just did) to style every element on the page. There must be some more reusable and less cluttery way to denote styling. This is where **classes** and **ids** come in. CSS can specify properties (read: styles like color or positioning) that define the behavior of **certain classes and ids**. This gives us immense power and separated, reusable code. Note that ids are unique (so you can only have one of a certain id on a page).

You can add classes and ids like so:

```html
<p class="your-class" id="your-id">Content here</p>
```

We'll also need to link our stylesheet. Create a file called `stylesheet.css` and add this line to in your HTML `head`.

```html
<link rel="stylesheet" href="stylesheet.css">
```

Let's try to add a class and add properties with our stylesheet. Add a class to your `<h1>` and add this in your CSS, replacing the class name.

```css
/* This is a css comment */
.your-class-name {
  color: #A31C88;
}
```

Now refresh your page and see what happens. Cool, right? Note that the period before the class name in the css is necessary (but in the HTML don't include the period). Similar for hashtags, which are used for ids. Tags (like `<p>` or `<div>`) require no preceding characters. Here's the syntax:

```css
#your-id-name {
  /* Your properties */
}
div {
  /* Your properties */
}
```

Currently the colors we've added don't seem to add the best aesthetic, so we'd like to probably like to pick better colors. [Here's](http://colorhunt.co/) a quick resource. Try using classes and ids to change the colors of your text. For text content it's often good to use a gray to reduce contrast. Here's a good one: `#555`.

```css
/* If you're stuck, you can try this: */
p {
  color: #555;
}
```

Right now, our text appears to span the entire width of the page, making it difficult to read, so let's update that. Add a class for your `<div>` tag with a relevant name (like 'container') and add some css.

```css
.your-div-class-name {
  margin: auto;
  max-width: 800px;
}
```

Now viewing this in desktop, we can see that the content centers nicely on the page. Congratulations! You've learned a way to center things in CSS. 

There's definitely more we can do though. How about using a nicer font? Let's start with a [web safe](http://www.w3schools.com/cssref/css_websafe_fonts.asp) font. We'll pick a nice, popular sans-serif, ~~Comic Sans~~ Helvetica. 

```css
/* See how we can deal with multiple tags at once
 * Also note that we're using 'sans-serif' as a fallback
 * font for Helvetica.
 */
h1, p {
  font-family: Helvetica, sans-serif;
}
```

Now refresh your browser and see what happens. Isn't that so much more readable? Currently, though, we don't have much content. 

## Building a hero page

## What's next?
Now that we've covered the basics of HTML and CSS, what's next? To become a frontend developer, you'd need to learn and do a couple more things:

* Javascript
* Mobile friendliness
* Frontend frameworks (like Bootstrap)
* Practice, practice, practice!


## Additional resources
Here are some resources for you to continue learning frontend:

* [This Medium post](https://medium.freecodecamp.com/from-zero-to-front-end-hero-part-1-7d4f7f0bff02): A good post on how to get started with frontend development in general.
* [CodeAcademy Tutorial](https://www.codecademy.com/learn/web): A hands-on tutorial teaching you the basics of HTML, CSS, and later on Bootstrap (also recommended by the above post).
* [Check this out](http://jgthms.com/web-design-in-4-minutes/) for an interesting, quick brief on effective lightweight HTML/CSS, in which some of this tutorial is based on