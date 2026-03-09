/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  // 'this' refers to the array itself
  if(this.length == 0){
    return -1;
  }else{
    return this[this.length - 1]
  }
 
};

// Example Usage:
const nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

const nums2 = [];
console.log(nums2.last()); // Output: -1
