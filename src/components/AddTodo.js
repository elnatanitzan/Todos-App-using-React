import { useState } from 'react'
export default function AddTodo({ addTodo }) {

    const [title, setTitle] = useState(null)
    const [text, setText] = useState(null)
    const [show_input, setShowInput] = useState(false)
 
    const handleSubmit = (e) => {
        setShowInput(!show_input);
        e.preventDefault();
        addTodo({ 
            title, 
            text, 
            done: false, 
            id: Math.random().toString(36).substr(2, 9), 
            full_display: false, 
            date: new Date().toLocaleDateString(), 
            time: new Date().toLocaleTimeString()
        })
        e.target.reset()   
    }

    return (
        <div>
            { show_input === false &&
                <i className="fas fa-plus-circle"
                onClick={() => setTimeout(() => setShowInput( !show_input ), 200) }>
                </i>
            } 
            {show_input === true &&
                    <>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title"></label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} id="title" maxLength="19" placeholder="Title..."/>
                        <label htmlFor="text"></label>
                        <input className="note" type="text"  onChange={(e) => setText(e.target.value)} id="text" maxLength="300" required placeholder="task..."/>
                        <button className="fas fa-plus-circle"></button>
                    </form>
                    </>
            }  
        </div>
    )
}