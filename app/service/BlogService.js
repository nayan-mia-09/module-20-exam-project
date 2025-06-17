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

   // Read bolg service

   export const BlogReadService = async (userId) => {
  const blogRead = await BlogModel.find({ owner: userId });
  return { data: blogRead, message: "Successfully fetched data!" };
};


// Blog Update Service 

// export const BlogUpdateService = async (blogId, userId, body) => {
//   const allowedUpdate = ["title", "description", "completed"];

//   const isValidOperation = Object.keys(body).every((item) =>
//     allowedUpdate.includes(item)
//   );

//   if (!isValidOperation) {
//     const error = new Error("Invalid Update Request!");
//     error.statusCode = 400;
//     throw error;
//   }

//   const blog = await BlogModel.findOne({ _id: blogId, owner: userId });

//   if (!blog) {
//     const error = new Error("Blog Not Found!");
//     error.statusCode = 400;
//     throw error;
//   }

//   Object.keys(body).forEach((item) => {
//     blog[item] = body[item];
//   });

//   await blog.save();

//   return { data: blog, message: "Updates blog Successfully!" };
// };