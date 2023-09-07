
import User from '../schema/user-schema.js';


export const addUser = async(request, respond) => {
    const user = request.body;

    const newUser = new User(user);

    try{
        await newUser.save();
        respond.status(201).json(newUser);
    }catch(err){
        respond.status(409).json({message: err.message});
    }

}   