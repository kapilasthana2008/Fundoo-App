
/**
 * creating a global object with two properties
 *  error 
 * boolean value
 * 
 *  */
let obj = {
    error: "",
    boolval: false
}

// taking regEx to check email verification..

const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/

module.exports = {

    email(email) {

        console.log("email",email);
        
        if (email === "") {

            obj.error = "Enter an valid email",
                obj.boolval = true
        }
        else if ((pattern.test(email)) === false) {


            obj.error = "wrong Email please enter valid email",
                obj.boolval = true
        }else{
            obj.error = "",
            obj.boolval = false
        }

        return obj
    },

    password(password) {


        if (password === "") {
            obj.error = "field should not be empty",
                obj.boolval = true
        }
        else if (password.length < 8) {
            obj.error = "password length should be minimum 8 characters",
                obj.boolval = true
        }
        else{
            obj.error = "",
            obj.boolval = false
        }

        return obj
    },

    fName(name){

        if(name === ""){
 
            obj.error = " Please enter first name",
                obj.boolval = true
        }else{
            obj.error = "",
            obj.boolval = false
        }
        return obj
    },

    lName(name){

        if(name === ""){
 
            obj.error = " Please enter last name",
                obj.boolval = true
        }else{
            obj.error = "",
            obj.boolval = false
        }
        return obj
    }

}