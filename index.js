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

app.get('/users', UserService.getUser);
app.post('/users', UserService.addUser);
app.put('/users/:id', UserService.updateUser);
app.delete('/users/:id', UserService.deleteUser);

// url tasks
app.post('/tasks', tasksService.addTasks);
app.get('/tasks', tasksService.getTasks);


app.post('/toko', tokoService.addData);
app.get('/toko', tokoService.getData);
app.delete('/toko/:user_id', tokoService.deleteDataById);
app.put('/toko/update/:user_id', tokoService.updateDataById);

app.listen(port, host, () => {
    console.log(`server berjalan pada http://${host}:${port}`);
})
