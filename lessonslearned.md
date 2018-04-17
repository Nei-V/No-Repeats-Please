These are some of the lessons learned in this project:

1. Recurssion - a much better understanding of it and especially of the importance of the base case
(the condition that prevents the recurssion to run forever).

An excelent explanation:

https://www.thecodingdelight.com/understanding-recursion-javascript/

2. Using the Google Chrome stack trace

https://personalzone-hulgokm2zfcmm9u.netdna-ssl.com/wp-content/uploads/2017/04/recursion-chrome-developer-tools-debug.jpg

3. Combinations and Permutation

4. The   Heap's algorithm

5. The regex usage of groups 

6. Using parameters in regex (I didn't use it in the end in this challenge) - the commented out function checkRegexInResult()

7. Doing a .test or exec() on a string with regex moves the itterator forward even when done in consolo.log, so you can't use both in console.log and in the code. if you use it in the console.log, you have to remove the console.log before using the .test in the code.

8. Using  conditional (ternary) operator instead of IF ELSE, for example in this function if int is even, use 0, if not use i as the first argument of the function:

swap(int % 2 ? 0 : i, int - 1);