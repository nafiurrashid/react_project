export const meterEstimationCalculation = (daydiff) => {

    let meterEstimation= 0;   
    try{
        meterEstimation=daydiff*10;
    }catch(err){
        console.log(err);
    }
  
    return meterEstimation;
  }
  