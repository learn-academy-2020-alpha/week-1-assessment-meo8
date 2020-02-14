# ASSESSMENT 1: INTRO TO JAVASCRIPT
## Tech Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.   

1. What is a function? Why would you use one?

  Your answer: 
  A function is a set of reuseable code that will execute when called upon. It may contain parameter(s) with optional default values. 
  It may also return a value based on the arguments passed in. You would use a function when you want to do the same thing to multiple inputs. 
  That will help keep your code DRY. 

  Researched answer: 
  A function is a set of statements/code that performs a task or calculates a value. To use it, you must define and call it from the scope you wish to use it.  
  There are multiple ways to define a function: function declarations, function expressions, function variables, arrow functions, and anonymous functions. 
  Only code between the curly brackets will execute when a function is called. Once the function reaches the return keyword, the function stops executing. 
  Functions can be defined once and resused many times. The same set of code
  can be executed over and over with different arguments and can produce different results.


2. What is the difference between map and filter?

  Your answer: 
  The map method executes the statements on every element within an array while the filter method pushes each element to a new array if the condition set within it equates to true.

  Researched answer:
  The map method creates a new array with the result of all elements pushed into it based on the executed code.
  The map method allows the elements in the array to be manipulated according to the user's preference. 
  The returned results will be in a new array with the original array's values unchanged.
  
  The filter method creates a new array with all of the array elements that passes a condition by the provided set of statements. 
  The filter method is good for instances where the user is looking for similarities in characteristics between the elements.


3. What is the difference between console.log() and return?

  Your answer:
  console.log() is solely for developers to test, debug, or look at code. 
  It should not be used in production code.
  The return value of console.log is undefined.
  
  The return keyword is used to stop the execution of a function. 
  The returned values can be stored within a variable.

  Researched answer:
  console.log() is a function that logs the arguments passed within the parenthesis into the web's console.
  It may be a single string or any one or more of JavaScripts objects.
  
  
  The return keyword ends function execution.
  If specified, the given value is returned from the function to the function caller.
  If the value is omitted, undefined is returned instead.
  It is affected by the automatic semicolon insertion so there should not be a line break after the return keyword.
  The console will warn "unreachable code after return statement".
  
  They both allow the user to see the expected result of a variable, function, object, etc.



4. In regards to functions, what is an argument?

  Your answer:
  A function contains parameters, which are placeholders for when arguments gets passed into the function.
  Once the argument is passed into the function, it replaces the matching parameter name and the function will
  execute along with the arguments according to the set of codes.

  Researched answer:
  An argument refers to the values placed within the parenthesis of a function CALL. 
  If the amount of arguments do not match the amount of specified parameters, a few things happen.
  1) If there is too many arguments to parameters; the extra arguments are ignored.
  2) If there are less number of arguments to parameters; the missing arguments would return as undefined.
  3) No errors/exception will appear.
  
  To combat the above problem, you can set a default values with parameters.
    ex.) function multiply(a, b = 1, c = 1) { return a * b * c;}
  Note that it's invalid to pass arguments as the above example.
    e.g.,) multiply(5, b = 3, c = 2);
  
  Another way to combat the problem is to use the argument object. It's similar to the this keyword.
  It's a local variable that's accessible within all functions. It's an array-like object which stores all
  arguments as an element when it's passed into a function call and can be used like an array.
  ex). function argVar(param1, param2, param3){
        console.log(arguments.length); // Logs the number of arguments passed.
        console.log(arguments[3]); // Logs the 4th argument. Follows array indexing notations. 
      }


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:
  Pair programming contains a driver and a navigator that shares one screen, preferably one mouse and one keyboard.
  The driver will use the keyboard/mouse to move around and code.
  The navigator provides instructions and directs the driver on what to do/code.

  Researched answer:
  Pair programming's important characteristics is to have open communication where the pair can exchange
  information, clarity, response, determination, and consideration. The pair can help keep each other on task,
  have a more refined brainstorming session, accountability, and when someone is stuck, the other can help step in,
  which also lowers stress and frustation.
  
  Both the driver and the navigator should be in contact with each other and share workload. 
  The driver will work on the draft code whether it will pass or fail, while the navigator looks over the code
  to review and revise it.
  


6. What is TDD? Describe the work flow associated with TDD.

  Your answer:
  TDD stands for test driven development. It's where you break down the problem first and try to put it 
  together through jest and have it pass. Write out what the value is and what the expected value should be.
  Once that passes, write out the actual code/function.

  Researched answer:
  The primary goal of TDD is to have clearer functionality of the code, keep it small and simple and bug-free.
  The concept of TDD is to write and correct failed tests before writing new code. It helps avoid duplicate code.
  If the test fails, write mimimal code to try and pass. If it passes, try refactoring the code and test again.
  
  When writing code before testing, it can be harder to find out where the error happened so it's better to 
  write it out in small chunks and testing each one.
  


7. What is something we did in class this week you found helpful?  

  Your answer:
  Writing out pseudo code is very helpful. Forces me to think about what steps I need to take and helps
  me find a place to get started on the problem.


## Looking Ahead: Terms for Next Week

Define the following terms to the best of your ability.

- React
It is a JavaScript library created by Facebook for building UI components. It can be used as a base to build
a single webpage or a mobile app. It helps break up sections of the website into smaller, more manageable 
modules that can be assessed and rendered differently depending on the interaction of the client (user). 
The client can interact with the website without having to manually reload the page.

- Yarn
Engineers share pieces of code to help others avoid rewriting basic components, libraries, etc. and 
some code may depend on other codes to work. So these dependencies are managed by package managers, 
which is what Yarn is. 

- React State
It represents parts of the UI that can change. Each UI component maintains its own state. 
Within the component, there is a state object that stores all of that component's properties that can be 
changed based on the user's interaction or new data sent from the server, etc.
When the state changes, the website re-renders.


- CRUD
Create, read, update, delete
Any application should have the basic functions above to be considered complete.
ex.) A book library application:
It should have a create function to create information such as title, author, etc.
A read function to see the books within that library.
An update function to change/update the information of the book.
A delete function to remove the book from the library.

- this
There are differences between how the this keyword works when when in strict mode versus non-strict mode.
When 'this' is not binded to property/properties within the function, it refers to the global object.
When using 'this' in strict-mode and it's not binded within the function, it is undefined. 
This cannot be binded during execution, it must be done when the function is being declared and written out.

The arrow function does not use the 'this' keyword. It knows the value within it's scope.