import models from "../models/movie-ticket.models.js"


async function POST(req, res) {
    try{
    const { movie, seats, slot}=req.body
    if(!movie || !seats || !slot){
        return res.json({
            status:400, 
            message:"one of the details is missing",
        })
    }
    const registerDoc= await models.create({ 
        movie:movie,
        seats:seats,
        slot:slot
    })
    return res.json({
        status:200, 
            message:"successfully Registered ",
    })
    }

    catch (error) {
console.log(error);
return res.json({
       status:500, 
       message:"unable to store ticket details",
});
    }
}

async function GET(req, res) {
    try{
      const movies=await models.find({}).sort({_id:-1}).limit(1)
      if(movies.length===0){
        return res.json({
            status:404, 
            message:"no previous booking found",
     });  
      }
      return res.json({
        status:200, 
        message:"successfully Got",
        data:movies
      })
    }

    catch (error){
        console.log(error);
        return res.json({
               status:500, 
               message:"unable to get the tickets detalis",
        });
            }
    
}
 export { POST, GET};