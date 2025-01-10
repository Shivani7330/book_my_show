import mongoose from "mongoose";

const {Schema}=mongoose;

const ticketSchema= new Schema({
    movie: Schema.Types.String,
    slot: Schema.Types.String,
    seats: {
        A1: Schema.Types.Number,
        A2: Schema.Types.Number,
        A3: Schema.Types.Number,
        A4: Schema.Types.Number,
        D1: Schema.Types.Number,
        D2: Schema.Types.Number
    }
},
{
    timestamps:true
}
)
const ticketModel= new mongoose.model("tickets",ticketSchema);

export default ticketModel;