const { app } = require("./index");
const PORT = process.env.SERVERPORT || 3000;
app.listen(PORT);
