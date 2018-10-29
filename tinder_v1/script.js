let url = 'https://randomuser.me/api/?results=10';
let weeg = document.getElementById('weeg');
let person;
let likes = [];
let dislikes = [];
let screen = document.getElementById('screen');
let like = document.getElementById('like');
let disLike = document.getElementById('disLike');
let profiles = [];
localStorage.removeItem('person');
fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(data) {

  for (let i = 0; i < 10; i++) {
    // weeg.innerHTML = JSON.stringify(data);
    randomUser = data.results[i];
    
    let x ={
       userName: randomUser.name.first + ' ' + randomUser.name.last,
       userAge: randomUser.dob.age,
       userAddress: randomUser.location.street + ' ' + randomUser.location.city + ' ' + randomUser.location.state,
       userPicture: randomUser.picture.medium
        
    }
    console.log(x);
     
      profiles.push(x);

    }
      function printPerson() {
          screen.innerHTML ="";
    let userInfo = document.createElement('div');
    userInfo.classList.add('center');
      let userInfoName = document.createElement('h2');
      userInfoName.innerHTML = profiles[0].userName;
      let userInfoAddress = document.createElement('h6');
      userInfoAddress.innerHTML = profiles[0].userAddress;
      let userInfoAge = document.createElement('h4');
      userInfoAge.innerHTML = 'Age: ' + profiles[0].userAge;
      let userInfoPicture = document.createElement('img');
      userInfoPicture.src = profiles[0].userPicture;
      console.log(userInfoPicture);

      screen.appendChild(userInfo);
      userInfo.appendChild(userInfoPicture);
      userInfo.appendChild(userInfoName);
      userInfo.appendChild(userInfoAddress);
      userInfo.appendChild(userInfoAge);
    }
    printPerson();
    

    like.addEventListener('click', function(e){
        e.preventDefault();
        likes.push(profiles[0]);
        profiles.shift();
        printPerson();
    });
    
    disLike.addEventListener('click', function(e){
        e.preventDefault();
        dislikes.push(profiles[0]);
        profiles.shift();
        printPerson();
    });
    
    profiles.push(person);
    console.log(profiles);
  });

  

  



  


