
const { Router } = require('express');
const {  postAuthentication, } = require('../controllers/authProvedor')

const route = Router();

route.post('/', postAuthentication);

module.exports = route;