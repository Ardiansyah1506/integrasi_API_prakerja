import dbPool from "../utils/db.js";

export const getData = () => {
    const sql = "SELECT tasks_id, user_id, tittle, created_at FROM tasks";
    return dbPool.query(sql)
}

export const createData = (user_id, tittle) => {
    let created_at = new Date();
    const sql = "INSERT INTO tasks (user_id, tittle, created_at) VALUE(?, ?, ?)";
    const values = [user_id, tittle, created_at];
    const result = dbPool.query(sql, values);

    return result;
}

export const getDataById = (id) => {
    const sql = "SELECT user_id, tittle, created_at FROM users WHERE tasks_id = ?";
    const values = [id];

    return dbPool.query(sql, values)
}

export const updateData = () => {

}

export const deleteData = () => {
    
}

export const getDataByEmail = (email) => {
    const sql = "SELECT user_id, name, email, password, created_at FROM users WHERE email = ?";
    const values = [email];

    return dbPool.query(sql, values)
}