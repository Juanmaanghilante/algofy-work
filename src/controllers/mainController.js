

// const express = require('express');
const fs=require('fs') 

const path =require('path')
const rutaArchivo = path.resolve('./src/database/proyectos.json')
const proyectos = JSON.parse(fs.readFileSync(path.resolve('./src/database/proyectos.json')))
const controller = {
   
    home: (req, res) => {
      
       
        
       
       const sinBorrados = proyectos.filter(proyecto=>proyecto.isBorrado != true)
       
       console.log(sinBorrados);
        return res.render('hero',{proyectos:sinBorrados}) 
    // compartir la variable para renderizarla en la vista 
    },

    
    about:(req,res)=>{
        return res.render('about')
    },
    contact:(req,res)=>{
        return res.render('contact')
    },
    
    
   
};

module.exports = controller;