const {createStore,combineReducers}=require('redux')
const taskInitialState=[{id:1, title: 'task1'}]
const taskReducer=(state=taskInitialState,action)=>{
    switch(action.type)
    {
       
        default:{
            return [].concat(state)
            //return [...state]
        }
    }
}

const configureStore=()=>{
    const store=createStore(combineReducers({
        tasks:taskReducer,
        
    }))
    return store
}
const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())

