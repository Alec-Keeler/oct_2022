// We'll write some code in here :)
const bcrypt = require('bcryptjs')



const hashPass = async (password) => {
    const hash = await bcrypt.hash(password, 12)
    console.log(hash)
}

// hashPass('password')

// $2a$10$RE1OfYzr85/qUFRhGYTdyeH19dymZuYQbE5gGzRt7xvt6oa80K5/m
// \__/\/ \____________________/\_____________________________/
//  Alg Cost      Salt                        Hash

const testPass = async (password, hash) => {
    const isPass = await bcrypt.compare(password, hash)
    console.log(isPass)
}

testPass('Password', '$2a$10$RE1OfYzr85/qUFRhGYTdyeH19dymZuYQbE5gGzRt7xvt6oa80K5/m')