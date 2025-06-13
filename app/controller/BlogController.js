

// Create BlogController

import { CreateBlogService } from "../service/BlogService.js";

export const CreateBlogController = async (req, res) => {
  const result = await CreateBlogService(req, res);
  return res.status(200).json(result);
};