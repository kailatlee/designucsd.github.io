# Design.UCSD website

## How to set up:
First, clone this repo and `cd` into the directory.

```
$ gem install jekyll
$ bundle install
$ bundle exec jekyll serve
```
Now view the site at `http://localhost:4000`.

*Note*: If you're running OSX El Capitan (like me), you may have to install the latest version of XCode by running `$ xcode-select --install` or from the Mac App Store.

## How to create new posts:
First, make sure you're in the latest master branch (you can run `git checkout master` to switch to that branch and `git pull origin master` to pull the latest version from Github). Look in _posts. The best approach is probaby to copy paste one of the existing ones. Use the format `YEAR-MONTH-DAY-title.md` for the post title. Here are some examples: 
```
2011-12-31-new-years-eve-is-awesome.md
2012-09-12-how-to-write-a-blog.md
```
Change the content as specified, adding images as needed (in `images/events`). Next, you need to use jekyll to build the actual site and include the new post. Navigate to the root directory of this application (where you can see the folders _layouts, _posts, etc.) and run
```
$ bundle exec jekyll serve
```
Head over to `http://localhost:4000` to see the live version of your site. Make sure to check for any issues while jekyll is building and to verify that your new content has been added.

Then use git to deploy it to live (branch `master`). Here are the list of the commands for reference:
```
$ git add .
$ git commit -m "YOUR_COMMIT_MESSAGE"
$ git push origin master
```

## License
All directories other than `_posts` and `images` are MIT Licensed and are free for you to use, with or without mentioning us (though please do :).

## Contributions
Danielle Tobey: PM

Michael Hohl: Designer

Elmer Barrera: Designer

Ed Ngai: Developer [Github](http://github.com/engai)

Vincent Liaw: Developer [Github](http://github.com/liawesomesaucer)

## Issues
If you happen to find any issues, feel free to list them or contact us at designatucsd@gmail.com.