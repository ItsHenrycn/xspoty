
import express from 'express'; // Remove the curly braces {}

const PORT = 8000;
const app = express();

app.listen(PORT, () => {
    console.log("Listening to port: ", PORT);
});