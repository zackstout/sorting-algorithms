# Sorting Algorithms
Getting some computer science practice by exploring sorting algorithms.

- [x] Bubble sort
- [x] Insertion sort
- [x] Quick sort
- [x] Merge sort
- [x] Counting sort
- [ ] Heap sort

## Testing
- Bubble sort takes about 650 ms on average (for a length-10,000 array), and exceeds the call-stack for length-100,000 array.
- Counting sort takes about 10 ms on average (for a length-10,000 array), and about 40 ms for a length-100,000 array.
- Insertion sort takes about 850 ms on average (for a length-10,000 array), and exceeds the call-stack for length-100,000 array.
- Quick sort takes about 30 ms on average (for a length-10,000 array), and about 80ms for a length-100,000 array.
- Merge sort takes about 70 ms on average (for a length-10,000 array), and roughly 450 ms for a length-100,000 array.

- This makes sense: Insertion and Bubble sort are O(n<sup>2</sup>), whereas Counting is O(n + k) and the remaining 3 are O(n * log(n)).
