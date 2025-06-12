//! Register controller

import { registerService } from "../service/UserService.js"

export const registerController = async (req, res) => {
    let result = await registerService(req, res);
    return res.json(result);
}