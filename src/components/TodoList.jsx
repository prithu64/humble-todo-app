import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const {todos ,selectedTab} = props
    

    const filteredList = selectedTab === 'All'? todos : selectedTab === 'Completed'? todos.filter(val => val.complete):todos.filter(val => !val.complete)

    return (
        <>
        {
            filteredList.map((todo,todoIndex)=>{
                return(
                 <TodoCard 
                 key={todoIndex} 
                 todoIndex = {todos.findIndex(val=>val.input == todo.input)}
                 todo={todo} 
                 {...props}/>
                )
            })
        }
        </>
    )
}