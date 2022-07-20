// import fetch from "node-fetch";

import  axios  from "axios";
import  express  from "express";
import cors from "cors";


const app = express();
app.use(cors());

//process the port IAW server provider


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port:${PORT}`);
})

const URL ="https://api.kanye.rest"



// fetch(URL)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
// .catch((err) =>{
//     console.log(err);
// })
//<server name>.<methodname>(<pathname>, <callback funtion>)
app.get("/kanye_quotes" ,
async (req, res) => {
    try {
            const response = await axios.get(URL)
    res.send(response.data);
    } catch (error){
        console.log(error);
    }
})




