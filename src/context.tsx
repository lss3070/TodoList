import React,{createContext,Dispatch, useReducer,useContext} from "react";



export type Todo ={
    user:string,
    loggedIn:boolean;
}

// type TodosState= Todo[];

export const TodosStateContext = createContext<Todo>({} as Todo);



type Action =
  | { type: 'Click'; }

  type TodosDispatch= Dispatch<Action>;

  const TodosDispatchContext = createContext<TodosDispatch | undefined>(
    undefined
  );

  function todosReducer(state: Todo, action: Action): Todo {
    switch (action.type) {
      case"Click":
          state.loggedIn=true;
        return state;
      default:
        throw new Error('Unhandled action');
    }
  }

  export function useTodosDispatch() {
    console.log("!!")
    const dispatch = useContext(TodosDispatchContext);
    if (!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
  }

export function TodosContextProvider({children}:{children:React.ReactNode}){
    const[todos,dispatch]=useReducer(todosReducer,{
      user:"SongSeop",
      loggedIn:false
    }
);






return(
    <TodosDispatchContext.Provider value={dispatch}>
    <TodosStateContext.Provider value={todos}>
      {children}
    </TodosStateContext.Provider>
  </TodosDispatchContext.Provider>
)
} 
// React.FC<{}>=(props)=>{
//     const [state, setState] = React.useState<IState[]>([{name:"SongSeop"}])
//     return(
//         <UserContext.Provider value={state,setState}>
//             {props.children}
//         </UserContext.Provider>
//     )
// }
   

