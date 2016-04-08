var arr = [201, 39, 54, 461, 567];

function selectionSort(items){
  var len = items.length;
  var newArray = [];
  console.log("length is this", len);

  for (var i = 0; i < len; i++){
    smallest = i; 
    for(j = i + 1; j < len; j++){
      //comparison
      if(items[j] < items[smallest]){
        smallest = j;
        console.log("I found the smallest and it is", smallest);
      }
    }
  }
  return items;
}

//FUNCTION CALL

console.log("PRE-SORT");
console.log(arr.join(" "));
console.log("-------");
console.log("POST-SORT");
console.log(selectionSort(arr).join(" "));