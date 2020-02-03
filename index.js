function createCard(user) {
    let card = document.createElement("div");
    card.className = "card flex centeredContent";

    let userId = document.createElement("div");
    userId.innerHTML = "Id : "+`${user.id}`;
    userId.className = "id--pera";
    card.appendChild(userId);

    let userName = document.createElement("div");
    userName.innerHTML = "Name : "+`${user.first_name} ${user.last_name}`;
    userName.className = "name--pera";
    card.appendChild(userName);
    
    let userEmail = document.createElement("div");
    userEmail.innerHTML = "Email : "+`${user.email}`;
    userEmail.className = "email--pera";
    card.appendChild(userEmail);
     
    let gender = document.createElement("div");
    gender.innerHTML="Gender : "+`${user.gender}`;
    gender.className = "gender--pera";
    card.appendChild(gender);
    
    let about = document.createElement("div");
    about.className = "about--pera";
    about.innerHTML ="About : "+`${user.about}`;
    card.appendChild(about);

    document.getElementById("mainContainer").appendChild(card);
  }
  function getUsersList() {
    fetch("https://ankitkotnalaqait.github.io/dummydata/data.json")
      .then(result => result.json())
      .then(userList => {
        console.log(userList);
        document.getElementById("getUserButton").classList.toggle("hide");
        userList.forEach(item => {
          createCard(item);
        });
      });
  }
  document
    .getElementById("getUserButton")
    .addEventListener("click", getUsersList);