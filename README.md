# Meet App
Meet is an app built in React following Test-Driven Development principles and best practices. 
- Frontend: Written with JavaScript/React; hosted on GitHub Pages - https://jasonduro.github.io/meet/
- Backend (Server Logic): Written with Node/Express as Lambda functions (FaaS); hosted on AWS (requests come from frontend to Lambda function to data).
- Backend (Database): Google Calendar API.

## Objective
Built a serverless, progressive web application PWA with React using a TDD test driven development approach. The app uses Google Calendar API to fetch upcoming events. 

## User Stories
* As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
* As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
* As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
* Asauser,IwouldliketobeabletousetheappwhenofflinesothatIcanseetheeventsI viewed the last time I was online.
* As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
* As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

![Screen Shot 2023-07-10 at 10 57 58](https://github.com/jasonduro/meet/assets/38364361/a0b3e661-691a-448e-a29e-322a7999d6d7)

## What I've Learned
* TDD & Test Scenarios - wrote user storeis based on app's key features and then translated user stories into test scenarios.
* Serverless Functions and Authentication - Created a React App with a protected API, OAuth client for authorization and authentication, and obtaining AWS Credentials.
* Writing & Testing AWS Lambda Functions - wrote lambda functions to implement serverless technology in the app, tested lambda functions, and created a serverless deployment package.
* Unit Testing - using test scenarios, wrote frontend unit tests using mock data of my app's key features.
* Integration Testing - wrote integration tests to test the interaction between the app's React components and tested the data received from the mock API.
* User Acceptance Testing & End-to-End Testing - wrote UAT for key features.
* Continuous Delivery
* Object Oriented Programming
* Progressive Web Applications
* Data Visualization

Benefits of using serverless functions in Meet App: 
* Using serverless functions in my Meet App can provide cost efficiency, scalability, reduced development time, and improved security. Serverless functions can be used to handle the OAuth authentication and event search functionality, providing a highly scalable and cost-effective app that can handle a large number of users and requests.
![Diagram](https://user-images.githubusercontent.com/38364361/229466011-018aedb4-b6db-44cb-80de-68268d851de5.png)

User Stories and Gherkin Scenarios: 
[4.1 TDD - User Stories & Gherkin.pdf](https://github.com/jasonduro/meet/files/11132331/4.1.TDD.-.User.Stories.Gherkin.pdf)
<br>
Project Brief: 
[A4-Project-Brief-Jan2023.pdf](https://github.com/jasonduro/meet/files/11132337/A4-Project-Brief-Jan2023.pdf)
