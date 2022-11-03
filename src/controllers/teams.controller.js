import { pool } from "./../db.js";

export const getTeams = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM teams")
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong"
    })
  }
}

export const getTeam = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM teams WHERE id=?", [req.params.id])
    if (rows.length <= 0) return res.status(404).json({
      message: "Team not found"
    })
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong"
    })
  }
}

export const createTeam = async (req, res) => {
  const { name, logo } = req.body;
  try {
    const [rows] = await pool.query("INSERT INTO teams (name,logo) VALUES (?,?)", [name, logo])
    res.send({
      id: rows.insertId,
      name,
      logo
    })
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong"
    })
  }
}

export const updateTeam = async (req, res) => {
  const { id } = req.params
  const { name, logo } = req.body
  try {
    const [result] = await pool.query("UPDATE teams SET name = IFNULL(?,name),logo = IFNULL(?,logo) WHERE id = ?", [name, logo, id])
    console.log(result);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Team not found"
      })
    }
    const [rows] = await pool.query("SELECT * FROM teams WHERE id = ?", [id])
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong"
    })
  }
}

export const deleteTeam = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM teams WHERE id=?;', [req.params.id]);

    if (result.affectedRows <= 0) return res.status(404).json({
      message: "Team not found"
    })
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong"
    })
  }
};