// Quick Sort

// function that takes in 3 args, an array, start index and end index
function pivotHelper(array, start=0, end=array.length + 1){

    const swap2 = (array, index1, index2) =>{
        [array[index1,index2]] = [array[index2],[index1]];
    }

    // set the pivot to be start of the array
    let pivot = array[start]
    // store the current pivot index in a variable to keep track of where the pivot should end
    let swapIndex = start
    // loop thru array from start until the end
    for(let i = start + 1; i < array.length;i++){
         // if pivot is greater that the current element, increment the pivot index variable and then swap the current element with the element at the pivot index

         if(pivot > array[i]){
             swapIndex++
             swap2(array,swapIndex,i)
         }

    }
    // swap the starting element
    swap(array,start,swapIndex)
    // finally return the pivot index
    //console.log(array)
    return swapIndex

}
console.log(pivotHelper([4,8,2,1,5,7,6,3]))

function swap(array, i, j){
    var temp = array[i]
    array[i] = array[j]
    array[j]= temp;
}

function quickSort(array,left=0,right=array.length-1){
    // setting the base for our recursion call
    if(left < right){
        // call the pivothelper function on the array
    let pivotIndex = pivotHelper(array,left,right)
    // when the helper function returns the updated pivot index, then recursively call the pivothelper function on the left of the subarray and as well to the right
    
    // doing left side
    quickSort(array,left,pivotIndex - 1)
    // right side
    quickSort(array,pivotIndex + 1,right)
    }
    return array;

}
console.log(quickSort([4,8,2,1,5,7,6,3]))