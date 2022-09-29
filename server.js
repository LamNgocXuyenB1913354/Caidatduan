const app = require("./app");
const congig = require("./app/config");

const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Sever is running on port${PORT}.`);
});