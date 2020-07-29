const _ = {}

_.each = (array, iteratee) => {
  var new_array = new Array(array.length)

  for(let i = 0; i < array.length; i++){
    new_array[i] = iteratee(array[i], i, array)
  }
  return new_array
}

_.map = (array, iteratee) => {
  var new_array = new Array(array.length)

  for(let i=0; i < array.length; i++){
    new_array[i] = iteratee(array[i], i, array)
  }

  return new_array
}

_.filter = (array, predicate) => {
  var new_array = []

  for(let i = 0; i < array.length; i++){
    if(predicate(array[i], i, array)){
      console.log()
      new_array.push(array[i])
    }
  }
  return new_array
}


_.find = (array, predicate) => {
  var value = undefined

  for(let i = 0; i < array.length; i++){
    if(predicate(array[i], i, array)){
      value = array[i]
      break
    }
  }

  return value
}


_.random = (min=0, max) => {
  var rand

  rand = Math.floor(Math.random() * Math.floor(Math.abs(min) + Math.abs(max)))
  
  return rand - Math.abs(min)
}

_.range = (start, stop, step) => {
  var list = []
  for(let i=start; i<stop; i++){
    if(step){
      if(i % step == 0){
        list.push(i)
      }
    }else{
      list.push(i)
    }
  }
  return list
}


export default _