const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.MDB_CONN_STR).then(()=>console.log('Successfuly connected to MongoDB')).catch(e=>console.log(e));

module.exports = conn;