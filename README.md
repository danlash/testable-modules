V1 Testable Modules
===

template.js contains a template that you can use to create a module that can be tested in mocha and can be loaded with V1.Uses.

Essentially you will be creating an immediatley called closure that gives you the only two things you should need: a place to put your public methods, and a function to load dependencies.

In the mocha testing environment, it uses module.exports as a container for your public methods and a wrapped node.require method to load dependencies.

In a browser environment, it uses V1.YourModuleName as a container for public methods and V1.Uses to load dependencies.


Does it work?
---

run 'mocha' in the root to run the tests

open 'example.html' to see it working in a browser