import express from "express";
import path from "path";
import {WORKSDATA} from "./mocks/WorksData"

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/statics',express.static(__dirname+'/assets'))
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
app.use(express.static(path.join(__dirname, '../build')));
app.get("/api/works", (req, res) => {
    res.send(WORKSDATA);
});