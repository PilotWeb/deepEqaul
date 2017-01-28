function deepEqual(obj1, obj2){
 if(typeof obj1 == 'object' && typeof obj2 == 'object' && obj1 !==null && obj2!==null){
  for(var value in obj2){
    console.log(value);
    if(!(value in obj1)) return false;    
  }
  for(var value in obj1){
     console.log(value);
     if(value in obj2){
     if(deepEqual(obj1[value], obj2[value])){}
       else{return false;};
     }else{
       return false;
     }     
    }
   return true;
 }else if(obj1 === obj2){
  return true; 
 } else{
  return false;
 }
}