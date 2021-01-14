Recursion steps in order:

left side: [ 6, 1, 9 ] right side: [ 4, 2, 7 ]
left side: [ 6 ] right side: [ 1, 9 ]
left side: [ 1 ] right side: [ 9 ]
left: [ 1 ] right: [ 9 ]
push lower number onto sorted array
sorted array: [ 1 ]
left: [ 6 ] right: [ 1, 9 ]
push lower number onto sorted array
sorted array: [ 1 ]
left: [ 6 ] right: [ 9 ]
push lower number onto sorted array
sorted array: [ 1, 6 ]
left side: [ 4 ] right side: [ 2, 7 ]
left side: [ 2 ] right side: [ 7 ]
left: [ 2 ] right: [ 7 ]
push lower number onto sorted array
sorted array: [ 2 ]
left: [ 4 ] right: [ 2, 7 ]
push lower number onto sorted array
sorted array: [ 2 ]
left: [ 4 ] right: [ 7 ]
push lower number onto sorted array
sorted array: [ 2, 4 ]
left: [ 1, 6, 9 ] right: [ 2, 4, 7 ]
push lower number onto sorted array
sorted array: [ 1 ]
left: [ 6, 9 ] right: [ 2, 4, 7 ]
push lower number onto sorted array
sorted array: [ 1, 2 ]
left: [ 6, 9 ] right: [ 4, 7 ]
push lower number onto sorted array
sorted array: [ 1, 2, 4 ]
left: [ 6, 9 ] right: [ 7 ]
push lower number onto sorted array
sorted array: [ 1, 2, 4, 6 ]
left: [ 9 ] right: [ 7 ]
push lower number onto sorted array
sorted array: [ 1, 2, 4, 6, 7 ]
[ 1, 2, 4, 6, 7, 9 ]
Hint: hit control+c anytime to enter REPL.
 
Hint: hit control+c anytime to enter REPL.
 