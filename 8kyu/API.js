// 

fetch("url")
.then(res => res.json()) //parse response as JSON
.then(data => {
  console.log(data);    //log the data to the console
})
.catch(err => {
  console.log(`error ${err}`); //log any errors to the console
});