//! Register controller

import { loginService, registerService } from "../service/UserService.js"

export const registerController = async (req, res) => {
    let result = await registerService(req, res);
    return res.json(result);
}

 //! Login controller

export const loginController = async (req, res) => {
    let result = await loginService(req, res);
    return res.json(result);
}