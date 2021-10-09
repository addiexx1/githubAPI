let form = document.getElementById("myform");

form.addEventListener('submit', function(event){

    event.preventDefault(); 
    //the default action that belongs to the event will not occur.

    let searchValue = document.getElementById("search").value;
    //the username is being searched eg."John Doe"
    //we need get rid of the space
    let name = searchValue.split(" ").join("");
    //clear data
    document.getElementById("dataContainer").innerHTML = "";

    fetch("https://api.github.com/users/" + name)
    .then((result) => result.json())
    .then((data) => {
        console.log(data);
        let avatar = document.createElement('DIV');
        avatar.innerHTML = `<a href="${data.html_url}"><img src="${data.avatar_url}" alt="avatar_img" style="width:15rem;height:15rem"></a>`;

        let bio = document.createElement('DIV');
        bio.id = "bio";
        bio.innerHTML = `<h3>${data.name}</h3>
        <ul><li>Login name: ${data.login}</li> <li>Location: ${data.location} 
        Company: ${data.company} Email: ${data.email}</li> <li>Bio: ${data.bio}</li> <li>${data.blog}</li></ul>`;
        
        document.getElementById("dataContainer").appendChild(avatar);
        document.getElementById("dataContainer").appendChild(bio);

    })

})