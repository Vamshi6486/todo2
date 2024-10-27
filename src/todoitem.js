

export default function Todoitem({title,descrip,isdone,key,ondelete,ondone}){
    return(
         <div className="items">
            <div className="title">
                   <h2>{title}</h2>
            </div>
            <div className="descrip">
            {descrip}
            </div>
            <div className="buttons">
                <button className="delete" onClick={ondelete}>Delete</button>
                <button className="done"onClick={ondone}>Done</button>
            </div>
         </div>
    );
}