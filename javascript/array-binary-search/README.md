# Array Binary Search

Write a function called `BinarySearch` which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## **Example**

| Input                               | Output |
| ----------------------------------- | ------ |
| [4, 8, 15, 16, 23, 42], 15          | 2      |
| [-131, -82, 0, 27, 42, 68, 179], 42 | 4      |
| [11, 22, 33, 44, 55, 66, 77], 90    | -1     |
| [1, 2, 3, 5, 6, 7], 4               | -1     |

## **Algorithm**

Swap values by grabbing the ends of the array

- Use a for loop to look at/iterate through all the elements in the array
- Swap each element with the inverse array index
- Go half-way through array and stop

## **Pseudocode**

```
for i ← 0 ...
...
 else
  OUTPUT ← -1
```

## Visual

![Array reversal](.javascript/array-binary-search/array-binary-search.PNG)
