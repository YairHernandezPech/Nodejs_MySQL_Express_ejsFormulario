import express from 'express'
import { conexion } from '../modelo/db.js';
var crud_productos=({})


crud_productos.leer = (req,res)=>{
    conexion.query('SELECT id,descripcion,price,count FROM producto',(error,results)=>{
        if (error){
            throw error;
            
        }else{
            res.render('producto/index',{resultado:results})
        }
    })
};

crud_productos.cud = (req,res) => {
    const btn_crear = req.body.btn_crear;
    const btn_actualizar = req.body.btn_actualizar;
    const btn_borrar = req.body.btn_borrar;
    const id = req.body.txt_id;
    const descripcion = req.body.txt_descripcion;
    const price = req.body.txt_price;
    const count = req.body.txt_count;
    if (btn_crear) {

        conexion.query('INSERT INTO producto set ?',{'descripcion':descripcion,'price':price,'count':count},(error,results)=>{
            if (error) {
                console.log(error);
            }else{
                res.redirect('/');
            }
        });
        
    }
    if (btn_actualizar) {

        conexion.query('UPDATE producto set ? where id = ?',[{'descripcion':descripcion,'price':price,'count':count},id],(error,results)=>{
            if (error) {
                console.log(error);
            }else{
                res.redirect('/');
            }
        });
        
    }
    
    if (btn_borrar) {

        conexion.query('DELETE FROM producto  where id = ?',[id],(error,results)=>{
            if (error) {
                console.log(error);
            }else{
                res.redirect('/');
            }
        });
        
    }

};
export{crud_productos}