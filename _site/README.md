# Design.UCSD website

## How to set up:
First, clone this repo and `cd` into the directory.

```
$ gem install jekyll
$ bundle install
$ bundle exec jekyll serve
```
Now view the site at http://localhost:4000

## How to create new posts:
First, make sure you're in the latest gh-pages branch (you can run `git checkout gh-pages` to switch to that branch and `git pull origin gh-pages` to pull the latest version from Github). Look in _posts. The best approach is probaby to copy paste one of the existing ones. Use the format `YEAR-MONTH-DAY-title.md` for the post title. Here are some examples: 
```
2011-12-31-new-years-eve-is-awesome.md
2012-09-12-how-to-write-a-blog.md
```
Change the content as specified, adding images as needed (in `images/events`). Next, you need to use jekyll to build the actual site and include the new post. Navigate to the root directory of this application (where you can see the folders _layouts, _posts, etc.) and run
```
$ jekyll build
```
Then use git to deploy it to live (branch `gh-pages`). Here are the list of the commands for reference:
```
$ git add .
$ git commit -m "YOUR_COMMIT_MESSAGE"
$ git push origin gh-pages
```
