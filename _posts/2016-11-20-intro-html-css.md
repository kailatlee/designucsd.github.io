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
## Table of Contents

* TOC
{:toc}

## Getting Set Up

If you haven't already done so, find and install a text editor. Here are two we recommend:

* [Sublime Text](https://www.sublimetext.com/){:target="_blank"}
* [Atom](https://atom.io/){:target="_blank"}

Go ahead and create a folder to hold everything in this workshop. Call it something like `HTMLWorkshop`. Navigate into that directory and create a file called `index.html` using your new code editor.

Now go ahead and write this in your `index.html`

```
Hello World!
```

Then navigate to the file in your browser to view it. You should see something like this:

![](/public/images/events/FA16_IntroHTML_HelloWorld.jpg)

## What are HTML and CSS?

* HTML (HyperText Markup Language) describes the structure of a webpage
* CSS (Cascading Style Sheets) gives the styles (positioning, colors, etc) of elements on the webpage.

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
            <!-- This is a HTML comment and it won't show up -->
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

Imagine if you had to add *inline styles* (like we just did) to style every element on the page. There must be some more reusable and less cluttery way to denote styling. 

This is where **classes** and **ids** come in. CSS can specify style properties that define the behavior of **certain classes, ids, and HTML tags**. This gives more power and separated, reusable code. (Note that ids are unique so you can only have one of a certain id on a page). You can add classes and ids like so:

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

**An important note about css**: Generally (but not always), later properties will override new ones. Try adding `color: blue` and `color: red` to the same class and see what happens.

## Building a website

Now that you've got a hang of basic HTML and CSS, we can move on to more advanced content. Copy paste this HTML into a new file and create an empty file called `stylesheet.css` in the same directory. Then, open the HTML file in your browser.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>The Gnat and the Bull</title>
        <link rel="stylesheet" href="stylesheet.css" />
    </head>
    <body>
        <h1>The Gnat and the Bull</h1>
        <div>
            <p>
              A Gnat alighted on one of the horns of a Bull, and remained sitting there for a considerable time. When it had rested sufficiently and was about to fly away, it said to the Bull, "Do you mind if I go now?" The Bull merely raised his eyes and remarked, without interest, "It’s all one to me; I didn’t notice when you came, and I shan’t know when you go away."
            </p>
            <p>
              We may often be of more consequence in our own eyes than in the eyes of our neighbours.
            </p>
        </div>
    </body>
</html>
```

There's definitely more we can do though. How about using a nicer font? Let's start with a [web safe](http://www.w3schools.com/cssref/css_websafe_fonts.asp){:target="_blank"} font. We'll pick a nice, popular sans-serif, ~~Comic Sans~~ Helvetica. 

```css
/* See how we can deal with multiple tags at once
 * Also note that we're using 'sans-serif' as a fallback
 * font for Helvetica.
 */
body {
  font-family: "Helvetica", sans-serif;
}
```

Side note: try playing around with other web-safe font names. 

### A Heroic Step

Now let's add a hero for the title. Add a `<div class="hero">` to wrap your title `<h1>` tag. Make sure to include the closing `</div>`.

```css
.hero {
  padding-top: 20vh;
  padding-bottom: 20vh;
  text-align: center;
  background-color: gray; /* Or your choice color */
}
```

The white border on the edge of the page can be gotten rid of with:

```css
html, body {
  padding: 0;
  margin: 0;
}
```

What if we added an image to be the background of our page? You can look in [Unsplash](http://unsplash.com){:target="_blank"} for good stock photos or use the example provided

```css
.hero {
  /* background-image: url("path/to/your/image"); */
  background-image: url("http://designatucsd.org/examples/htmlcss1/bull_background.jpg");
  background-size: cover;
}
.hero h1 {
  color: white /* Or your choice color */
}
```

* `.hero h1`: This property applies to **all h1 descendants of an element with class 'hero'**
* `background-image`: self-explanatory
* `background-size: cover`: Tells the browser to stretch the image to fit window

### Readability

Right now, our text appears to span the entire width of the page, making it difficult to read, so let's update that. Add a class for your `<div>` tag with a relevant name (like 'container') and add some css.

```css
.your-div-class-name {
  margin: auto;
  max-width: 700px;
  color: #555;
}
```

* `margin`: denotes space around (outside) elements; auto denotes to base it off width of element and width of container
* `max-width`: denotes the largest width of an element

Now viewing this in desktop, we can see that the content centers nicely on the page. Let's try a custom font to add more personality. Here at DesignatUCSD, we're big fans of [Lato](https://fonts.google.com/specimen/Lato)

```css
@import url('https://fonts.googleapis.com/css?family=Lato');

/* You can edit your existing body tag */
body {
  font-family: "Lato", "Helvetica", sans-serif;
}
```

We can also update font sizes to improve readability. Try changing the `font-size` property for your `.hero h1` and `p` elements using CSS.

### Cards

<!-- However, currently the colors we've added don't seem to add the best aesthetic, so we'd like to probably like to pick better colors. [Here's](http://colorhunt.co/) a quick resource. Try using classes and ids to change the colors of your text. For text content it's often good to use a gray to reduce contrast. Here's a good one: `#555`.

```css
/* If you're stuck, you can try this: */
.your-div-class-name {
  color: #555; /* Or your choice color */
}
``` -->

### Finishing up
Can you think of more touches you'd like to add to your site? Here's some things you can play around with:

* Fonts and font-sizes
* Colors
* Widths of content
* Your hero background image
* Adding more/editing text content

How about adding a class and making Aesop's punchline "We may often be..." more unique? [Here's](http://designatucsd.org/examples/htmlcss1/){:target="_blank"} an example of what your site might look like at the end of this tutorial. You can view its code [here](https://github.com/designucsd/examples/tree/master/htmlcss1){:target="_blank"}.

## Feedback

If you've completed this tutorial (remotely or on-site), please fill out this form to let us know how we did.

## What's next?
Now that we've covered the basics of HTML and CSS, what's next? To become a frontend developer, you'd need to learn and do a couple more things:

* Familiarize with the [CSS Box Model](http://www.w3schools.com/css/css_boxmodel.asp){:target="_blank"} to understand
* Javascript
* Mobile friendliness
* Frontend frameworks (like Bootstrap) - we'll be having a workshop on this soon!
* Practice, practice, practice!

## Additional resources
Here are some resources for you to continue learning frontend:

* [This Medium post](https://medium.freecodecamp.com/from-zero-to-front-end-hero-part-1-7d4f7f0bff02){:target="_blank"}: A good post on how to get started with frontend development in general.
* [CodeAcademy Tutorial](https://www.codecademy.com/learn/web){:target="_blank"}: A hands-on tutorial teaching you the basics of HTML, CSS, and later on Bootstrap (also recommended by the above post).
* [Check this out](http://jgthms.com/web-design-in-4-minutes/){:target="_blank"} for an interesting, quick brief on effective lightweight HTML/CSS, in which some of this tutorial is based on
* Your favorite search engines and StackOverflow: If you've got an issue at this point, chances are someone else has encountered it before.