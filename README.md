# Developer Log
I will spend 1000 days to code
I am a rare soul who spent 10 years in non-tech industry and got a SWE position at a Big Tech company. My goal is to share all the lessons learnt through my journey.

## Dev logs

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

==================================================


 
   


  




 



  


