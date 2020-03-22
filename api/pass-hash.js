const bcrypt = require('bcrypt');
const saltRounds = 10;
const axios = require('axios');
class LoginService {

    static post ({ username, password }) {

        bcrypt.hash(password, saltRounds, function(err, hash) {
            axios.post('http://localhost:3003/authenticate', {
                username,
                hash
            }).then(response => response);
        }
        
    }
}

module.exports = LoginService;
