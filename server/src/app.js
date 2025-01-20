import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import router from './routes/movies.route.js';



dotenv.config();
app.use(cors({origin:process.env.ALLOWED_ORIGIN, credentials:true} )   )
const app = express();

app.use(express.json());
app.use("/api", router);

export default app;