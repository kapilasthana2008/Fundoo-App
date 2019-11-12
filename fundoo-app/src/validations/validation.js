
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

// defining module

module.exports = {

    /**
     *  defining email function which will be validate
     *  here passed as a parameted by the caller method 
     *  if any error find returning an object with defined error
     *   and boolen value.
    */
    
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

     /**
     *  defining password function which will be validate
     *  here passed as a parameted by the caller method 
     *  if any error find returning an object with defined error
     *   and boolen value.
    */
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

     /**
     *  defining fName function which will be validate
     * textfield that it is empty or not.
     *  if  error find returning an object with defined error
     *   and boolen value.
    */
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


    /**
     *  defining lName function which will be validate
     * textfield that it is empty or not.
     *  if  error find returning an object with defined error
     *   and boolen value.
    */

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