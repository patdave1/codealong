// import React, {useState} from "react";



// function Form() {
//    const[data,setData] =useState({
//         firstname:"",
//         lastname:"",
//         middlename:"",
//         gender:"",
//         dateOfBirth:"",
//         phoneNumber:"",
//         email:"",
//     });

//     const handleChange = (e) => {
//         let name = e.target.name
//         let value = e.target.value

//         setData({ ...data, [name]: value});
//     };
    
//     console.log(data);
//     return(
//     <div className="h-screen bg-gradient-to-br from-fuchsia-400 to-orange-500 flex justify-center items-center">
//       <div className="max-w-2xl w-full bg-white rounded-xl p-10 "> 
//          <form>
//     <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:gap-x-2">  
//       <div>
//     <label htmlFor="FirstName" className="form-label"> First Name</label>
//     <input 
//     type="text" 
//     name="FirstName" 
//     id="FirstName" 
//     className="form-input"
//     value={data.firstName}
//     onChange={handleChange}
//     />
//       </div>
//       <div>
//     <label htmlFor="lastName"> last Name</label>
//     <input 
//     type="text" 
//     name="lastName" 
//     id="lastName " 
//     className="form-input"
//     value={data.lastname}
//     onChange={handleChange}

//     />
//       </div>
//       <div>
//     <label htmlFor="middleName"> middleName </label>
//     <input 
//     type="text" 
//     name="middleName" 
//     id="middleName"
//     className="form-input"
//     value={data.middlename}
//     onChange={handleChange}
//      />
//       </div>
//     </div>


//   <div>
//     <label htmlFor="gender" className="form-label">
//         <input 
//         type="radio"
//          name="gender" 
//          value="male"  
//          id="male"
//          onChange={handleChange}
//          />
//          Male
//     </label>
//     </div> 
// <div>
//     <label htmlFor="female">
//         <input 
//         type="radio" 
//         name="gender" 
//         value="female"  
//         id="female" 
//         onChange={handleChange}
//         /> 
//         Female
//     </label>
// </div>
// <div>
//     <label htmlFor="dateOfBirth">Date of Birth</label>
//     <input name="dateOfbrith" type="date" value={data.dateOfBirth} />
// </div>
// <div>
//     <label htmlFor="phone">Phone Number</label>
//     <input type="phoneNumber" 
//     placeholder="xxx-xxx-xxxx" 
//     value={data.phoneNumber}
//     onChange={handleChange}
//     />
// </div>
// <div>
//     <label htmlFor="email">Email</label>
//     <input
//     type="email"
//     name="email"
//     id="email"
//     placeholder=""
//     value={data.email}
//     onChange={handleChange}
//     />
// </div>
// <div>
//     <button type="submit">Register</button>
// </div>

//          </form>
//       </div>
//     </div>
//     );
    
// }

// export default Form;