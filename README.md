<img src="https://raw.githubusercontent.com/tomit4/dojo_blog/main/assets/react_logo.png">
<h2 align="center">Net Ninja 2021 Intro To React Follow Along</h2>

#### Introduction
This repository contains the finished code for youtuber, [Net Ninja's](https://www.youtube.com/@NetNinja) [2021 Intro to React Series](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d).

#### A Brief Word on Adjustments
In following along with this course, I was unable for some reason to get the npm package [json-server](https://www.npmjs.com/package/json-server) running, so instead I spun up a quick expresss backend to substitute.

#### Installation
Installation is pretty straight forward if you're familiar with git and npm.

Clone this repository:
```
git clone https://github.com/tomit4/dojo_blog
```
And then install dependencies (frontend uses create-react-app, will take a bit of time):
```
cd  dojo_blog/frontend && npm install && cd ../backend && npm install
```
In one terminal, head over to the backend and start the server:
```
cd dojo_blog/backend && npm start
```
And then head over to the frontend and start that server:
```
cd dojo_blog/frontend && npm start
```
Finally open up a browser and enter in the url bar:
```
http://localhost:3000
```

You'll be presented with a simple blog written in ReactJS, with Create, Read, and Delete functionality. For more information, here is [the full tutorial series on youtube](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d).

Should you wish to see the source code step by step, Net Ninja has kindly provided each stage of the development in various branches over at [the tutorial's repository](https://github.com/iamshaunjp/Complete-React-Tutorial).
