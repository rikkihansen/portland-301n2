# Announcements - Sun Jun 5th

### 17th Class - Lecture 12 REST / Lab 12 REST

* Cesar and I switched. He will cover Routes this Tuesday and Thursday.

### Get your reviews in

### Make Up Class

* Sat Jun 18th Class Makeup - no class on Sun Jun 19th (NodePDX)

### Assignments for this Week

* Mon Jun  6th Lab 10 Recap: Portfolio Assignment Due
* Mon Jun  6th Lab 12 REST: Pair Assignment Due
* Fri Jun 10th Lab 11 Routes: Pair Assignment Due
* Fri Jun 10th Lab 12 REST: Portfolio Assignment Due
	
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





  






