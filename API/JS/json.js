//javascript object notation
//JSON => 
const user = { id: 11, name: 'gorib amir', job: 'actor' };
const stringified= JSON.stringify(user);
// console.log(stringified);
// console.log(user);


const shop = {
    name: 'alia store',
    address: 'ranbir road',
    profit: 15000,
    products: [ 'laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'alia bhatt',
        profession: 'actor'
    },
    isExpensive: false
}

//convert object to stringified
//using stringified
const shopJson = JSON.stringify(shop);
//console.log(shop);
console.log(shopJson);


//convert stringifird to Object
//using parse
const convert = JSON.parse(shopJson);
console.log(convert);