

// Create Blog Controller

import { BlogReadService, CreateBlogService } from "../service/BlogService.js";

export const CreateBlogController = async (req, res) => {
  const result = await CreateBlogService(req, res);
  return res.status(200).json(result);
};


// Read Blog Controller

export const BlogReadController = async (req, res) => {
  try {
    const result = await BlogReadService(req.user?._id);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || "Something Went Wrong!" });
  }
};

// Blog Update Controller

// export const BlogUpdateController = async (req, res) => {
//   try {
//     const result = await BlogUpdateService(req.params.id, req.user._id, req.body);
  
//     return res.status(201).json(result);
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(error.statusCode || 500)
//       .json({ message: error.message || "Something Went Wrong!" });
//   }
// };