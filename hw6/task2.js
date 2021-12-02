// 2. Допишите функцию countOnline

        let users = [
            {
                age: 27,
                online: false
            },
            {
                age: 32,
                online: true
            },
            {
                age: 48,
                online: false
            },
            {
                age: 19,
                online: true
            }
        ];

        function countOnline(arr) {
            let count = 0;
                for(let users in arr) {
                if(arr[users].online === true) {
                count += 1;
                }
                }
                return count;
         }
        
        console.log(countOnline(users));

