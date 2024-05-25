export const validate = (data,type) =>{
    const errors ={};
   
    if(!data.email){
        errors.email="Emaile is required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
         errors.email="Email adress is invalid"
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password="Password is required"
    }else if(data.password.length<6){
        errors.password="Password needs to be 6 character or more"
    }else{
       delete errors.password 
    }
  
 if(type==="signup"){
    if(!data.name.trim()){
        errors.name="Username required" 
    }else{
        delete errors.name
    }
    if(!data.confirmPassword){
        errors.confirmPassword="Confirm the password"
     }else if(data.confirmPassword !== data.password){
         errors.confirmPassword="Password doesnot match"
     }else{
         delete errors.confirmPassword
     }
     if(!data.isAccepted){
     errors.isAccepted="Accept our regulation"
     }else{
      delete errors.isAccepted
     }

 }
    return errors;
}