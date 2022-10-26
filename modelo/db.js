import mysql from 'mysql'
var conexion = mysql.createConnection({
    host:'localhost',
    port:3307,
    database:'apis',
    user:'root',
    password:''
})
conexion.connect(function (error) {
    if (error) {
        console.error('Conxion exitosa desde node js y MySQL'+ error.stack)
        return;
    }else{
      console.log('conexion exitosa ID: ' + conexion.threadId);
    }
  });
  export{conexion}