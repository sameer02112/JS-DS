// day1 - hello world
console.log('hello world!');

// day2 - prime number

// day3 - fibonacci

function getFibonacci(x){
    if(x == 0 || x == 1){
        return x;
    }
    return getFibonacci(x-1) + getFibonacci(x-2);
}

function printFib(){
    let n = 5;
    for(let i=0;i<n;i++){
        console.log(getFibonacci(i));
    }
}

printFib();

// day4 - binary search

let binaryArr = [1,4,10,15,11,98,1111,7,90000];
binaryArr.sort((a,b) => a - b)

let start = 0;
let end = binaryArr.length - 1;
let target = 7;

function binarySearch(arr,start,end,target){
    if(end >= start){
        let mid = Math.round(start + (end - start)/2);
        if(arr[mid] == target){
            return true;
        }
        else if(arr[mid] > target){
            return binarySearch(arr,start,mid-1,target);
        }else{
            return binarySearch(arr,mid+1,end,target);
        }
    }
    return false;
}
let res = binarySearch(binaryArr, start,end,target);
console.log(res);   

//day 5 - remove duplicates from an array
{
    let arr = [0,1,1,0,0,5,11,999,9,5,1,0,0,22];
    arr.sort((a,b) => a-b);
    let j=0;
    for(let i=0; i < arr.length;i++){
        if(arr[i] != arr[i+1]){
            arr[j] = arr[i];
            j++;
        }
    }
    arr = arr.slice(0,j);
    console.log('remove duplicate',arr);
}

// day 6 - sort arrays of 0,1,2 ( dutch national flag)
{
    let arr = [0,1,2,0,1,2];
    let start = 0, mid = 0, end = arr.length-1;

    while(mid <= end){
        if(arr[mid] == 0){
            let temp = arr[start];
            arr[start] = arr[mid];
            arr[mid] = temp;
            start++;
            mid++;
        }else if(arr[mid] == 1){
            mid++;
        }else{
            let temp = arr[end];
            arr[end] = arr[mid];
            arr[mid] = temp;
            end--;
        }
    }

    console.log('dutch national flag',arr)
}