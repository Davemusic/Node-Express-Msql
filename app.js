const express=require('express');
const path=require('path');
const bodyparser=require('body-parser');
const app=express();
const db=require('./sqldb');
//importing all required modules


// setting view engine of express i.e for support of .ejs files 
// setting default path for ejs files
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//routing action for default
app.get('/',(req,res)=>{
		db.request.query('select * from UserTbl',(err,users)=>{
	        console.log(users);
			var data = {};
	        data["user"] = users.recordset;
					res.render('index',{
				    	title:'Customers',
				    	users:data["user"]
  					});
		});
});


app.listen(3000,()=>{
console.log('server started on 3000');

})