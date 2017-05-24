# Node.js Unit Testing Activity (Peer)

Whoa! You can write code to run your code and prove it works they way you want? Yep, it is pretty cool. 

This assignment will give you some code. It will ask you to write the tests for that code. 

## Steps
1. There are two modules `capitalize.js` and `evenOdd.js`. Take a look at these files. They should look familiar because they are the problems from your Monday night homework. The solutions might be foreign. Take a look at them and see if you can explain what they are doing.
2. There are some tests written already. See if they are passing. If not, make them pass.
3. Using `mocha` and `chai` node packages, write unit tests for both these modules. Make sure to tests all the possible cases. Try and break the code. If you write a test that breaks the code, feel free to update the code to make the tests pass.
4. Write a API to use these modules.

	```
	GET to /oddEven/:num
	```
	
	```
	POST to /capitalize
	
	with a body like {sentence: "capitalize this sentence!"}
	```
5. Write the server tests for these routes / the API. Using the `request` node package.





