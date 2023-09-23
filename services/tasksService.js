import { successResponse, errorResponse } from "../utils/response.js";
import * as UserRepo from "../repositories/tasks.js"

const tasks= []

export const addTasks = async (req, res, next) => {
    try{
    // let id = nanoid(6);
    let user_id = req.body.user_id;
    let tittle= req.body.tittle;
    let is_done= req.body.is_done;
    let [result] = await UserRepo.createData(user_id, tittle,is_done);
    successResponse(res, "berhasil menambahkan tasks", result)
    
} catch (error){
    next(error)
}
}


export const getTasks = async (req, res, next) => {
    try{
        let [result] = await UserRepo.getData()
        successResponse(res, "success", result)
    }catch(error){
        next(error)
    }
}