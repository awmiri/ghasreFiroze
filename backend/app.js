import express from "express"
import morgan from "morgan"
import cors from "cors"
import path from 'path'
import { catchAsync, catchError } from "vanta-api"
import adminRouter from "./Routes/adminRouter.js"
import { get } from "http"


export const __dirname = path.resolve()


const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({ origin: '*' }))

app.use(
    "/media",
    express.static("Public/media")
);

// app.get('/', (req, res) => {
//     res.json({ message: 'Server is running!' });
// });

app.use('/api/v1/admin', adminRouter)

app.use(catchAsync)
app.use(catchError)
export default app 
