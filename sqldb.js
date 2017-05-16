var mssql = require("mssql"); 
var dbConfig = {
    user:'sa',
	password:'davemusic1111',
	server:'DESKTOP-73LSFB7',
	database:'OnlineBookShop'   
};

var connection = mssql.connect(dbConfig, function (err) {
    if (err)
        throw err; 
    exports.request=new mssql.Request()
});

//module.exports = connection;