import BlogModal from "./modal.js";


class BlogFunction {

    static addBlog = async (req, res) => {
        try {

            const { title, author, description, content, category, tag } = req.body;
            const pictre = req.files
            const image = pictre[0]

            const date = Date.now();

            const doc = new BlogModal({
                Title: title,
                Author: author,
                Description: description,
                Content: content,
                Image: image,
                Data: date,
                Category: category,
                Tag: tag 
            })
            const result = await doc.save();
            res.send(result);
        } catch (error) {
            console.log(error)
        }
    }

    static getBlog = async (req, res) => {
        try {
            const result = await BlogModal.find();
            res.send(result);
        } catch (error) {
            res.send(error)
        }
    }

}

export default BlogFunction