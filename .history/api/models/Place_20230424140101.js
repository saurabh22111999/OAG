const mongoose= require('mongoose');
const PlaceSchema=new mongoose.Schema({
    title:String,
    address:String,
    Photos:[String],
    description:String,
    perks:[String],
    extraInfo:String,
    checkIn:Number,
    checkout:Number,
    maxGuests:Number,
});
const PLaceModel=mongoose.model('Place',PlaceSchema);
module.exports=PLaceModel;