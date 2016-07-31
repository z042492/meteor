var postsData = [
	{
		title: 'Discover Meteor',
		url: 'http://wiki.jikexueyuan.com/project/discover-meteor/'
	},
	{
		title: 'Meteor Tutorial',
		url: 'https://www.meteor.com/tutorials/blaze/creating-an-app'
	},
	{
		title: 'Baidu',
		url: 'http://www.baidu.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});