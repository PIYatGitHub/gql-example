const {AuthenticationError} = require('apollo-server')

const jwt = require('jsonwebtoken')
const {models} = require('./db')
const secret = 'catpack'

const createToken = ({id, role}) => jwt.sign({id, role }, secret)

const getUserFromToken = token => {
  try {
    const user = jwt.verify(token, secret)
    return models.User.findOne({id: user.id})
  } catch (e) {
    return null
  }

}

module.exports = {
  getUserFromToken,
  createToken
}
