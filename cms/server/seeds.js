if(Posts.find().count()===0){
	Posts.insert({
		title: 'Discover Meteor',
		url: 'http://wiki.jikexueyuan.com/project/discover-meteor/'
	});
	Posts.insert({
		title: 'Meteor Tutorial',
		url: 'https://www.meteor.com/tutorials/blaze/creating-an-app'
	});
	Posts.insert({
		title: 'Baidu',
		url: 'http://www.baidu.com'
	});
};