//Implement a function "markActive", which, when given a list of objects and an id, returns the same list, but with the corresponding object marked active (all other objects should not be active).

function markActive(list, id) {
  for (var i = 0; i < list.length; i++){
    if (id === list[i].id) {
      list[i].active = true;
    } else {
      list[i].active = false;
    }
  }
  return list;
}