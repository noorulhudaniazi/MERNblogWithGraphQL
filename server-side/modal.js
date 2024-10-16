import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema ({
    Title : {type: String, require: true},
    Author : {type: String, require: true},
    Description : {type: String, require: true},
    Content : {type: String, require: true},
    Image : {type: String, require: true},
    Date : {type: String, require: true},
    Category : {type: Array},
    Tag : {type: Array},
})

const BlogModal = mongoose.model("Blog Data", BlogSchema)

export default BlogModal;