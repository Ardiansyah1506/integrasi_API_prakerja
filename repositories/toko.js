import dbPool from "../utils/db.js";

export const createData = (name, item_name, pcs, price) => {
  let created_at = new Date();
  let total_price = pcs * price;
  const sql =
  "INSERT INTO toko ( name, item_name, pcs, price, total_price, created_at) VALUE(?, ?, ?, ?, ?, ?)";
  const values = [name, item_name, pcs, price, total_price, created_at];
  const result = dbPool.query(sql, values);

  return result;
};

export const getData = () => {
  const sql =
    "SELECT user_id, name, item_name, pcs, price, total_price, created_at FROM toko";
  return dbPool.query(sql);
};

export const getDataItem = (item_name) => {
  const sql = "SELECT item_name, pcs,price,total_price FROM toko WHERE item_name = ?";
  const values = [item_name];
  return dbPool.query(sql, values)
}


export const getTotalPrice = () => {
  const sql = "SELECT SUM(total_price) AS total_price FROM toko";
  return dbPool.query(sql);
};


export const deleteData = (user_id) => {
  const sql = "DELETE FROM toko WHERE user_id = ?";
  const values = [user_id];
  const result = dbPool.query(sql, values);
  return result 
};

export const updateData = (
  name,
  item_name,
  pcs,
  price,
  total_price,
  user_id
) => {
  const sql = `
UPDATE toko
SET name = ?, item_name = ?, pcs = ?, price = ?, total_price = ?
WHERE user_id = ?;
`;
  const values = [name, item_name, pcs, price, total_price, user_id];

  const result = dbPool.query(sql, values);
  return result;
};
