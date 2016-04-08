var arr = [201,39,54,461,93,377,413,176,164,317,109,113,36,235,17,60,53,474,257,48];
// var arr = [201,39,54,461,93,377];


function swap(items, firstIndex, secondIndex){
  var tmp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = tmp;
}

function selectionSort(items){
  var len = items.length, smallest;
  var newArray = [];
  console.log("length is:", len);

  for(var i = 0; i < len; i++){
    smallest = i;

    for(j = i + 1; j < len; j++){
      // comparison
      if(items[j] < items[smallest]){

        smallest = j;
        // console.log("I found the smallest and it is", smallest);
      }
    }

    if(i !== smallest){
      swap(items, i, smallest);
    }
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
console.log(selectionSort(arr).join(" "));