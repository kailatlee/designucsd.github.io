all:
	bundle exec jekyll build;git add .;git commit -m "update content";git push origin master

watch:
	bundle exec jekyll serve
