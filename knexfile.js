const path = require('path');
module.exports = {
    client: 'pg',
    connection:{
        host:'localhost',
        user: 'admin',
        password:'admin' ,
      database:'online_clothing'
    },
    migration:{
        tableName: 'migrations',
        directory: path.resolve(__dirname,'./migrations'),
    },
     useNullAsDefault:true
    };