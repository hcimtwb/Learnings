# Developer Log
I will spend 1000 days to code
I am a rare soul who spent 10 years in non-tech industry and got a SWE position at a Big Tech company. My goal is to share all the lessons learnt through my journey.

## Dev logs
- 3/11/2025: Mindset
- 3/19/2025: Conceptual
- Apr: Learn about Vercel, first application done on AI (Stevenc)
- May: 
  - Tools: Postman https://www.youtube.com/watch?v=VywxIQ2ZXw4 >> learn how to test APIs
  - Project based practice: https://github.com/practical-tutorials/project-based-learning?tab=readme-ov-file#python
  - Uninspiring: spent a lot of days watching how to be a SWE... => learnt the importance of practice
  - Mindset: shift from needing to learn to code to needing to learn to understand how things work 

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
- 






  




 



  


