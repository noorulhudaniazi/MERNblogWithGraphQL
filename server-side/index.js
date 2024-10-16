import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import BlogFunction from './controller.js';
const port = 4000
const db_URl = "mongodb://localhost:27017";


const app = express();

app.use(express.json())
app.use(cors())

app.get('/getBlogs', BlogFunction.getBlog)
app.post('/addBlog', BlogFunction.addBlog)

const connectdatabase = async(databaseURL) => {
    try {
        const dboptions = {
            dbName: 'GitGraphQL'
        }
        await mongoose.connect(databaseURL, dboptions);
        console.log("Connected Successfully");
    } catch (error) {
        console.log(error);
    }
}

connectdatabase(db_URl);


app.listen(port, ()=> {
    console.log(`App listening at the Port http://localhost:${port}`)
})