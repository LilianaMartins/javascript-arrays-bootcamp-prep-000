<<<<<<< HEAD
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var element = "mars"
function addElementToBeginningOfArray(array,element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)

  return array
}

function accessElementInArray(array, index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array 
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1); 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
=======
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles","foo" ]

function addElementToBeginningOfArray(array,element) {
  return ["MilkyWay",...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  return chocolateBars.unshift("MilkyWay");
>>>>>>> bd2ac8706d2e52869e4b8585e548cba3212db1ff
}