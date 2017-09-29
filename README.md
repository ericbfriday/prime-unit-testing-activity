Node.js Unit Testing Activity (Peer)
===

Whoa! You can write code to run your code and prove it works the way you want? Yep, it is pretty cool. 

This assignment will give you some code. It will ask you to write the tests for that code.

Tech: Node, Mocha, Chai
---

Base Mode:
===

1. There are two modules `capitalize.js` and `evenOdd.js`. The solutions might be foreign. Take a look at them and see if you can explain what they are doing.
2. There are some tests written already. See if they are passing. If not, make them pass.
3. Using `mocha` and `chai` node packages, write unit tests for both these modules. Make sure to test all the possible cases. Try to break the code. If you write a test that breaks the code, feel free to update the code to make the test pass.
4. Write a API to use these modules.

	```
	GET to /oddEven/:num
	```
	
	```
	POST to /capitalize
	
	with a body like {sentence: "capitalize this sentence!"}
	```
5. Write the server tests for these routes / the API. Using the `request` node package.

---

_Remember to use best practices:_
---

- add, commit, and push working code at regular intervals
- update the project's readme.md





