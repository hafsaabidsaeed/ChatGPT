import express, {Express} from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";


const app: Express = express();
const server = http.createServer(app);

//these are the configurations that we are doing yani k what will my app require to perform function
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");

//configure our env file
dotenv.config();

//try and catch block to start the server
try{
const port = app.get("PORT");
server.listen(port, (): void => {
console.log("Server is listening");
});
}
catch(error){
console.log(error);
}


export default server;