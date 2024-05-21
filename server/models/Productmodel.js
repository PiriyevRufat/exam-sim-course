import mongoose from "mongoose";

const ProductModel =new mongoose.Schema(
    {
        name:{type:String,required:true},
        image:{type:String,required:true},
        title:{type:String,required:true},
        price:{type:Number,required:true},

    },{timestamps:true}
)
export default mongoose.model("Product", ProductModel)