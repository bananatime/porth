
PROJECT TITLE: porth

AUTHOR: Krish Krishnamurti

PURPOSE OF PROJECT: To create an API Gateway stub generator / test harness for fullstack prototyping.

FEATURES:repo using nodejs, expressjs and JAX-RS annotation

1. basic GET API request response as a separate express module: done

2. basic middleware to handle 404 e.g. invalid request, and 500 errors: done

3. JAX-RS annotated stub generator for GET API request response with JSON datatype: underway

	- server side stub generator: tbd
	
	- client side stub generator: tbd

	- auth: tbd

	- API request monitoring: underway
		- to console: done
		- to mongodb: tbd

	- optimized for different clients: tbd

4. aggregate and fan API requests for microservices: tbd

5. hardening and tidy up

USER INSTRUCTIONS:

====

Features 1 and 2:
To install and run porth (this API Gateway).

Install porth:
1. First check to see if nodejs and npm (node package manager) are already installed in your environment:
	Use commands:	$ node -v
			$ npm -v
2. Install nodejs and npm if not already installed in your local environment.
3. Create an application folder in your local environment e.g. test.
4. Install all porth js and html files into created folder (i.e. test) from github.
5. $ npm init //Use defalut values when prompted, make sure entry point is porth.js
6. $ npm install express --save //to add dependancy

Run porth:
1. $ node porth.js
2. To run test client enter "http://localhost:3000" in your browser. This will call an API URL/testroute request.
3. To stop porth use Ctrl+c

To deploy porthjs on cloud change "porth.listen(3000);" in porth.js file to "porth.listen(3000, <host name>);"

====

