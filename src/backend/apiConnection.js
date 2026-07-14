import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();

app.use(cors());
app.use(express.json());

const { Pool } = pg;

const db = new Pool({
    user: "postgres",
    host: "localhost",
    database: "spotify",
    password: "010902",
    port: 5432,
});

// ===== API =====

app.get("/library", async (req, res) => {
    try {
        const result = await db.query(
            "SELECT * FROM library ORDER BY id"
        );

        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json(err.message);
    }
});

// ===== Server =====

app.listen(3001, () => {
    console.log("API running on http://localhost:3001/library");
});