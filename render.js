

const Renderer =function(){

    const renderPosts = function(posts)
    {
    
        const source = $('#temp').html();
        const template = Handlebars.compile(source);
         $("#posts").empty();
       let newhtml=template({post:posts});
         $("#posts").append(newhtml);
  
     }
          return {
             renderPosts : renderPosts
      }
  }