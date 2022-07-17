const Tweeter = function(){
    let _posts =[
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
    ];



 let postIdCounter = _posts.length;
 console.log(postIdCounter)

 let commentIdCounter =_posts[0].comments.length + _posts[1].comments.length ;
 console.log(commentIdCounter);

 const getPosts = function(){
      return _posts

 }

 const addPost = function(text){

    let newPost ={
        text : text ,
        id : "p" + (postIdCounter+1) ,
        comments : []

    }
    postIdCounter++;
    _posts.push(newPost );

    
 }

 const removePost = function(postId){
    let index =0;
     for(let post in _posts)
     {
         if(_posts[post].id === postId)
         {
            index = post ;
         }
     }
   postIdCounter--;
     _posts.splice(index,1);
 }

 const addComment = function( textComment , postID ){
  
    for (let com in _posts){
        if (_posts[com].id == postID)
        {
          _posts[com].comments.push({
           
            id : "c"+( commentIdCounter+1),
           text : textComment
          });
         commentIdCounter++;
        }
        }
   
  }
const removeComment = function(postID ,commentID ){
    let index = 0 ;
    for(let com1 in _posts){
         if(_posts[com1].id == postID)
     {
         for( let com2 in _posts[com1].comments)
         {
             if( _posts[com1].comments[com2].id == commentID )
             {
                index= com2 ; 
             }
         }     
          
          _posts[com1].comments.splice(index , 1);
            commentIdCounter--;
     }
    }
 }
 return {
    getPosts1 : getPosts ,
    addPost1 :addPost ,
    removePost1 : removePost ,
    addComment1 : addComment,
    removeComment :removeComment 

 }
};
const tweeter = Tweeter()
//tweeter.addPost1("This is my own post!")
//console.log(tweeter.getPosts1())

//tweeter.removePost1("p1")
//console.log(tweeter.getPosts1())

//tweeter.addComment1("Damn straight it is!", "p3")
//console.log(tweeter.getPosts1())

//tweeter.addComment1("Second the best!", "p2")
//console.log(tweeter.getPosts1())
tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts1())
