const express=require('express');
const morgan=require('morgan');
const config = require('./config');
const app=express();
const misas=require('./modulos/misas/rutas');
const usuarios=require('./modulos/usuarios/rutas');

const error=require('./red/errors');
// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// configuracion
app.set('port',config.app.port);

// rutas
app.use('/api/misas',misas);
app.use('/api/usuarios',usuarios);

app.use(error);
module.exports=app;