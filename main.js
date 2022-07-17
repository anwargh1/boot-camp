


const twit = function(){ 
    let data = $("#input").val();
    $("#input").val("");
   tweeter1.addPost1(data); 
    renderer1.renderPosts(tweeter1.getPosts1());

}

 const removePost = function(){ 
    let remove = $(this).closest("#post").find("#h2").text(); 
   tweeter1.removePost1(findTheDiv(remove)); 
    renderer1.renderPosts(tweeter1. getPosts1());
} 

const createComment = function() { 
    let idComment = findTheDiv($(this).closest("div").find("h1").text()); 
    let text = $(this).closest("div").find("#inp").val(); 
    tweeter1.addComment1(idComment , text); 
    renderer1.renderPosts(tweeter1.getPosts1());
}


 const removeComment = function(){

     let postId = findTheDiv($(this).closest("#post").find("#h2").text());
      let msg = ($(this).closest(".anw").find("#an").text());
       let commentId = findTheComment(postId,msg); 
       tweeter1.removeComment(postId , commentId); 
       renderer1.renderPosts(tweeter1.getPosts1());} 


      const findTheComment = function(postsId ,text){
        let posts = tweeter1.getPosts1(); 
         let idd;
          for(let post in posts) { 
           if(posts[post].id==postsId){
                for(let j in posts[post].comments) {
                    if(posts[post].comments[post].text==text) {
                         idd =posts[post].comments[j].idd; 
                         return idd; 
                      } 
                   }
                } 
                }
          }

             const findTheDiv = function(temp){
                 let posts = tweeter1.getPosts1();
                  let id = 0; 
                  for(let post of posts) { 
                    if(post.text==temp) {
                         id=post.id;
                          break; 
                    } 
               } 
               return (id);
           } 
           const tweeter1 = Tweeter()
      const renderer1 = Renderer()
         renderer1.renderPosts(tweeter1.getPosts1())
            
           $("button").click(twit);
            $("body").on("click","#del",removePost);
            $("body").on("click","#add",createComment);
           $("body").on("click","#delcom",removeComment);

            

