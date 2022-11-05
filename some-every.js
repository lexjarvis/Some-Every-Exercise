// Write a function called hasOddNumber 
function hasOddNumber(arr) {
    return arr.some(function(val){
        return val % 2 !== 0;
      })
}

// Write a function called hasAZero 
function hasAZero(num) {
    return num.toString().split('').some(function(val){
        return val === '0';
      })
}

// Write a function called hasOnlyOddNumbers 
function hasOnlyOddNumbers(arr) {
    function hasOnlyOddNumbers(arr){
        return arr.every(function(val){
          return val % 2 !== 0;
        })
    }
}

// Write a function called hasNoDuplicates
function hasNoDuplicates(arr) {
    function hasNoDuplicates(arr){
        return arr.every(function(val){
          return arr.indexOf(val) === arr.lastIndexOf(val);
        });
    }
}

// Write a function called hasCertainKey 
function hasCertainKey(arr, key) {
    return arr.every(function(val){
        return key in val
      })
}

// Write a function called hasCertainValue 
function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(val){
        return key in val
      })
}
