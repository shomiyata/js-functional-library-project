fi = (function() {



    return {
        libraryMethod: function() {return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'},
    
        each: function (list, iteratee, context) {
            for (let i = 0; i < list.length; i++) {
                iteratee(list[i]);
            }
        },

        map: function (list, iteratee, context) {
            let array = [];
            for (let i = 0; i < list.length; i++) {
                array[i]=iteratee(list[i]);
            }
            return array;
        },

        reduce: function (list, iteratee, memo, context) {
            let m = memo
            for (let i = 0; i < list.length; i++) {
                m = iteratee(m, list[i]);
            }
            return m;
        },

        find: function (list, predicate, context) {
            for (let i = 0; i < list.length; i++) {
                if (predicate(list[i])) {
                    return list[i];
                }
            }
            return false;
        },

        filter: function(list, predicate, context) {
            let array = []
            for (let i = 0; i < list.length; i++) {
                if (predicate(list[i])) {
                    array.push(list[i]);
                } 
            }
            return array;
         },

        sortBy: function(list, iteratee, context){
            let array = [];
            for (let i = 0; i < list.length; i++) {
                array.push(iteratee(list[i]));
            }
            return array.sort();
        },

        size: function(list){
            return list.length;
        },

        first: function(array, n) {
             return array[0];
        },

        last: function(array, n) {
            return array[array.length-1];
        },

        end_from_last: function(array, n) {
            return array[array.length-n];
        },

        compact: function(array) {
            let newArr = [];
            for (let i = 0; i < array.length; i++ ){
                if (array[i]) {
                    newArr.push(array[i]);
                }
            }
            return newArr;
        },

        // flatten: function(array, shallow) {
        //     if (Array.isArray(array[0])) {
        //         return this.flatten(array[0])
        //     } 
        //     else if (array.length === 1) {
        //         return array.slice(0,1)
        //     } else {
        //         return array.slice(0,1) + this.flatten(array.slice(1, array.length))
        //     }
        // },
        
        uniq: function(array, isSorted, iteratee) {
            let newArr = [];
            for (let i = 0; i < array.length; i++) {
                let existing = false;
                for (let j = 0; j < newArr.length; j++) {
                    if (array[i] === newArr[j]) {
                        existing = true;
                    }
                }
                existing ? '' : newArr.push(array[i]);
            }
            return newArr;
        },

        // bind: function(function, param1, param2) {
            
        // }

        keys: function(obj) {
            let arr = []
            for (let key in obj) {
                arr.push(key);
            }
            return arr;
        },

        values: function(obj) {
            let arr = []
            for (let key in obj) {
                arr.push(obj[key]);
            }
            return arr;
        },

        functions: function(obj) {
            let arr = []
            for (let key in obj) {
                arr.push(key);
            }
            return arr;
        }


    }
})()

fi.libraryMethod([1,2,3],console.log)

