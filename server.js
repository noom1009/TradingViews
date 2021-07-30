const app = require("./index");
const env = require("./configs/env");

const port = process.env.PORT || env.srvPort;
app.listen(port, () => console.log(`Server is running on port ${port}!`));