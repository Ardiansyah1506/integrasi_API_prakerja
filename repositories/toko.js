import dbPool from "../utils/db.js";

export const createData = (name, item_name, pcs, price) => {
  let created_at = new Date();
  let total_price = pcs * price;
  const sql =
    "INSERT INTO toko_buah ( name, item_name, pcs, price, total_price, created_at) VALUE(?, ?, ?, ?, ?, ?)";
  const values = [name, item_name, pcs, price, total_price, created_at];
  const result = dbPool.query(sql, values);

  return result;
};

export const getData = () => {
  const sql =
    "SELECT user_id, name, item_name, pcs, price, total_price, created_at FROM toko_buah";
  return dbPool.query(sql);
};

export const getDataDescByPcs = () => {
  const sql =
    "SELECT item_name, pcs, price, total_price FROM toko_buah ORDER BY pcs DESC";
  return dbPool.query(sql);
};

export const getDataItem = (item_name) => {
  const sql =
    "SELECT item_name, pcs,price,total_price FROM toko_buah WHERE item_name = ?";
  const values = [item_name];
  return dbPool.query(sql, values);
};

export const getTotalPrice = () => {
  const sql = "SELECT SUM(total_price) AS total_price FROM toko_buah";
  return dbPool.query(sql);
};

export const getItemsPrice = (item_name) => {
  const sql =
    "SELECT item_name, SUM(pcs) AS total_pcs, SUM(total_price) AS total_price FROM toko_buah WHERE item_name = ? GROUP BY item_name";
  const values = [item_name];
  return dbPool.query(sql, values);
};

export const deleteData = (user_id) => {
  const sql = "DELETE FROM toko_buah WHERE user_id = ?";
  const values = [user_id];
  const result = dbPool.query(sql, values);
  return result;
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
UPDATE toko_buah
SET name = ?, item_name = ?, pcs = ?, price = ?, total_price = ?
WHERE user_id = ?;
`;
  const values = [name, item_name, pcs, price, total_price, user_id];

  const result = dbPool.query(sql, values);
  return result;
};
