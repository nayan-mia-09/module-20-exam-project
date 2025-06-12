

import UserModel from "../model/UserModel.js";
import { EncodeToken } from "../utils/Util.js";


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


export const loginService = async (req, res)=>{
    try {
        let reqBody = req.body;

        let matchingStage = {
            $match: reqBody,
        };
        let projectStage = {
            $project: {
                _id: 1,
                email:1,
               
            },
        };
    let data = await UserModel.aggregate([matchingStage, projectStage]);
    if(data.length > 0){
        let token = EncodeToken(data?.[0]?.email);
        // set cookie
        let options = {
            maxAge: 30 * 24 * 60 * 1000, // 30days
            httpOnly: true,
            sameSite: "none",
            secure: true,
        };
        res.cookie("Token", token, options);
        return{ status: true, token, data: data[0] };
    }else{
        return { status: false, data: data };
    }
    } catch (error) {
        return { status : false, error: error.toString()};
    }
};

