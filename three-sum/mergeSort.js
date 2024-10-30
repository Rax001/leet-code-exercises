
function merge(L, R) {
    let A = [];
    let i = 0;

    // console.log("Merging L:", L);
    // console.log ("Merging R:", R);
    
    while (L.length > 0 && R.length > 0) {
        if (L[i] > R[i]) {
            A.push(R[i]);
            R.shift();
        } else {
            A.push(L[i]);
            L.shift();
        }
    }

    while (L.length > 0) {
        A.push(L[i]);
        L.shift();
    }
    while (R.length > 0) {
        A.push(R[i]);
        R.shift();
    }   
    // console.log("merged: ", A);
    return A;
}

function mergeSort(arr, l, r) {
    if (l == r) {
        return arr;
    }

    let mid = Math.floor((r - 1) / 2);
    let left = arr.slice(l, mid + 1);
    let right = arr.slice(mid + 1, arr.length);

    // console.log("left: ", left);
    let L = mergeSort(left, 0, left.length - 1);
    
    // console.log("right: ", right);
    let R = mergeSort(right, 0, right.length - 1);

    return merge(L, R);
}

function main() {
    let nums = [-1, 0, 1, 2, -1, 4];
    let arr = nums;
    arr = mergeSort(arr, 0, nums.length - 1);
    // console.log(nums);
    // console.log(arr);
}

// main();

export { mergeSort, merge };