let arr = ["1","2",["3","4", ["5","6", ["7", ["8", "9", "10"]]]]]

function serialize(arr) {
  return arr.reduce(function(acc, next,index){
    let isArray =  Array.isArray(next)
    if(index===0) acc+="["
    acc+=isArray ? serialize(next) : ""+next+(index!==arr.length-1?",":"")
    if(index===arr.length-1) acc+="]"
    return acc
  }, "")
}

function deSerialize(string){
  const newArr=!Array.isArray(string)?JSON.parse(string):string
  return newArr.map(item=>Array.isArray(item)?deSerialize(item):""+item)
}
