import * as algorithms from './algorithms';

const arr = [4, 1, 2, 3];

console.log('Bubble sort:');
console.log(algorithms.bubbleSort(arr));
console.log();
console.log('Selection sort:');
console.log(algorithms.selectionSort(arr));
console.log();
console.log('Insertion sort:');
console.log(algorithms.insertionSort(arr));
console.log();
console.log('Heap sort:');
console.log(algorithms.heapSort(arr));
console.log();
console.log('Quick sort:');
console.log(algorithms.quickSort(arr));
console.log();
console.log('Merge sort:');
console.log(algorithms.mergeSort(arr));
console.log();
console.log('Bucket sort:');
console.log(algorithms.bucketSort(arr));
console.log();
console.log('Radix sort:');
console.log(algorithms.radixSort(arr));
