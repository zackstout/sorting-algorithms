# Sorting Algorithms
Getting some computer science practice by exploring sorting algorithms.

- [x] Bubble sort
- [x] Insertion sort
- [x] Quick sort
- [x] Merge sort
- [x] Counting sort
- [ ] Heap sort

## Testing
Number of milliseconds it takes (on average, roughly) to run each algorithm on arrays of length 10,000, 100,000 and 1,000,000:

Name | Type | 10,000 | 100,000 | 1,000,000
--- | --- | --- | --- | ---
Bubble | *O(n<sup>2</sup>)* | 650 | - | -
Counting | *O(n + k)* | 10 | 40 | 150
Insertion | *O(n<sup>2</sup>)* | 850 | - | -
Quick | *O(n * log(n))* | 30 | 80 | 450
Merge | *O(n * log(n))* | 70 | 450 | -

(Note: '-' indicates that the browser crashes and the algorithm fails.)
