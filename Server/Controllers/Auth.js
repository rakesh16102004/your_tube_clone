import users from "../Models/Auth.js"
import jwt from "jsonwebtoken"
// export const login = async (req, res) => {
//     const { email } = req.body;
//     // console.log(email)
//     try {
//         const extinguser = await users.findOne({ email })
//         if (!extinguser) {
//             try {
//                 const newuser = await users.create({ email });
//                 const token = jwt.sign({
//                     email: newuser.email,id:newuser._id
//                 }, process.env.JWT_SECERT, {
//                     expiresIn: "1h"
//                 }
//                 )
//                 res.status(200).json({ result: newuser, token })
//             } catch (error) {
//                 res.status(500).json({ mess: "something went wrong..." })
//                 return
//             }

//         } else {
//             const token = jwt.sign({
//                 email: extinguser.email, id: extinguser._id
//             }, process.env.JWT_SECERT, {
//                 expiresIn: "1h"
//             }
//             )
//             res.status(200).json({ result: extinguser ,token})
//         }
//     } catch (error) {
//         res.status(500).json({ mess: "something went wrong..." })
//         return
//     }
// }

export const login = async (req, res) => {
    const { email } = req.body;
    try {
        const existingUser = await users.findOne({ email });
        if (!existingUser) {
            const newUser = await users.create({ email });
            const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
            
            console.log("New User Created:", newUser); // Debug new user
            res.status(200).json({ result: newUser, token });
        } else {
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
            
            console.log("Existing User:", existingUser); // Debug existing user
            res.status(200).json({ result: existingUser, token });
        }
    } catch (error) {
        console.log("Login Error:", error); // Add error handling
        res.status(500).json({ mess: "Something went wrong..." });
    }
};
