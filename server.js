const usersRouter = require("./routes/users");
const express = require("express");
const port =  process.env.PORT || 8080;
const app = express();

app.use("/users", usersRouter);

app.get("/", async (request, response) => {
    return response.status(200).json("api is working");
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));