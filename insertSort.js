var arr = [201,39,54,461,93,377,413,176,164,317,109,113,36,235,17,60,53,474,257,48];
// var arr = [201,39,54];

function insertSort(items){
  // loop over all numbers
  var length = items.length;
  var value;
  debugger;

  for(i=1; i < length; i++){
    value = items[i];

    for(j = i - 1; j > -1 && items[j] > value; j--){
      items[j + 1] = items[j];
    }
    items[j + 1] = value;
  }
  return items;
}

//================================================
// FUNCTION CALL
//================================================
console.log("PRE-SORT");
console.log(arr.join(" "));
console.log("---------------------------")
console.log("POST-SORT");
console.log(insertSort(arr).join(" "));