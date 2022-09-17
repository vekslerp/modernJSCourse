document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExrernal);


// Get local txt data.
function getText() {
  fetch('test.txt')
  .then(res => res.text())
  .then(data => {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err))
}

// Get local JSON data
function getJson() {
  fetch('posts.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let output = ''
    data.forEach(post => {
      output += `<li>${post.title}</li>`
      document.getElementById('output').innerHTML = output;
    })
  })
  .catch(err => console.log(err))
};

// Get external API data
function getExrernal() {
  fetch('https://api.github.com/users')
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data);
    let output = ''
    data.forEach(function(user) {
      output += `<li>${user.login}</li>`
      document.getElementById('output').innerHTML = output;

    })
  })
  .catch(err => console.log(err))
}
