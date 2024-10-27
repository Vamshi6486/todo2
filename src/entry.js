import { useState } from 'react';
import Todoitem from './todoitem.js';

function Entry() {
    const [title, setTitle] = useState("");
    const [descrip, setDescrip] = useState("");
    const [working, setWorking] = useState([]);
    
    function add() {
        if (title &&descrip){
        setWorking([...working, { title: title, descrip: descrip, isdone: false }]);
        setTitle("");
        setDescrip("");}
    }
    
    function deletee(index) {
        setWorking(working.filter((_, i) => i !== index));
    }

    function donee(index) {
        setWorking(working.map((todo, i) => i === index ? { ...todo, isdone: true } : todo));
    }
    
    return (
        <>
            <div className="entry-inner">
                <input 
                    type="text" 
                    className="box1" 
                    placeholder="enter title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <input 
                    type="text" 
                    className="box2" 
                    placeholder="enter description" 
                    value={descrip}
                    onChange={(e) => setDescrip(e.target.value)} 
                />
                <button className="box3" onClick={add}>ADD</button>
            </div>

            <div className="twodiv">
                {/* Working Tasks Division */}
                <div className="workingd">
                    <h2>Working</h2>
                    {working.filter(todo => !todo.isdone).map((todo, index) => (
                        <Todoitem 
                            key={index} 
                            title={todo.title}
                            descrip={todo.descrip}
                            isdone={todo.isdone}
                            ondelete={() => deletee(index)}
                            ondone={() => donee(index)}
                        />
                    ))}
                </div>

                {/* Done Tasks Division */}
                <div className="doned">
                    <h2>Done</h2>
                    {working.filter(todo => todo.isdone).map((todo, index) => (
                        <Todoitem 
                            key={index} 
                            title={todo.title}
                            descrip={todo.descrip}
                            isdone={todo.isdone}
                            ondelete={() => deletee(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Entry;
