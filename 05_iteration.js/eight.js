const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)  // Arrow funtion

// console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js course",
        price: 5999
    },
    {
        itemName: "python course",
        price: 2399
    },
    {
        itemName: "cpp course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 12999
    },
    
]
// this is used to reduce function that is cunducted of the addition and used for the shopping usses count
const priceTopay = shoppingCard.reduce((acc,  item) => acc + item.price, 0)
console.log(priceTopay);