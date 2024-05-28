let users = prompt('users');

async function githubusers() {
  let url = `https://api.github.com/users/${users}`;

  let response = await fetch(url);

  console.log('response:' + response);

  let data = await response.json();

  console.log(data);

  //! if no infomation [<

  if (data.message === 'Not Found') {
    let noresult = document.querySelector('.form_box');

    let noresulttxt = document.createElement('span');
    noresulttxt.textContent = 'No results';
    noresulttxt.classList.add('no_REsult');

    noresult.appendChild(noresulttxt);
  }

  //! if no infomation >]

  //! add user foto [<

  console.log(data.avatar_url);

  let userImg = document.querySelector('.users_foto');

  userImg.src = data.avatar_url;

  //! add user foto >]

  //! add username and full name [<

  let login = document.getElementById('login');

  login.textContent = data.login;

  let name = document.getElementById('name');

  name.textContent = data.name;

  //! add username and full name >]

  //! add bio [<

  let Bio = document.querySelector('.bio');

  Bio.textContent = data.bio;

  //! add bio >]

  //! add repos folowers folwing [<

  let repos = document.getElementById('repos');
  repos.textContent = data.public_repos;

  let folower = document.getElementById('folower');
  folower.textContent = data.followers;

  let Following = document.getElementById('Following');
  Following.textContent = data.following;

  //! add repos folowers folwing >]

  //! add location link twitt job_palace [<

  let location = document.getElementById('location');
  if (data.location === null) {
    location.textContent = 'not avaible';
  } else {
    location.textContent = data.location;
  }

  let twit = document.getElementById('twiter');
  if (data.twitter_username === null) {
    twit.textContent = 'not avaible';
  } else {
    twit.textContent = data.twitter_username;
  }

  let link = document.getElementById('githublink');
  link.textContent = data.html_url;

  //! add location link twitt job_palace >]
}
githubusers();
