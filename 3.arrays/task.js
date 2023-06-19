function compareArrays(arr1, arr2) {
    function compareArrays(arr1, arr2) {
        return arr1.length === arr2.length && arr1.every((items, index) => items === arr2[index]);
    } 
}

function getUsersNamesInAgeRange(users, gender) {
    let result = people.filter(people => people.gender === gender).map(people => people.age).reduce((acc, item, index, people) => {
      acc += item;
      if ( index === people.length - 1){
        return acc / people.length;
      } 
      return acc;
    }, 0);
    return result;
  }