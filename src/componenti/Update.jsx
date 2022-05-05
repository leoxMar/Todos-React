const Update =({id,action})=>
{
    
    return(
        <>
        <button onClick={()=>action(id)}>modifica</button>
        
        </>
    )
}
export default Update