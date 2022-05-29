export const durabilityCalculation_meterType = (daydiff,durability) => {

    let durability_meterType= 0;
    try{
        durability_meterType= durability-2*daydiff;
    }catch(err){
        console.log(err);
    }
     
    return durability_meterType;
  }
  