const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const app=express();
// const sql=require('mssql');
const db=require('./sqldb');

// const config={
// 	user:'sa',
// 	password:'davemusic1111',
// 	server:'DESKTOP-73LSFB7',
// 	database:'OnlineBookShop'

// };



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// app.use(express.static(path.join(__dirname,'js')));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


app.get('/',(req,res)=>{
	// sql.connect(config,function(err){
	// 	if (err) console.log(err);
	// 	const request=new sql.Request();
		db.request.query('select * from UserTbl',(err,users)=>{
          console.log(users);
		var data = {};
        data["user"] = users.recordset;
		res.render('index',{
    	title:'Customers',
    	users:data["user"]
  					});
		});
 
	// });


});


app.listen(3000,()=>{
console.log('server started on 3000');

})