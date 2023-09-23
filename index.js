/*
    1. Ubah API CRUD berikut menggunakan Database.
*/

import express from 'express';
import * as UserService from './services/userService.js';
import * as tasksService from './services/tasksService.js';
import * as tokoService from './services/tokoService.js';

const app = express();
const port = 8010;
const host = "localhost";
app.use(express.json())



// integrasi API sistem sederhana toko buah online

// membuat raw / data baru
app.post('/toko', tokoService.addData);

// Menampilkan Semua Data dari Database
app.get('/toko', tokoService.getData);

//  Menampilkan data berurutan dari yang terbanyak berdasarkan jumlah pcs
app.get('/toko/pcs', tokoService.getDataDescByPcs);

// menampilkan total penjualan dari semua buah
app.get('/toko/getTotal', tokoService.getTotalPrice);

// menampilkan data berdasarkan nama items
app.get('/toko/getItems/:item_name', tokoService.getDataItems);

// menampilkan total penjualan berdasarkan jenis buah
app.get('/toko/getPrice/:item_name', tokoService.getItemsPrice);

// menghapus data berdasarkan id user
app.delete('/toko/:user_id', tokoService.deleteDataById);

// update data user / penjualan tetapi masih ngebug hehehe
app.put('/toko/update/:user_id', tokoService.updateDataById);



app.get('/users', UserService.getUser);
app.post('/users', UserService.addUser);
app.put('/users/:id', UserService.updateUser);
app.delete('/users/:id', UserService.deleteUser);

// url tasks
app.post('/tasks', tasksService.addTasks);
app.get('/tasks', tasksService.getTasks);


app.listen(port, host, () => {
    console.log(`server berjalan pada http://${host}:${port}`);
})
