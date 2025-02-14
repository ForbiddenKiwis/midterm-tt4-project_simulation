const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path')

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());

app.get("/api", async (req, res) => {
  res.status(200).json({ message: "API is running" });
});

app.listen(process.env.API_PORT, () => {
  console.log(`The server is running, PORT: ${process.env.API_PORT}`);
});

document.addEventListener("DOMContentLoaded", function(){
  const students = [
    { code: "5001", name: "John Doe", course: "C# Asp.Net Core", dob: "2000-11-11" },
    { code: "5002", name: "Doe Hohn", course: "Swift", dob: "1999-11-01"},
    { code: "5003", name: "Kiwis Freeman", course: "Android", dob: "1696-12-30"},
    { code: "S004", name: "David Lee", course: "Biology", dob: "2002-11-25" },
    { code: "S005", name: "Emma Watson", course: "Physics", dob: "2003-06-30" }
  ];

  const tableBody = document.getElementById("tr");

  students.forEach(student => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.code}</td>
      <td>${student.name}</td>
      <td>${student.course}</td>
      <td>${student.dob}</td>
      <td>
        <button class="btn btn-warning btn-sm">Edit</button>
        <button class="btn btn-danger btn-sm">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
});