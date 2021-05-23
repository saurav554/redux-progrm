const {createStore, combineReducers} = require('redux')
const InitialState=[]
const tasksReducer = (state=InitialState, action)=>{
    switch (action.type) {
        case 'ADD_TASK':{
            return state.concat(action.payload)
        }
        case 'REMOVE_TASK':{
            return state.filter(task=> task.id !==action.payload)
        }
        default: {
            return [...state]
        }
    }
}

const customersInitialState=[]
const customersReducer = (state=customersInitialState, action)=>{

    switch (action.type) {
        case 'ADD_CUSTOMER':{
            return state.concat(action.payload)
        }
        
        default: {
            return [...state]
        }
    }
}
const configureStore =()=>{
    const store=createStore(combineReducers({
       tasks:tasksReducer,
       customers:customersReducer
    }))
    return store
}
const store = configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())

// action generators || action creators

const addTask=(task)=>{
    return {type: 'ADD_TASK', payload:task}
}

const removeTask = (id) =>{
    return {type: 'REMOVE_TASK', payload:id}
}

const addCustomer=(customer)=>{
    return {type: 'ADD_CUSTOMER', payload:customer}
}
store.dispatch (addTask({ id:1, title: 'Task 1'}))
store.dispatch (addTask({ id:2, title: 'Task 2'}))
store.dispatch (addTask({ id:3, title: 'Task 3'}))
store.dispatch (addCustomer({id:1, name:'saurav', email:'Saurav@gmail.com' }))

store.dispatch (removeTask(1))

//Read=List & show
//list tasks
console.log('Listing Tasks', store.getState().tasks)

//show task
console.log('show task - id 2', store.getState(). tasks.find(task=> task.id==2))