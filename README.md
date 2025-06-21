# Developer Log
I will spend 1000 days to code
I am a rare soul who spent 10 years in non-tech industry and got a SWE position at a Big Tech company. My goal is to share all the lessons learnt through my journey.
Celeration day: 
- Completed coding shitty projects and learnt about X, Y, Z
- The top 5 voices are: Indie Hackers, Y, and Z 

## Dev logs
- 3/11/2025: Mindset
- 3/19/2025: Conceptual
- Apr: Learn about Vercel, first application done on AI (Stevenc)
- May: 
  - Tools: Postman https://www.youtube.com/watch?v=VywxIQ2ZXw4 >> learn how to test APIs
  - Tool: Python Tutor: visual AI python editor
  - 5/30 Uninspiring: spent a lot of days watching how to be a SWE... => learnt the importance of practice
  - 5/30 Mindset: shift from needing to learn to code to needing to learn to understand how things work
  - 5/31 Project based practice in github: https://github.com/practical-tutorials/project-based-learning?tab=readme-ov-file#python
- June:
  - 6/1 django web application from github project
**  - https://github.com/practical-tutorials/project-based-learning?tab=readme-ov-file#additional-resources
****  -   ### Github Djangogirls project
  - 6/4 Ali Abdaal
  - 6/6 Wilson Ip, Omar
  - 6/7 deployed my first website
  - "Comments explain code to other programmers" => "Code explains the comments to the computer"
  - 6/7 How to think like a programmer @ Andy Harris https://www.youtube.com/watch?v=azcrPFhaY9k
  - >> Programming is not writing code 
    >> Don't think it's simple
    >> We think we did something wrong, but but maybe we did the wrong thing.
    >> It's an implementation problem -> It's an algo problem
    >> AL can help you code, it cannot help you with algo
    >> Start with Understanding. Switch off computer.
  - 6/13 Lesson 1 - created a HTML, CSS, JS 
  - 6/20 Lesson 2 - a weather app
  - >> 

Read: 
- How to be a good programmer https://www.youtube.com/watch?v=v6hm27o_gLM
- https://www.youtube.com/watch?v=BR5n2cWmpo8
- 
July
- Postman https://github.com/vdespa/introduction-to-postman-course/blob/main/simple-books-api.md
- API testing course https://www.youtube.com/watch?v=VywxIQ2ZXw4
- MAPI (to do)
- https://www.postman.com/meta/facebook-marketing-api/collection/9jo4f5y/mapi-onboarding
- https://www.postman.com/meta/facebook-marketing-api/request/u38qbri/get-insight-details-from-an-adaccount-l4
- https://www.postman.com/meta/facebook-marketing-api/collection/9jo4f5y/mapi-onboarding
- Meta MAPI https://docs.google.com/spreadsheets/d/10cWQATlo5BPaCW37R6TR8mTPn4_7FMaEMimbP9yMnzY/edit?gid=333415637#gid=333415637

  
### tools:
Python/JS visualize code:
https://pythontutor.com/render.html#mode=display

Cool projects:
Project based learning:
https://github.com/practical-tutorials/project-based-learning?tab=readme-ov-file#additional-resources

Checking your progress map in Computer Science: file:///Users/jewelho/Desktop/The_Simple_CS_Degree_Map.pdf


### 2025-03-11
CONCEPTUAL:
- Read video about github https://www.youtube.com/watch?v=277gRTVtw2I

MINDSET:
- 3-4 hours, 5-6 days
- 3 months learning
- 3 months project
- Find a support community
- Find something you like to do
- Learnings and explaining the journey

### 2025-03-19
CONCEPTUAL: BIG PICTURE
Frontend / Backend / Cloud
Database
- How to connect to database?
- ORM object relationsihp mapping to use programming language to connect to database
Security & Authentification
CI/CD - continuous integration / continuous deployment
Cloud & Serverless
- i.e. can we make website without a server?

Goal: survial mode. 
How to learn the least to get things done?
- Front end: users interaction i.e. clientside. Language: Basic: HTML, CSS, JS. Cool: React.JS, Tailwind CSS
- Back end: behind the scene i.e. server (could be server, cloud). Tool: JS (language) + Express.JS (framework), Python (language) + Django (framework), Ruby (language) + Ruby on Rails
- Connecting the front and the back via network requests communicate via APIs

How?
- Annotate the codebase
- Tutorial adaopted into your own project
- Stick one thing at the same time

