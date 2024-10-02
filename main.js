function sumArray(arr){
        return arr.reduce((a,b)=>a+b)
}

function avg(arr){
        return sumArray(arr)/arr.length
}

function longestString(str){
        let longest = 0
        for(const s of str){
                longest = s.length > longest ? s.length : longest
        }
        return longest
}

function stringsLongerThan(arr, n){
        return arr.filter(e=>e.length>n)
}

function countdown(n){
        if(n <=0) return
        console.log(n)
        return countdown(n-1)
}



const testString = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]


console.log(testString.sort((a,b)=>b.age-a.age))
console.log(testString.filter(e=>e.age<=50))
console.log(testString.map(e=>{
        e.job = e.occupation
        e.age += 1
        delete e.occupation

        return e
})))

const sumAge = testString.reduce((a,b)=>a.age+b.age)
console.log(`sum of ages: ${sumAge}. average age: ${sumAge/testString.length}.`)

function incrementAge(obj){
        obj.age = Object.hasOwn(obj,'age') ? obj.age+1 : 0
        obj.updated_at = new Date()
        return obj
}

function incrementAgePassByValue(obj){
        let res = Object.create(obj)
        res.age = Object.hasOwn(res, 'age') res.age+1 : 0
        res.updated_at = new Date()
        return res
}
