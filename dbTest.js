const db = require('./models')

// testing user CREATE
db.user.create({
        name: 'Test Boi',
        email: 'test@boi.com',
        password: 'testerboi'
    })
    .then(user =>{
        console.log('what up test boi', user)
    })
    .catch(console.warn)