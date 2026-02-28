import pool from "../config/database.js";

export const createSubscriber = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO subscribers (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );

  return result.rows[0];
};

export const getAllSubscribers = async () => {
  const result = await pool.query("SELECT * FROM subscribers");
  return result.rows;
};