var require = meteorInstall({"lib":{"collections":{"posts.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/collections/posts.js                                          //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Posts = new Mongo.Collection('posts');                               // 1
///////////////////////////////////////////////////////////////////////

}}},"server":{"publications.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/publications.js                                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.publish('posts', function () {                                // 1
	return Posts.find();                                                // 2
});                                                                  // 3
///////////////////////////////////////////////////////////////////////

},"seeds.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/seeds.js                                                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (Posts.find().count() === 0) {                                    // 1
	Posts.insert({                                                      // 2
		title: 'Discover Meteor',                                          // 3
		url: 'http://wiki.jikexueyuan.com/project/discover-meteor/'        // 4
	});                                                                 // 2
	Posts.insert({                                                      // 6
		title: 'Meteor Tutorial',                                          // 7
		url: 'https://www.meteor.com/tutorials/blaze/creating-an-app'      // 8
	});                                                                 // 6
	Posts.insert({                                                      // 10
		title: 'Baidu',                                                    // 11
		url: 'http://www.baidu.com'                                        // 12
	});                                                                 // 10
};                                                                   // 14
///////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/collections/posts.js");
require("./server/publications.js");
require("./server/seeds.js");
//# sourceMappingURL=app.js.map
