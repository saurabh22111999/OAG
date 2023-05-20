const mongoose= require('mongoose');
const PlaceSchema=new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title:String,
    address:String,
    Photos:[String],
    description:String,
    perks:[String],
    extraInfo:String,
    startbid:Number,
    endbid:Number,
    maxbid:Number,
    price:Number,
});
const PLaceModel=mongoose.model('Place',PlaceSchema);
module.exports=PLaceModel;