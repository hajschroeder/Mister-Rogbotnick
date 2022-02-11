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

Describe: misterRogers();

*Test: It should recognize a specific value and replace it with a different value

*Code: 
misterRogers(5);
*Expected Output: [0,1,2,x,4,5];