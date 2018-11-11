const http = new easyHTTP();

//http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//  if (err)
//    console.log(err);
//  else
//    console.log(response);
//});
//
//// Data to be sent to the server
//
const data = {
  title: 'Custom post',
  body: 'Custom post'
};
//
//http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//  if (err)
//    console.log(err);
//  else
//    console.log(post);
//
//});

//http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//  if (err)
//    console.log(err);
//  else
//    console.log(post);
//
//});

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(response);
});
