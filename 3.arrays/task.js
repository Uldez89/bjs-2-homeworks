function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((items, index) => items === arr2[index]);   
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(users => users.gender === gender).map(users => users.age).reduce((acc, item, index, users) => {
      acc += item;
      if ( index === users.length - 1){
        return acc / users.length;
      } 
      return acc;
    }, 0);
    return result;
  }