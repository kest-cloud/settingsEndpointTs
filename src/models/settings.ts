export{}
import { IncomingMessage } from 'http';
import mongoose  from 'mongoose';

 const SetttingsSchema:any = new mongoose.Schema({
     image: {type: String},
     doors: {type: String},
     color: {type: String},
     type: {type: String},
     capacity: {type: String},
     private: {type: String},
     vehicleMake: {type: String},
     vehicleModel: {type: String},
     manufactureYear: { type: String},
     vehiclePlateNum: {type: String},

  },
  
);

SetttingsSchema.pre('save', async function(next) {
 const Settings:any = SetttingsSchema;
  this.settings = {
        image: Settings.image,
        doors: Settings.doors,
        color: Settings.color,
        type: Settings.type,
        capacity: Settings.capacity,
        private: Settings.provate,
        vehicleMake: Settings.vehicleMake,
        vehicleModel: Settings.vehicleModel,
        manufacturerYear: Settings.manufacturerYear,
        vehiclePlateNum: Settings.vehiclePlateNum,
    
  }; 
  
});

const Settings  = mongoose.model('Settings', SetttingsSchema);

export default Settings ;


//export { 'Location', LocationSchema };