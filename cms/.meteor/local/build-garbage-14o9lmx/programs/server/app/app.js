var require = meteorInstall({"lib":{"collections":{"posts.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// lib/collections/posts.js                                                 //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Posts = new Mongo.Collection('posts');                                      // 1
//////////////////////////////////////////////////////////////////////////////

}}},"server":{"seeds.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/seeds.js                                                          //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
if (Posts.find().count() === 0) {                                           // 1
	Posts.insert({                                                             // 2
		title: 'Discover Meteor',                                                 // 3
		url: 'http://wiki.jikexueyuan.com/project/discover-meteor/'               // 4
	});                                                                        // 2
	Posts.insert({                                                             // 6
		title: 'Meteor Tutorial',                                                 // 7
		url: 'https://www.meteor.com/tutorials/blaze/creating-an-app'             // 8
	});                                                                        // 6
	Posts.insert({                                                             // 10
		title: 'Baidu',                                                           // 11
		url: 'http://www.baidu.com'                                               // 12
	});                                                                        // 10
};                                                                          // 14
//////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/main.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                            //
Meteor.startup(function () {                                                // 3
  // code to run on server at startup                                       //
});                                                                         // 5
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/collections/posts.js");
require("./server/seeds.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
