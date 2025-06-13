import BlogModel from "../model/BlogModel.js";


//! Create blog service
   export const CreateBlogService = async (req, res)=> {
    try {

        let reqBody = req.body;

        let data = await BlogModel.create(reqBody);

        return {status: true, data: data}
    } catch (error) {
     return { status: false, error: error.toString() };   
    }
   }
