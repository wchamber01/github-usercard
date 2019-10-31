/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):       
*/
axios.get('https://api.github.com/users/wchamber01')
.then(response => {
  console.log(response);
  card(response);

})

.catch(error => {
  console.log('The data was not returned!', error)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

  followersArray.forEach(person => {
    axios.get(`https://api.github.com/users/${person}`).then(response => {
      card(response);
    });
  });
  

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function card(ghData){

const ghCard = document.createElement('div');
const ghImg = document.createElement('img');
const ghCardInfo = document.createElement('div');
const ghName = document.createElement('h3');
const ghUserName = document.createElement('p');
const ghLocation = document.createElement('p');
const ghProfile = document.createElement('p');
const ghProfileATag = document.createElement('a');
const ghFollowers = document.createElement('p');
const ghFollowing = document.createElement('p');
const ghBio = document.createElement('p');

ghCard.appendChild(ghImg);
ghCard.appendChild(ghCardInfo);
ghCardInfo.appendChild(ghName);
ghCardInfo.appendChild(ghUserName);
ghCardInfo.appendChild(ghLocation);
ghCardInfo.appendChild(ghProfile);

ghCardInfo.appendChild(ghFollowers);
ghCardInfo.appendChild(ghFollowing);
ghCardInfo.appendChild(ghBio);

ghCard.classList.add('card');
ghCardInfo.classList.add('card-info');
ghName.classList.add('name');
ghUserName.classList.add('username');

ghImg.src = ghData.data.avatar_url;
ghName.textContent = ghData.data.name;
ghUserName.textContent = ghData.data.login;
ghLocation.textContent = `location: ${ghData.data.location}`;
ghProfile.textContent = 'Profile: ';
ghProfileATag.textContent = ghData.data.html_url;
ghProfileATag.href = ghData.data.html_url;
ghProfile.appendChild(ghProfileATag);
ghFollowers.textContent = `Followers: ${ghData.data.followers}`;
ghFollowing.textContent = `Following: ${ghData.data.following}`;
ghBio.textContent = ghData.data.bio;


const entryPoint = document.querySelector('.cards');
entryPoint.appendChild(ghCard);

return ghCard
}