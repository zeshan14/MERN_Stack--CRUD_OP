import mongoose from "mongoose"

const Connection = async() => {
    const URL = `mongodb://zeeshan14:zeeshan14@ac-7hyzh5d-shard-00-00.ps2cniw.mongodb.net:27017,ac-7hyzh5d-shard-00-01.ps2cniw.mongodb.net:27017,ac-7hyzh5d-shard-00-02.ps2cniw.mongodb.net:27017/?ssl=true&replicaSet=atlas-qvw34a-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewURLParser: true });
        console.log("Connect")
    }catch(error){
        console.log('Error while loading', error)
    }
}

export default Connection;