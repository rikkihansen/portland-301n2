# Announcements - Thu May 26th

### Get your reviews in

### Assignments for this Week
* Wed May 25th: Read: SQL Joins & Relations Links
* Fri May 27th: Pair Assignment 8 : CRUD Due
* Fri May 27th: Portfolio Assignment 7 : Functional Due
* Note: There is no assignment for Portfolio 8: CRUD

### For those following along
`git checkout -b sandbox`

Remember to add and commit any changes into your sandbox. This will avoid future headaches and merge conflicts.

# Review

# Learning Objectives

1. Understanding the concept of a relational database.
2. How to create and drop tables.
3. How to insert records.
4. How to select records.
5. How to update records.
6. How to delete records.
7. Exposure to formation of more advanced SQL queries.
8. Knowledge of how to interact with WebSQL in the browser.
9. Ability to interact with Web SQL using JavaScript.

# Lecture

## LIMIT and OFFSET

[source](https://en.wikipedia.org/wiki/Select_(SQL))

The SQL SELECT LIMIT statement is used to retrieve records from one or more tables in a database and limit the number of records returned based on a limit value.

Example:

```
SELECT * FROM people LIMIT 10
```

The SQL SELECT OFFSET statement is used to skip that many rows before beginning to return rows.

Example:

```
SELECT * FROM people OFFSET 200
```

When used togther, they are very effective at paginating data:

```
SELECT * FROM people LIMIT 10 OFFSET 200
```

## querystring

[source](https://en.wikipedia.org/wiki/Query_string)

On the World Wide Web, a query string is the part of a uniform resource locator (URL) containing data that does not fit conveniently into a hierarchical path structure.

What does that mean? It means everything after the question mark.

Example:

```
http://example.com/over/there?name=ferret
```

The query string is `name=ferret`.  Query strings will be in the format:

```
key1=value1&key2=value2&key3=value3  // etc
```

Note: There is some *encoding* that takes place in the query string:
1. Spaces are converted to plus signs (+) or (%20)
2. Other special characters are *URI encoded*, which means to take the ASCII value of the character and append the percent sign. 

Example:

```
bar$ => bar%24
^barney => %5Ebarney

foo=bar$&fred=^barney // gets encoded to
foo=bar%24&fred=%5Ebarney
```

Why is that? What if you wanted to represent an equals sign `=` or question mark `?` or ampersand `&` ? In general, there are certain reserved characters allowed in a URL and we don't want to mix these up with our values.

# Demo

## JSON Validator

[source](https://jsonformatter.curiousconcept.com/)


# Pair Programming
```
git add --all
git commit -a -m "Any sandbox work."
git push origin sandbox

git checkout -b class-13
cd class-13-lab-crud-a-resource
cd pair-programming
unzip starter-code.zip // password is 'crud'
mv starter-code ken-cesar
```



# Questions?





  






