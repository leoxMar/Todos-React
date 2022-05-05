const Delete =({id,action})=>{
    return(
        <>
        <button onClick={()=>action(id)}>eliminami</button>
        </>
    )
}
export default Delete