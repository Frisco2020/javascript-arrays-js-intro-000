var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
return array = [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
array = array.unshift(element)
return array;
}

function addElementToEndOfArray(array, element) {
return array = [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
return array.push(element);
}
