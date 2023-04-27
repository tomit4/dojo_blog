const fs = require('fs')
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./data/db.json");

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "data")));
app.use(express.json());

const port = process.env.PORT || 8000;

app.get("/blogs/:id?", (req, res) => {
  const { id } = req.params;
  res.header("Content-Type", "application/json");
  if (id) {
    const returnVal = data.blogs.filter((blog) => blog.id == id);
    res.json(returnVal[0]);
  } else {
    res.json(data.blogs);
  }
});

app.post("/blogs/", (req, res) => {
    const data = fs.readFileSync('./data/db.json')
    const json = JSON.parse(data)
    let id = 0
    json.blogs.forEach(blog => {
        if (id < Number(blog.id)) {
            id = Number(blog.id)
        }
    })
    req.body.id = id + 1
    json.blogs.push(req.body)
    fs.writeFileSync('./data/db.json', JSON.stringify(json))
    res.status(200)
    res.send({msg: 'success'})
})

app.delete('/blogs/:id?', (req, res) => {
    let { id } = req.params
    id = Number(id)
    const data = fs.readFileSync('./data/db.json')
    const json = JSON.parse(data)
    if (id) {
        const results = () => json.blogs.filter(blog => {
            return blog.id !== id
        })
        json.blogs = results()
        fs.writeFileSync('./data/db.json', JSON.stringify(json))
        res.status(200)
        res.send({msg: 'success'})
    } else {
        res.status(500)
        res.send({msg: 'error'})
    }
})

app.listen(port, () => {
  console.log(`Serving JSON on port: ${port}`);
});