RESOURCES: 
- Mind map overview on roadmap: 
https://coggle.it/diagram/ZtMDf8rvLIwlbc-0/t/backend-engineering/44ac2c05e0c7fcdd9920723c49ec128e5a65bcc430a145638eb01f5c64a884a1
- Ultimate backend explained:
- https://www.youtube.com/watch?v=FdHJPlpL1hI
- - note on things that you dont need to care right now:
  - Caching, Microsevers, Queues, Background processing, Version control, Performance Optimization, Documentation, Versioning 


MINDSET: 
- Don't even need to think about a project to do. Just thing of anytihng and start because you can just plug and play very quickly once you learn the tricks.

CONCEPTUAL: FRONT END - React.JS: how to compartmentalise things
Ref: https://www.youtube.com/watch?v=bfcoBGgDSIc

Components:
- Parent: application
- Children: header, main, footer
- Nested child: further details
- Additioal details:
-  1) INPUT: Export function: write JS function then we use this to output HTML and CSS
    1.1) Dashboard.jsx contains functional components and returns the jsx
    1.2) <Dashboard> </Dashboard> to display return
    1.3) In essence, in React.js, we embeded the JS in HTML so you can write the function inside e.g. <div> {2*4}</div>
-  2) OUTPUT: Returns JSX
 
### 2025-03-20
-  3) TREATMENT OF VARIABLE:
    3.1) You can have variables in JS, but if you have user input and this variable changes, then you need "state" to manage the change for it to be reflected, solution: useState, a stateful variable and have a function "setName" to update the variable
    3.2) FORMAT:
      3.2.1) const[name, setName] = useState(default)
      3.2.2) IMPORT USESTATE
 - 4) Property:
      4.1) Attribute, property of the tag
           e.g. <Dashboard title ={"Home"}}/>
      4.2) Children prop
           e.g. <Dashboard> <p>Hellow world</p></Dashboard>
  **    4.3) Put together:**
           const[title, children] = props
           return (             << return the jsx
            <div>
              <p>{title}</p>    << title = home
              {children}        << children set as hello world 
            </div>
      )
      
- 5) Hook: manage stateful logic
  5.1) e.g. useState() - to initialize
       e.g. useEffect() - track events
       e.g. useRef() - retain info or ref div
       e.g. can write custom hook to fetch data

PRACTICE: https://github.com/hcimtwb/Learnings/blob/010818bdd090df91202dc54a6e85b88dc113dcb1/React.js.md#reactjs---deploy-3-modern-web-app
==================================================

### 2025-04-12 in Iceland
INSPIRED: 
Acquired podcast: Vercel - AI web app builder.
https://www.acquired.fm/episodes/building-web-apps-with-just-english-and-ai-with-vercel-ceo-guillermo-rauch

### 2025-04-15 in London
**Project Stevenc**
- To build a Web application
- Functions: upload batches of images, then use AI facial recognition to identify and specific people in the photo by a pre-uploaded photo
  
This will required:
- a UI for uploading reference photos and batches of images (e.g. through google drive)
- Store these images
- Server-side component to process the images with facial recognition
- Results page to display the matches

Explaining the overall architecture:
Backend:
- 1) lib/actions.ts:
     >> contains the key functions for data operationn
     >> facial recignitions - right now just using a random matcher 
  2) Components/reference-photo-uploader:
     >> allow client to upload reference photos of people to identify
  3) Components/reference-photo-list
     >> server component that displays all refernece photos
     >> display photo and provides delate functionality
  4) batch uploader
  5) list the results
Frontend
  6) Page component - the actual front end

Final project: https://v0.dev/chat/facial-recognition-app-5Q6pBlqtItt

Future improvements:
- Use a real database instead of in memory. In-memory means data is stored in the system's RAM. Good thing is it is fast to retrive, but it is volatile. It is lost when the system shuts down or restarts. Limited by scalability as it is limited by the system memory.
- Implement actual facial recognition feature algo instead of a random one
- Add user authentication and authorization
- Improve error handling and validation 
  
==
### 2025-05-01
- Postman: you can have initial value (public), and current value (private to me)

### Github Djangogirls project:
https://tutorial.djangogirls.org/en/django_installation/
- Using Commandline to install python
- Install the code editor e.g. VS code, sublime
- Using Django framework to make it easier >> there are lots of options depending on the things you do
1) >> Create virtual environment to  directory: mkdir djangogirls
   >> python -m myvenv
   >> source myvenv/bin/activate
2) VS Code save requirement.txt in django
3) Terminal: install django

