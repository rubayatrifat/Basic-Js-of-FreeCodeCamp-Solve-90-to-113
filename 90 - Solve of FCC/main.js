/**
 * Convert the switch statement into an object called lookup. Use it to look up val    and assign the associated string to the result variable.

 *Passed:phoneticLookup("alpha") should equal the string Adams
 *Passed:phoneticLookup("bravo") should equal the string Boston
 *Passed:phoneticLookup("charlie") should equal the string Chicago
 *Passed:phoneticLookup("delta") should equal the string Denver
 *Passed:phoneticLookup("echo") should equal the string Easy
 *Passed:phoneticLookup("foxtrot") should equal the string Frank
 *Passed:phoneticLookup("") should equal undefined
 *Passed:You should not modify the return statement
 *Passed:You should not use case, switch, or if statements

*/

//Sove

// Setup
function phoneticLookup(val) {
    let result = "";
  
    const keyWord = {
      "alpha" : "Adams",
      "bravo" : "Boston",
      "charlie" : "Chicago",
      "delta" : "Denver",
      "echo" : "Easy",
      "foxtrot" : "Frank",
      "" : undefined,
    }
  
    result = keyWord[val] 
  
  
    // Only change code below this line
    // switch(val) {
    //   case "alpha":
    //     result = "Adams";
    //     break;
    //   case "bravo":
    //     result = "Boston";
    //     break;
    //   case "charlie":
    //     result = "Chicago";
    //     break;
    //   case "delta":
    //     result = "Denver";
    //     break;
    //   case "echo":
    //     result = "Easy";
    //     break;
    //   case "foxtrot":
    //     result = "Frank";
    //     break;
    //   case "":
    //     result = undefined  
    // }
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");