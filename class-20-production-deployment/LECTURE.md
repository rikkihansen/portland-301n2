# Announcements - Sun Jun 12th / Week 6

### 20th Class - Lecture 13 Deployment / Lab 13 Deployment

### Get your reviews in

### Make Up Class

* Sat Jun 18th Class Makeup - no class on Sun Jun 19th (NodePDX)

### Assignments for this Week

* Sun Jun 12th: Read Heroku: Getting Started with Node 

* Sun Jun 12th: Read Page.js Readme

* Mon Jun 13th: Pair Programming 13 Deployment Due
	* As a site owner, I want my site running on a robust hosting platform, so that I don't have to hire a sysadmin.
		- Create a new Heroku app for deployment.
	* As a developer, I want my app to run in a development environment that matches production, so that I can reduce bugs related to infrastructure surprises.
		- Start your app with node server.js
		- TODO: Refactor your AJAX request to proxy your GitHub API calls through the server
	* As a developer, I want my secret tokens accessed only through environment variables, so that I can keep them secure.
		- Set the proper env vars on your local system.


* Mon Jun 13th: Portfolio 11 Routes Due

	* We converted the blog into a SPA by using the page.js library to capture clicks and execute a function to modify the page, rather than reloading content from a server.

	* Give your portfolio the same treatment. Update your main nav so that each clickable item is a link to a different url, that is handled by a function as indicated by page.js.

	* Keep your code organized in a M-V-C structure that isolates data management from presentation layer, from the controller that holds it all together.

* Wed Jun 15th: Pair Programming 14 State Due

	* Work with a pair to comment on the execution path for sections labeled with "COMMENT:". These items are essentially TODO items that have been done for you and demonstrate the concepts presented during lecture this morning. While you will not be building out any additional functionality for this assignment, you will need to describe what each newly refactored method does and where it points back to. The navigator for this assignment should be tracing the execution path and determining what each new method/update is doing while the driver will need to summarize the navigator's thoughts into a 1-2 sentence comment (below each "COMMENT:" item). Be sure to switch roles after 4-5 COMMENT items have been completed.

* Thu Jun 16th: Project Week - Report #1 [source](https://github.com/codefellows/portland-301n2/tree/master/class-23-project-week-day-1)

	* Your team must submit a proposal to an instructor with the following information:

		- Your team's name
		- Your team's members
		- Your project's pitch. (What is the problem statement and what are the benefits of your solution? Read more about these [here](https://www.bidsketch.com/proposal-resources/proposal-templates/web-design-proposal-template).)
		- A diagram of relevant details from your project's domain model
A few wireframe sketches of your project's pages
		- **TIP**: Use pencil and paper to diagram and sketch.

	* Proposals, written or electronic, as per the project description, are due for review with the instruction team. First come, first served!

* Fri Jun 17th: Portfolio 13 Deploy Due

	* As a developer, I want my portfolio to run in a development environment that closely matches production, so that I can reduce bugs related to infrastructure surprises.
		- You'll need to create a new Heroku app, and link it to your portfolio
	* As a site owner, I want my site running on a robust hosting platform, so that I don't have to hire a sysadmin.
		- You'll need to get your app deployed and running on Heroku.
		- Heroku will need to know what kind of app you are running, and how to run it.
		- You can create a new package.json file, or copy over package.json and server.js from the blog project.
	* As a developer, I want my secret tokens accessed only through environment variables, so that I can keep them secure.
		- You'll need to configure an environment variable on your production server, so the server.js file can access your token when it's running.

	
### For those following along
`git checkout -b sandbox`

Remember to add and commit any changes into your sandbox. This will avoid future headaches and merge conflicts.

# Review

### Git Hints

Before checking in or creating a new branch, you should perform the following:

```
git pull origin master
git pull upstream master
git push origin master
```

This will sync your master with the class's master repo and help avoid conflicts.

### Anything else?

# Learning Objectives

Deployment:

* Be able to push a dev site to production, so the world can see it. 
* Understand the difference between a static page and a dynamically generated app page



# Lecture

* Dev vs Production environment
* What we look for in production env
* What to do with the GitHub token?
* How to deploy to Heroku (step by step)

Deployment-workshop directory: 

* Walk through an application deployment



# Demo

Walk thru this [tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction):

### Add a new application

1. Create Heroku Login
2. Download and install toolbelt
3. Login in via command line `heroku login`
4. Clone `git clone https://github.com/heroku/node-js-getting-started.git`
5. `cd node-js-getting-started`
6. Create the hroku app `heroku create kbrumer-cf-001`. Note both the URL and the git repo:
	* `https://kbrumer-cf-001.herokuapp.com/`
	* `https://git.heroku.com/kbrumer-cf-001.git`
7. Deploy `git push heroku master`
8. Check dynamos `heroku ps:scale web=1`
9. Tail the logs `heroku logs --tail`. `Ctrl+C` to stop.
10. Check your `Procfile`. [source](https://devcenter.heroku.com/articles/procfile)
11. Scale the app `heroku ps`
12. Undertand the role of `package.json`. This is not only just for Heroku, but for all `node` apps.
13. Run it locally `heroku local web`. This may need an `npm install`
14. Push local changes 
15. Set a config variable `heroku config:set TIMES=2`


### Add an existing application
1. `cd /Work/github.com/kbrumer` 
2. `mkdir heroku-demo`
3. `cd heroku-demo`
4. `git init`
5. `git add .`
6. `git commit -a "First Commit."`
7. Create a new repo in GitHub `https://github.com/kbrumer/heroku-demo-completed`
8. `git remote add origin git@github.com:kbrumer/heroku-demo-completed.git`
9. `git push -u origin master`
10. `heroku create kbrumer-cf-003`. Note the url and git repo
	* `https://kbrumer-cf-003.herokuapp.com/`
	* `https://git.heroku.com/kbrumer-cf-003.git`
11. `git remote -v`
12. `git push heroku master`
13. `heroku open`
14. `Procfile` anyone? 




# Pair Programming
```
git checkout -b class-20
cd class-20-production-deployment
cd pair-programming
unzip starter-code.zip // password is 'proxy'
mv starter-code ken-cesar

// before pull requests
git pull origin master
git pull upstream master
```


# Questions?





  






