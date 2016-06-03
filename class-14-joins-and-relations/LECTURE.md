# Announcements - Sun May 29th

### Get your reviews in

### Assignments for this Week

* No class Mon May 30th - Memorial Day Holiday
* Sat Jun 18th Class Makeup - no class on Sun Jun 19th (NodePDX)
* Fri Jun 3rd Lab 09: Portfolio Assignment Due
* Fri Jun 3rd Lab 10: Recap Pair Assignment Due 
	
### For those following along
`git checkout -b sandbox`

Remember to add and commit any changes into your sandbox. This will avoid future headaches and merge conflicts.

# Review

# Learning Objectives

1. Understanding benefits of normalization.
2. Ability to normalize a database.
3. How to use foreign keys.
4. How to use subqueries.
5. How to perform an inner join.
6. How to join more than two tables if needed.

# Lecture

# Demo

## SQL Demo

Starting SQL:

```sql
DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(32) DEFAULT NULL,
  teacher_id INT NOT NULL
);

INSERT INTO courses VALUES
(10001, 'Computer Science 142', 1234),
(10002, 'Computer Science 143', 5678),
(10003, 'Computer Science 190M', 9012),
(10004, 'Informatics 100', 1234);

DROP TABLE IF EXISTS grades;
CREATE TABLE grades (
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  grade varchar(2) DEFAULT NULL
);

INSERT INTO grades VALUES
(123, 10001, 'B-'),
(123, 10002, 'C'),
(456, 10001, 'B+'),
(888, 10002, 'A+'),
(888, 10003, 'A+'),
(404, 10004, 'D+'),
(404, 10002, 'B'),
(456, 10002, 'D-');

DROP TABLE IF EXISTS students;
CREATE TABLE students (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(32) DEFAULT NULL,
  email VARCHAR(32) DEFAULT NULL,
  password VARCHAR(16) DEFAULT NULL
);

INSERT INTO students VALUES
(123, 'Bart', 'bart@fox.com', 'bartman'),
(404, 'Ralph', 'ralph@fox.com', 'catfood'),
(456, 'Milhouse', 'milhouse@fox.com', 'fallout'),
(888, 'Lisa', 'lisa@fox.com', 'vegan');

DROP TABLE IF EXISTS teachers;
CREATE TABLE teachers (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(32) DEFAULT NULL
);

INSERT INTO teachers VALUES
(1234, 'Krabappel'),
(5678, 'Hoover'),
(9012, 'Stepp');
```

Getting our values:

```sql
-- SELECT students and grades, no explicit join
SELECT * 
 FROM students, grades 
WHERE students.id = grades.student_id

-- SELECT students and grades, join
SELECT * 
  FROM students
  JOIN grades ON grades.student_id = students.id

-- SELECT students and grades, inner join
SELECT * 
  FROM students
 INNER JOIN grades ON grades.student_id = students.id

-- SELECT students and grades, inner join using alias
SELECT * 
  FROM students AS s
 INNER JOIN grades AS g ON g.student_id = s.id

-- SELECT specifc columns from students and grades, inner join using alias
SELECT s.id
     , s.name
     , s.email
     , g.course_id
     , g.grade
  FROM students AS s
 INNER JOIN grades AS g ON g.student_id = s.id

-- select from students, grades and courses
SELECT s.id
     , s.name
     , s.email
     , g.course_id
     , g.grade
  FROM students AS s
 INNER JOIN grades AS g ON g.student_id = s.id
 INNER JOIN courses AS c ON c.id = g.course_id

-- select from students, grades and courses, labelling all columns explicitly
SELECT s.id AS student_id
     , s.name AS student_name
     , s.email AS student_email
     , g.course_id AS course_id
     , g.grade AS course_grade
     , c.name AS course_name
  FROM students AS s
 INNER JOIN grades AS g ON g.student_id = s.id
 INNER JOIN courses AS c ON c.id = g.course_id


-- select from students, grades, courses and teachers, labelling all columns explicitly
SELECT s.id AS student_id
     , s.name AS student_name
     , s.email AS student_email
     , g.course_id AS course_id
     , g.grade AS course_grade
     , c.name AS course_name
     , t.name AS teacher_name
  FROM students AS s
 INNER JOIN grades AS g ON g.student_id = s.id
 INNER JOIN courses AS c ON c.id = g.course_id
 INNER JOIN teachers AS t on t.id = c.teacher_id


INSERT INTO students VALUES (999, 'Nelson', 'nelson@fox.com', 'newton');

SELECT s.id AS student_id
     , s.name AS student_name
     , s.email AS student_email
     , g.course_id AS course_id
     , g.grade AS course_grade
     , c.name AS course_name
     , t.name AS teacher_name
  FROM students AS s
  LEFT OUTER JOIN grades AS g ON g.student_id = s.id
  LEFT OUTER JOIN courses AS c ON c.id = g.course_id
  LEFT OUTER JOIN teachers AS t on t.id = c.teacher_id

```

## Call Stack Demo

Concepts: Call stack, breakpoints, debugging and black boxing. 

```
cd /Work/github.com/kbrumer/portland-301n2/class-13-lab-crud-a-resource/demo-completed
```


# Pair Programming
```
git add --all
git commit -a -m "Any sandbox work."
git push origin sandbox

git pull origin master
git pull upstream master
git push origin master

git checkout -b class-13
cd class-13-lab-crud-a-resource
cd pair-programming
unzip starter-code.zip // password is 'crud'
mv starter-code ken-cesar

// before pull requests
git pull origin master
git pull upstream master
```



# Questions?





  






