let value = [1, 2, 3, 4, 5].reduce((a, b) => { return a + b })

console.log(value)


let total_Price = [{ price: 5000, id: 'p101' }, { price: 12500, id: 'p103' }, { price: 25500, id: 'p103' }].reduce((a, b) => {
    return a.price + b.price
})
console.log(total_Price)