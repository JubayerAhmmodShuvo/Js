function namestring(name) {
    var b= "Shuvo"
    var result = name + b
    return result
}
//js to connect to the database
var dbConnection= mysql.createConnection({
    user: "root",
    password: "",

    host: "localhost",
    database: CharacterDatabase
    });
    dbConnection.connect(function(err){"



