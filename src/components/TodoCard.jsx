export function TodoCard(props){
    const {todo,HandleDeleteTodo,todoIndex,HandleTodoComplete} = props;

    return (
        <div className="card todo-item">
          <p>{todo.input}</p>
          <div className="todo-buttons">
            <button 
            onClick={()=>{
              HandleTodoComplete(todoIndex)
            }}
             disabled={todo.complete}>Done</button>
            <button  onClick={()=>{
              HandleDeleteTodo(todoIndex)
             }}>Delete</button>
          </div>
        </div>
    )
}