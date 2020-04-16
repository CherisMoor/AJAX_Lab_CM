

$(document).ready(function(){


//Update the title of post with id of 12 and render responseJSON
//Delete the post with id of 12 and render a success message
//Display a list of posts.
//When the user clicks on a post, display all the comments from that post
//Display a link back to all posts


//Get all posts
$('#allPosts').click(function(){
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", function(getPosts){
		console.log(getPosts);
		let div = $("#allPosts");
		div.text(JSON.stringify(getPosts));	
		$('#allPosts').append(div);
	});
});

//Get post with id of 10
$('#tenPosts').click(function(){
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=10", {id:10}, function(getPosts2){
		console.log(getPosts2);
		let div2= $('#tenPosts');
		div2.text(JSON.stringify(getPosts2));
		$('#tenPosts').append(div2);
	});
});

//Get the comments from post with id of 12 note: comments are part of a different data model, you'll need to structure your endpoint to ask for all of the comments that belong to post #12
$('#twelvePosts').click(function(){
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments?id=12", {id:12}, function(getPosts3){
		console.log(getPosts3);
		let div3= $('#twelvePosts');
		div3.text(JSON.stringify(getPosts3));
		$('#twelvePosts').append(div3);
	});
});

//Get all the posts from user with id of 2
$('#twoPosts').click(function(){
	$.get("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/db", {userID:2}, function(getPosts4){
		console.log(getPosts4);
		let div4= $('#twoPosts');
		div4.text(JSON.stringify(getPosts4));
		$('#twoPosts').append(div4);
	});
});

//Create a new post and log the id generated for it by the server
$('#newPost').click(function(){
	let postTitle = "hello";
	let postBody = "world";
	$.post("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", {title: postTitle, body: postBody})
	.done(function(data){
		console.log(data);
		$('#newPost').text("id: " + data.id);
	});
});

//Replace the post with id of 12 and render the responseJSON
$('#replacePost').click(function(){
	$.ajax{
		url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts?id=12',
		type: 'PUT',
		data: {title: "new", body: "data"},
		success: function(result){
			//Do something with output
		}
	}
}





});