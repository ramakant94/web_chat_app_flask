// console.log(2+3)  //gives output by console.log

 var socket = io();
    socket.on('connect', function() {
    	console.log('connection established')
    }
    );
    //     //socket.emit('my event', {data: 'I\'m connected!'});
    // });


function handleClick(){
	var inputBox = document.getElementById('inputBox')
	socket.emit('msg', inputBox.value)
	inputBox.value=''
}


socket.on('push',function(data){
	// console.log(data)
	var chatBox = document.getElementById('chatBox')
	chatBox.innerHTML += data + '<br/>'

})








// function handleClick(){
// 	// alert('hello')
// 	var url = '/users'
// 	fetch(url).then(function(res){
// 		res.json().then(function(data){
// 			console.log(data)
// 		})
// 	})

// }