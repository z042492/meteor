var require = meteorInstall({"client":{"templates":{"posts":{"template.post_item.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/templates/posts/template.post_item.js                                           //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
                                                                                          // 1
Template.__checkName("postItem");                                                         // 2
Template["postItem"] = new Template("Template.postItem", (function() {                    // 3
  var view = this;                                                                        // 4
  return HTML.DIV({                                                                       // 5
    "class": "post"                                                                       // 6
  }, "\n    ", HTML.DIV({                                                                 // 7
    "class": "post-content"                                                               // 8
  }, "\n      ", HTML.H3(HTML.A({                                                         // 9
    href: function() {                                                                    // 10
      return Spacebars.mustache(view.lookup("url"));                                      // 11
    }                                                                                     // 12
  }, Blaze.View("lookup:title", function() {                                              // 13
    return Spacebars.mustache(view.lookup("title"));                                      // 14
  })), HTML.SPAN(Blaze.View("lookup:domain", function() {                                 // 15
    return Spacebars.mustache(view.lookup("domain"));                                     // 16
  }))), "\n    "), "\n  ");                                                               // 17
}));                                                                                      // 18
                                                                                          // 19
////////////////////////////////////////////////////////////////////////////////////////////

},"template.posts_list.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/templates/posts/template.posts_list.js                                          //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
                                                                                          // 1
Template.__checkName("postsList");                                                        // 2
Template["postsList"] = new Template("Template.postsList", (function() {                  // 3
  var view = this;                                                                        // 4
  return HTML.DIV({                                                                       // 5
    "class": "posts"                                                                      // 6
  }, "\n    ", Blaze.Each(function() {                                                    // 7
    return Spacebars.call(view.lookup("posts"));                                          // 8
  }, function() {                                                                         // 9
    return [ "\n      ", Spacebars.include(view.lookupTemplate("postItem")), "\n    " ];  // 10
  }), "\n  ");                                                                            // 11
}));                                                                                      // 12
                                                                                          // 13
////////////////////////////////////////////////////////////////////////////////////////////

},"post_item.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/templates/posts/post_item.js                                                    //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
Template.postItem.helpers({                                                               // 1
	domain: function () {                                                                    // 2
		function domain() {                                                                     // 2
			var a = document.createElement('a');                                                   // 3
			a.href = this.url;                                                                     // 4
			return a.hostname;                                                                     // 5
		}                                                                                       // 6
                                                                                          //
		return domain;                                                                          // 2
	}()                                                                                      // 2
});                                                                                       // 1
////////////////////////////////////////////////////////////////////////////////////////////

},"posts_list.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/templates/posts/posts_list.js                                                   //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
var postsData = [{                                                                        // 1
	title: 'Discover Meteor',                                                                // 3
	url: 'http://wiki.jikexueyuan.com/project/discover-meteor/'                              // 4
}, {                                                                                      // 2
	title: 'Meteor Tutorial',                                                                // 7
	url: 'https://www.meteor.com/tutorials/blaze/creating-an-app'                            // 8
}, {                                                                                      // 6
	title: 'Baidu',                                                                          // 11
	url: 'http://www.baidu.com'                                                              // 12
}];                                                                                       // 10
                                                                                          //
Template.postsList.helpers({                                                              // 16
	posts: postsData                                                                         // 17
});                                                                                       // 16
////////////////////////////////////////////////////////////////////////////////////////////

}},"template.home.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// client/templates/template.home.js                                                      //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
                                                                                          // 1
Template.body.addContent((function() {                                                    // 2
  var view = this;                                                                        // 3
  return HTML.DIV({                                                                       // 4
    "class": "container"                                                                  // 5
  }, HTML.Raw('\n    <header class="navbar navbar-default" role="navigation">\n      <div class="navbar-header">\n        <a class="navbar-brand" href="/">HackerNews</a>\n      </div>\n    </header>\n    '), HTML.DIV({
    id: "main"                                                                            // 7
  }, "\n      ", Spacebars.include(view.lookupTemplate("postsList")), "\n    "), "\n  ");
}));                                                                                      // 9
Meteor.startup(Template.body.renderToDocument);                                           // 10
                                                                                          // 11
////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"collections":{"posts.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// lib/collections/posts.js                                                               //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
Posts = new Mongo.Collection('posts');                                                    // 1
////////////////////////////////////////////////////////////////////////////////////////////

}}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/templates/posts/template.post_item.js");
require("./client/templates/posts/template.posts_list.js");
require("./client/templates/template.home.js");
require("./lib/collections/posts.js");
require("./client/templates/posts/post_item.js");
require("./client/templates/posts/posts_list.js");