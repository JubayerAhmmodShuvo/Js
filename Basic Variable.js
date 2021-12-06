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
        if(err) throw err;\
        console.log("Connected to database");
    });
    dbConnection.query("SELECT * FROM Character", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
    dbConnection.end(function(err){"
        if(err) throw err;
        console.log("Connection closed");
    });
    
