

import UserModel from "../model/UserModel.js";


export const registerService = async (req, res) => {
    try {
        let reqBody = req.body;
        let email = await reqBody.email.replace(/ +/g, "");

        reqBody.email = email;
        let data = await UserModel.create(reqBody);
        return{ status: true, data};
    } catch (error) {
        return { status: false, error: error.toString()};
        
    }
};