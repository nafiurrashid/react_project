export const rentalFeeCalculation = (daydiff,price) => {

   let rentalFee= 0;
   try{
    rentalFee= daydiff*price
   }catch(err){
    console.log(err)
   }
    return rentalFee;
  }
