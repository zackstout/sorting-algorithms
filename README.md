# Sorting Algorithms
Getting some computer science practice by exploring sorting algorithms.

- [x] Bubble sort
- [x] Insertion sort
- [x] Quick sort
- [x] Merge sort
- [x] Counting sort
- [ ] Heap sort

## Testing
<!-- - Bubble sort takes about 650 ms on average (for a length-10,000 array), and exceeds the call-stack for length-100,000 array.
- Counting sort takes about 10 ms on average (for a length-10,000 array), and about 40 ms for a length-100,000 array.
- Insertion sort takes about 850 ms on average (for a length-10,000 array), and exceeds the call-stack for length-100,000 array.
- Quick sort takes about 30 ms on average (for a length-10,000 array), and about 80ms for a length-100,000 array.
- Merge sort takes about 70 ms on average (for a length-10,000 array), and roughly 450 ms for a length-100,000 array.

- This makes sense: Insertion and Bubble sort are O(n<sup>2</sup>), whereas Counting is O(n + k) and the remaining 3 are O(n * log(n)). -->
Number of milliseconds it takes (on average, roughly) to run each algorithm on an array of length 10,000 and 100,000:

Name | Type | 10,000 | 100,000
--- | --- | --- | ---
Bubble | *O(n<sup>2</sup>)* | 650 | (breaks)
Counting | *O(n + k)* | 10 | 40
Insertion | *O(n<sup>2</sup>)* | 850 | (breaks)
Quick | *O(n * log(n))* | 30 | 80
Merge | *O(n * log(n))* | 70 | 450
