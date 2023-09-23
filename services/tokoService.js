import { successResponse, errorResponse } from "../utils/response.js";
import * as Repo from "../repositories/toko.js"


export const addData = async (req, res, next) => {
    try{
    // let id = nanoid(6);
    let name = req.body.name;
    let item_name = req.body.item_name;
    let pcs = req.body.pcs;
    let price = req.body.price;
    // Hitung total_price
    let total_price = pcs * price;
    let [result] = await Repo.createData(name,item_name,pcs,price,total_price);
    successResponse(res, "berhasil menambahkan data", result)
    
} catch (error){
    next(error)
}
}


export const getData = async (req, res, next) => {
    try{
        let [result] = await Repo.getData()
        successResponse(res, "success", result)
    }catch(error){
        next(error)
    }
}

export const getDataItems = async (req, res, next) => {
    try {
        let item_name = req.params.item_name; 
        let [result] = await Repo.getDataItem(item_name);
        successResponse(res, "success", result);
    } catch (error) {
        next(error);
    }
}

export const getTotalPrice = async (req, res, next) => {
    try{
        let [result] = await Repo.getTotalPrice()
        successResponse(res, "success", result)
    }catch(error){
        next(error)
    }
}
export const deleteDataById = async (req, res, next) => {
    try {
        let user_id = req.params.user_id;
        let result = await Repo.deleteData(user_id);
        successResponse(res, "Data berhasil dihapus", result);
    } catch (error) {
        next(error);
    }
};

export const updateDataById = async (req, res, next) => {
    try {
        let user_id = req.params.user_id;
        let { name, item_name, pcs, price } = req.body;

        // Hitung total_price
        let total_price = pcs * price;

        let result = await Repo.updateData(name, item_name, pcs, price, total_price,user_id);

        if (result.affectedRows > 0) {
            successResponse(res, "Data berhasil diupdate", result);
        } else {
            errorResponse(res, "Data tidak ditemukan", 404);
        }
    } catch (error) {
        next(error);
    }
};