import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "test",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `price`, `desc`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.price, req.body.desc, "cover.jpg"];
  console.log(values);

  db.query(q, [values], (err, data) => {
    console.log(values);
    if (err) return res.json(err);
    return res.json({
      status: 200,
      message: "Book has been created successfully",
      title: req.body.title,
      desc: req.body.desc,
      cover: "cover-image",
    });
  });
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM books WHERE id =?";
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been deleted successfully");
  });
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const q = "SELECT * FROM books where id =?";
  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const q = "UPDATE books SET `title`=?, `price`=?, `desc`=? WHERE id =?";
  const values = [req.body.title, req.body.price, req.body.desc];
  db.query(q, [...values, id], (err, data) => {
    console.log([...values, id]);
    if (err) return res.json(err);
    return res.json("Book has been updated successfully");
  });
});

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
