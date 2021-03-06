const mongoose=require('mongoose');

const dateitemSchema=mongoose.Schema({
   
        name:{
            type:String
        },
        latitude:{
            type:String
        },
        longitude:{
            type:String
        },
        vicinity:{
            type:String
        },
        photoRef:{
            type:String
        },        
       
})

dateitemSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

dateitemSchema.set('toJSON',{
    virtuals:true,
})

module.exports=mongoose.model('datesItems',dateitemSchema)
