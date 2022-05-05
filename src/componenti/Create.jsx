const Create =({crea,input})=>{
 
   return(
   <>
      
       <div>
           <form onSubmit={crea}>
               <label >
                   <input type="text" name="name" ref={input}  />
               </label>
               <input type="submit"  />
           </form>
       </div>
    
    </>
    
    )
       
}

export default Create