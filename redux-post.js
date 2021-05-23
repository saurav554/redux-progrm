//posts-[{id:1, title:'js', published: false}]
//CRUD
// posts to be store in redux

const {createStore, combineReducers}= require('redux') // 1st step to create
const postsInitialState=[]
const postsReducer=(state=postsInitialState,action)=>{
    switch (action.type){
        case'ADD_POST':{
            return state.concat(action.payload)
}
         case 'REMOVE_POST':{
            return state.filter(post=> post.id !==action.payload) 
         }

         case 'UPDATE_POST':{
            return state.map(post=> {
                if (post.id === action.payload.id)
                {
                    return Object.assign({},post,action.payload.obj)
         }
         else
         {
             return Object.assign ({}, post)
         }
        })
    }
    default:{
        return [].concat(state)
    }
    }
}
const configureStore=()=>{ //2nd step
    const store=createStore (combineReducers({
    posts:postsReducer

    }))
    return store
}
const store =configureStore()
console.log (store.getState())


store.subscribe(()=>{//1st time to see the data
    console.log (store.getState())
})

//action generator / action creator

const addPost=(post)=>{
    return{type:'ADD_POST',payload:post}
}


const removePost=(id)=>{
    return{type:'REMOVE_POST',payload:id}
}


const updatePost=(id,obj)=>{
    return{type:'UPDATE_POST',payload:{id,obj}}
}
const newPost ={id:1,title:'js', published:false}
const post2 ={id:2,title:'mern', published:false}

store.dispatch (addPost(newPost))
store.dispatch (addPost(post2))

//remove post
// store.dispatch (removePost(2))
store.dispatch (updatePost(1,{title:'js is awesome', published:true}))