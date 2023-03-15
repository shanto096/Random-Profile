function profileGenerator(){
    fetch('https://randomuser.me/api/')
   .then(res => res.json())
   .then(data =>{
    const user = data.results[0];
//    ....... name................
    const name = user.name;
    const fullName =`${name.title} ${name.first} ${name.last}`;
    document.getElementById("name").innerText = fullName;
// ..........profile-img ...........
    const picture = user.picture;
    const fullPicture = picture.large;
    const img = document.getElementById("img");
     img.innerHTML = `<img class="h-[10rem] w-[10rem] rounded-[50%] border-[5px] border-y-green-500 border-x-red-500 ml-5"  src="${fullPicture}" alt="">`
    
//  ...........username.............
    const login = user.login;
    const username = login.username;
    document.getElementById("username").innerText = username;
//  ...........country...............
    const location = user.location;
    const Country = location.country;
    document.getElementById("Country").innerText = Country;
//  ............email...................
    const email = user.email;
    document.getElementById("email").innerText = email;

//.............password.................
    const Password = login.password;
    document.getElementById("Password").innerText = Password;
   })

    }
profileGenerator()

    setInterval(() => {
        profileGenerator() 
    }, 3000);

