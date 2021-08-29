const fish = {name: 'king hilsha' , price: 9000, phone:'0170000333030', address: 'chandpur', dress: 'silver', id: 58};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;

const {phone, price, dress, id} = fish;

// console.log(phone, price, dress);
// console.log(phone, id);
// console.log(phone);
// console.log(phone, price);
// console.log(phone);


const company = {
    name: 'GP',
    ceo: { id: 1, 
        name: 'ajmol', 
        food: 'fuchka' 
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

// const work = company.web.work;
// const framework = company.web.framework;

const {work, framework} = company.web;
const {food} = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food, second);
console.log(work, framework, food);