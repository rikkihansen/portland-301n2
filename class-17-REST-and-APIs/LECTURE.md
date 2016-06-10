# Announcements - Sun Jun 5th

### 17th Class - Lecture 12 REST / Lab 12 REST

* Cesar and I switched. He will cover Routes this Tuesday and Thursday.

### Get your reviews in

### Make Up Class

* Sat Jun 18th Class Makeup - no class on Sun Jun 19th (NodePDX)

### Assignments for this Week

* Mon Jun  6th Lab 12 REST: Pair Assignment Due
  - As a developer, I want to treat my GitHub repositories as a resource (with full MVC components), so that I can manage them within my blog.
  - You already have an `aboutController.js`,
  - so we need to add a `repo.js` model file,
  - and a `repoView.js` presentation layer.
  - GitHub API credentials should be stored in a local file (`githubToken.js`), but not committed to GitHub. Use `.gitignore` to prevent the file from being tracked (get help in lab if you don't know how to use `.gitignore`).
  - As the site owner, I want to highlight certain repos on my `/about` page so that everyone can see the great projects I am working on.
  - Retrieve and manipulate repo info in your model file.
  - You can choose exactly what API end point to use.
  - Craft an API query to return repos that you want to highlight.
  - Create a template in your view file to display these repos. You can build your template with either plan jQuery (string concatenation), or with Handlebars.

* Fri Jun 10th Lab 11 Routes: Pair Assignment Due

	* As a developer, I want an articleController, so that I can group together actions related to the article resource.
		- Move the functionality from the last script tag in index.html into the articlesController.js file.
		- When the `/` route is requested, only the #articles section should be visible to the user.
	*  As a developer, I want a routing file, so that I have a central place to define what URLs my app can handle.
		- Look for the TODO items in `routes.js`. Use the `page.js` features to tell your app how to handle the `/` route and the `/about` route.
		- As an reader, I want to view the article index, so that I can read all the articles.
		- Ensure that visiting the `/` route triggers the behavior of loading all the articles and initializing the index page view.
	* As a reader, I want to view '/about', so that I can learn more about the brilliant dev who created this site.
		- Fill in the contents of `aboutController.js`, so the `#about` section is revealed when the about index action is triggered.
		- Ensure the function is linked to a route, so visitors to `/about` see your info, and not the blog posts.

* Fri Jun 10th Lab 12 REST: Portfolio Assignment Due
	- In our blog, we used RESTful routes to interact with the Github API.  It's time to take this a step further and integrate this functionality into your portfolio project.
	- To get started, you will need to create a controller that includes a call to the Github API. This call should grab data about your individual account, and render portions of the returned content to the page, **once the data has been loaded**.  This is fairly open ended, so use whatever data you deem fit and be sure to separate your concerns.
	
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

### Other Topics

* Functional Programming
* MVC
* OOP
* ajax

# Learning Objectives

#### RESTful endpoints & External APIs:

2. Understand the history of HTTP, and the central role that REST plays.
3. Use RESTful routes for a web service, to retrieve their own github repos
4. Design RESTful endpoints for their own blogging app

# Lecture

REST is an architectural style for distributed systems.

REST is similiar to the CRUD methods on a Model or SQL table.

* Create - POST
* Read   - GET
* Upate  - PUT
* Delete - DELETE

The URL defines the resource, the HTTP verb the ACTION: 

```
POST /api/users/1234

{
'first_name' : 'John',
'last_name': 'Smith'

}
```

```
PUT /api/users/1234

{
'first_name' : 'Jack',
'last_name': 'Smith'

}
```

```
GET /api/users
```

```
GET /api/users/1234
```

```
DELETE /api/users/1234
```





# Demo


# Pair Programming
```
git add --all
git commit -a -m "Any sandbox work."
git push origin sandbox

git pull origin master
git pull upstream master
git push origin master

git checkout -b class-17
cd class-17-REST-and-APIs
cd pair-programming
unzip starter-code.zip // password is 'restful'
mv starter-code ken-cesar

// before pull requests
git pull origin master
git pull upstream master
```

```
npm install -g express-request-proxy express
node server.js

```


# Questions?





  






