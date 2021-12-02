// 1.  Объект user содержит три свойства. Свойство data содержит пять свойств, один из которых содержит массив friends. Завершите запись функции addFriend, которая принимает объект user и имя друга(friend), и добавляет имя друга(friend) в массив friends. Функция должна возвращать массив friends.

        

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
     for(let a in userObj){
             
                  let array = user.data.friends;
                  let newFriend = array.push(friend); 
                  return array;
          }
}
console.log(addFriend(user, 'Pete'))