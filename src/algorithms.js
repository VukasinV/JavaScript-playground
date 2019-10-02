/* 
  --> SELECTION SORT
  Start from first element, find smallest element in the rest of array and swap it with current element
  Time complexity: O(n2) 
*/

export const selectionSort = function(arr) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[min] > arr[j]) min = j;
    }

    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

/*
  --> BUBBLE SORT 
  Start from first element, if next element is smaller, swap it, if it's not go to the next element
  Repeat process until you go through loop and no element is swapped
  Time complexity: O(n2)
*/

export const bubbleSort = function(arr) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

/*
  --> INSERTION SORT 
  Compare sorted and unsorted part of array
*/

export const insertionSort = function(arr) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > arr[i]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
};

/*
  --> HEAP SORT 
  Compare sorted and unsorted part of array
*/
export const heapSort = function(arr) {
  const { length } = arr;
};

/*
  --> QUICK sort
*/
export const quickSort = function(arr) {
  const { length } = arr;
};

/*
  --> MERGE sort
*/
export const mergeSort = function (arr) {
  const { length } = arr;
}

/*
  --> BUCKET sort
*/
export const quickSort = function (arr) {
  const { length } = arr;
}

/*
  --> RADIX sort
*/
export const radixSort = function (arr) {
  const { length } = arr;
}
