
PROJECT TITLE: porth
-RESTful API Gateway harness repo using nodejs and expressjs.

PURPOSE OF PROJECT: To create an API Gateway with the following features:

-basic GET api request response proxy with middleware to handle 404 and 500 errors: done

-api request response with JSON datatype: underway

-basic auth: tbd

-basic monitoring: tbd

-api optimized for different clients: tbd

-aggregate and fan api requests: tbd


AUTHORS: Krish Krishnamurti

USER INSTRUCTIONS:
To install and run porth (this API Gateway).

Install porth:
1. First check to see if nodejs and npm (node package manager) are already installed in your environment:
	Use commands:	$ node -v
			$ npm -v
2. Install nodejs and npm if not already installed in your local environment.
3. Create an application folder in your local environment e.g. test.
4. Install all porth js and html files into created folder (i.e. test) from github.
5. $ npm init //Use defalut values when prompted, make sure entry point is porth.js
6. $ npm install express --save
7. $ npm install connect --save //optional, needed for older expressjs

Run porth:
1. $ node porth.js
2. To run test client enter "http://localhost:3000" in your browser
3. To stop porth use Ctrl+c

