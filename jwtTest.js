const jwt = require('jsonwebtoken')

// tokens that are not verified will throw an error to the catch
try {
    // create a jwt 'payload' (the info you want to encode in the token)
    // user data from db
    const payload = {
        name: 'test boi',
        email: 'test@boi.com',
        // NO PASSWORD
        id: 'hi i am the user id'
    }
    // this is a jwt
        // how the jwt is encoded: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
        // the encoded payload: eyJuYW1lIjoidGVzdCBib2kiLCJlbWFpbCI6InRlc3RAYm9pLmNvbSIsImlkIjoiaGkgaSBhbSB0aGUgdXNlciBpZCIsImlhdCI6MTY1NTkyNDIwMiwiZXhwIjoxNjU1OTMwMjAyfQ.
        // signature we created: UBHInoxeCoes6tT3DLSAEuQW0NGhn2w2IU7agDyQC7U
    // sign and encode out jwt payload
    // jwt.sign(data to encode, secret to sign with, options obj)
    const token = jwt.sign(payload, 'my secret',{ expiresIn: 60 * 100 })
    console.log(token)

    const decode = jwt.verify(token, 'my secret')
    console.log('decoded payload:', decode)
} catch (error) {
    console.warn('jwt error', error)
}