Create project
- 1) Create **project**: (myvenv) ~/djangofirls$ diango_admin startproject mysite .
- >> you will get manage.py, mysite..
<img width="288" alt="Screenshot 2025-06-07 at 10 10 18 AM" src="https://github.com/user-attachments/assets/5117e80a-ce30-43ae-89ba-e645f32ff6ec" />
- 2) Change something on **Settings**, undere ALLOWED_HOSTS = ['localhost', '127.0.0.1', '.pythonanywhere.com']
- 3) Set up a database (dbsqlite3 is already installed)
- >> create a **database** python manage.py migrate
  >> Starting **web server** (myvenv) ~/djangogirls$ python manage.py runserver
  >>> http://127.0.0.1:8000

Django Model - create the objects 
Model is a special kind of object saved in the database
1) Creating an **application** inside the project
>> (myvenv) ~/djangogirls$ python manage.py startapp blog
<img width="226" alt="Screenshot 2025-06-07 at 11 01 02 AM" src="https://github.com/user-attachments/assets/22f81694-6e8a-4c23-9521-9e35bec87be5" />
>> Update setting
2) Create a blog post **model** (this is under blog > models.py)
>> this is where you define the models/Model class object
>> (note: before making changes, remember to python manage.py makemigrations blog) this is to commit the changes  
3) Create **tables** formodels in your database
>>  (myvenv) ~/djangogirls$ python manage.py makemigrations blog
>>  (myvenv) ~/djangogirls$ python manage.py migrate blog

== by now, your model is in your database ==

4) Django **admin.py**
- blog/admin.py, add registration and contents
- To make model visible on admin page, register the model with "admin.site.register(Post)"
- (note: need to run "python manage.py runserver")
- http://127.0.0.1:8000/admin/

Deploy the app
- Until now, your website is only available on your computer, we need to deploy it onto the internet
- Website need to be located on a server e.g. PythonAnywhere, Github
- >> Local computer - where you do development and testing
  >> Github - place a copy of your program
  >> PythonAnywhere - where you place your website, you will update it by getting a new copy of your code from Github
  >> <img width="744" alt="Screenshot 2025-06-07 at 11 17 51 AM" src="https://github.com/user-attachments/assets/eb1231bf-74c8-4493-96d7-3a693a0782b3" />
  >> <img width="741" alt="Screenshot 2025-06-07 at 11 18 34 AM" src="https://github.com/user-attachments/assets/548f7888-a6aa-474d-8cc0-e2d57944db6c" />
1) Deploying on Github 
- initialize project on github (only need once per project)
- (make sure you are in djangogirls directory)
  >> $ git init
  >> Initialized empty Git repository in ~/djangogirls/.git/
  >> $ git config --global user.name "Your Name"
  >> $ git config --global user.email you@example.com
- Git will track changes, but some files we can ignore (hence create a .gitignore file, this file could be hidden on mac)
- note db.sqlite3 is a local datbase, using standard web programming practice, we will use seprate database for local testing site anad live website on PythonAnywhere (this could be SQLight like my dev machine, but usually you will use MySQL which can deal wiht a lot more visitors than SQLite), but now that we are ignorning the SQLite database for GitHub Copy, all the posts and superusers you created so far are going to only be available locally and you will have to create new ones on production.
- => hence local database is your playgraound where you can test things, and not be afraid that you will delete your real posts from your blog

2) Check status
>> check status >> $git status
>> actually commit >> $ git add .
>> $ git commit -m "My Django Girls app, first commit"
>> Push the code to GitHub by first creating a new repository on GitHub called "my-first-blog"
>> $ git remote add origin https://github.com/<your-github-username>/my-first-blog.git
>> $ git push -u origin HEAD

3) make it online on PythonAnywhere
- Pulling code from Github and configure it on PythonAnywhere to recognize it and start serving it as a web aplication. There are manual ways, but PythonAnywhere provides a helper tool to do it.
- >> pa_autoconfigure_django.py --python=3.10 https://github.com/hcimtwb/my-first-blog.git >> do all the configurations:
  >>> download the code from Github, Create a virtual environment on PythonAnywhere, update settings, setting database, setting static files, congi PythonAnywhere to server your web app via API. 
  == now note your database on PythonAnywhere is separate from your database on your own computer, so it can have different posts an admin accts.

4) On PythonAnywhere
- Create super user
- It is now live: https://hcimtwb.pythonanywhere.com/

=I MADE IT!!!!!!=
Common workflow in web development:
- make changes locally, push gthose changes to GitHub, pull your changes down to your live Web server










 






  




 



  


