# __Mister Rogbotnick's Neighborhood__
### version 1.0
_Scroll to the bottom of this page to see the "tests"_

### Contributer
* Hans Schroeder

### The Site
* [View the raw documents on GitHub](https://github.com/hajschroeder/Mister-Rogbotnick)
* [Click here to see the page in action on GitHubPages](https://hajschroeder.github.io/Mister-Rogbotnick/)
---

## Technologies Used
* HP Laptop with Windows 10
* GitBash and GitHub
* VS Code

## Resources Used
1. [Mozilla Developer Network documentation](https://developer.mozilla.org/en-US/) 
1. [Learn How To Program](https://learnhowtoprogram.com) The curriculum for Epicodus students.
1. [w3Schools documentation on CSS stylings as well as jQuery](https://w3schools.com) A free web resource for coding and programming.
1. "Eloquent JavaScript 3rd Edition" by Marijn Haverbeke

---

## Description

_This web app is an excersize in looping and arrays. The goal of the app is to provide a field where the user may enter a number. What would be returned back to them is a list of all numbers beginning and zero and ending at their inputted number. Within that list of numbers, the user should expect to see some values changed._
1. _Any value containing a "1" should be returned as "beep". "1", "10", "17", "147" etc._
1. _Any value containing a "2" should be returned as "boop". "2", "12", "25", "261" etc._
1. _Any value containing a "3" should be returned as "won't you be my neighbor". "3", "13", "38", "395" etc._
_Further rules exist for which a heirarchy of returns must be observed. Any value containing a "3" should beat out the return conditions for "1" and "2", and the return conditions for "2" beat those of "1". For instance, "111" would be replaced with "beep", "1112" would be replaced with "boop", and "11123" would be replaced with "won't you be my my neighbor._


## Setup/Installation
* Clone this repository to your desktop
* Navigate to the top level of the directory
* Open index.html in your browser
* _All you need to view this site portfolio is an internet connected device_
* _As a public repository, a GitHub account is not required but it is recommended_

___

## Known Bugs
As of the current stage in development, the author is having difficulty with his user logic. At present, the Business Logic works perfectly fine, and returns the array as assigned and intended. However, User Logic is not printing the return value to the DOM. As such, the author has not included necessary conditionals, such as what to return to the user if they enter a blank field, enter more than one value, enter a word or words instead of a number, etc. 

Furthermore, there is a background image linked in the styles.css that is not appearing.

### __Possible Solutions for Bugs__
As often with these sorts of things, it is highly possible that the UI logic is simply missing a single line of code in order to make it work. It is also fully possible that the author simply does not know how to branch to the DOM while using more than one function (ie, calling his Business function to work with the UI funciton). Going forward, the solution may be found by either revisiting some educational resources on JQuery branching, or abandon JQuery altogether in favor of a "vanilla" javascript approach. 

---

## License 
[MIT](https://choosealicense.com/licenses/mit/)

## Copyright
Hans J Schroeder 2022


---
#Tests

Describe: userInput()

Test: It should recognize an empty string, or one that contains only blank spaces
*Code: 
userInput("   ");
*Expected Output: 0


Test: It should return an array of numbers back to the user based on the number they input
*Code: 
userInput(5);
*Expected Output: [0, 1, 2, 3, 4, 5]


Test: It should recognize a specific value and replace it with a different value
*Code: 
userInput(5);
*Expected Output: [0, 1, 2, x, 4, 5];

Test: It should recognize more seperate specific value types and replace them each with a different specific value
*Code: 
userInput(5);
*Expected Output: [0, z, y, x, 4, 5]