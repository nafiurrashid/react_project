export const durabilityCalculation_plainType = (daydiff,durability,mileage) => {


    let durability_plainType= 0;
    try{
      durability_plainType= durability-2*daydiff-(mileage%10);
    }catch(err){
      console.log(err);
    }

 
    return durability_plainType;
  }
  