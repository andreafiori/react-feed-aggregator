// Resource: http://xahlee.info/js/js_comparison_equality_test_objects.html

export class ArrayUtils {

  static areObjectsEqual(obj1, obj2) {

    /*
      return true if 2 obj are equal.
      equal here means deep compare enumerable properties of object
    */
  
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // First make sure have same keys. may save time
    if ( !keys1.every( ((k, i) => (k === keys2[i])) ) ) {
      return false;
    }
  
    // Check if any value is not equal
    return keys1.every ( ((kk) => {
      const v1 = obj1[kk];
      const v2 = obj2[kk];
      if ( Array.isArray(v1) )  {
        return areArraysEqual(v1, v2);
      } else if ( typeof v1 === "object" && v1 !== null) {
        return areObjectsEqual(v1, v2);
      } else {
        return v1 === v2;
      }
    }));
  
  }

  static areArraysEqual(array1, array2) {
    /*
      return true if 2 array are equal
      allow array-like object
      allow nested array
    */
  
    // allow array-like object
    if ( Array.isArray(array1) !== Array.isArray(array2) ) { return false; }
    if (array1.length !== array2.length) { return false; }
  
    return Array.prototype.every.call(array1, ((x, i) => {
        const y = array2[i];
        if ( Array.isArray(x) ) {
          return (!Array.isArray(y)) ? false : areArraysEqual(x, y);
        } else if ( typeof x === 'object' && typeof x !== null) {
          return ( !( typeof y === 'object' && typeof y !== null)) ? false : areObjectsEqual(x,y);
        } else {
          return (x === y);
        }
      })
    );
  }
  
}
