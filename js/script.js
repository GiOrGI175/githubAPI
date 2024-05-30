let users = prompt('users');

async function githubusers() {
  let url = `https://api.github.com/users/${users}`;

  let response = await fetch(url);

  let data = await response.json();

  console.log(data);

  //! if no infomation [<

  if (data.message === 'Not Found') {
    let noresult = document.getElementById('noinformation');

    let noresulttxt = document.createElement('p');
    noresulttxt.textContent = 'No results';
    noresulttxt.classList.add('no_REsult');

    noresult.appendChild(noresulttxt);
  }

  //! if no infomation >]

  //! add user foto [<

  let userImg = document.querySelector('.users_foto');

  userImg.src = data.avatar_url;

  //! add user foto >]

  //! add username and full name [<

  let login = document.getElementById('login');

  login.textContent = data.login;

  let name = document.getElementById('name');

  name.textContent = data.name;

  //! add username and full name >]

  //! add joined data [<

  let joindata = document.getElementById('joindata');

  let dataarray = Array.from(data.created_at);

  console.log(dataarray);

  let dataNumber = dataarray.slice(8, 10);
  let number = dataNumber.join('');

  let datamonth = dataarray.slice(5, 7);
  let month = datamonth.join('');

  let datayear = dataarray.slice(0, 4);
  let year = datayear.join('');

  switch (month) {
    case '01':
      month = 'Jan';
      break;
    case '02':
      month = 'Feb';
      break;
    case '03':
      month = 'Mar';
      break;
    case '04':
      month = 'Apr';
      break;
    case '05':
      month = 'May';
      break;
    case '06':
      month = 'Jun';
      break;
    case '07':
      month = 'Jul';
      break;
    case '08':
      month = 'Aug';
      break;
    case '09':
      month = 'Sep';
      break;
    case '10':
      month = 'Oct';
      break;
    case '11':
      month = 'Nov';
      break;
    case '12':
      month = 'Dec';
      break;
  }

  joindata.textContent = `joined ${number} ${month} ${year}`;

  //! add joined data >]

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

  // //! location [<

  let location = document.getElementById('location');
  if (data.location === null) {
    location.textContent = 'not avaible';
  } else {
    location.textContent = data.location;
  }

  // //! location >]

  // //! twit [<

  let twit = document.getElementById('twiter');
  if (data.twitter_username === null) {
    twit.textContent = 'not avaible';
  } else {
    twit.textContent = data.twitter_username;
  }

  // //! twit >]

  // //! link [<

  let link = document.createElement('a');
  link.textContent = data.html_url;
  link.href = data.html_url;
  link.target = '_blank';
  link.classList.add('atag');

  let alink = document.getElementById('githublink');
  alink.appendChild(link);

  // //! link >]

  // //! workpalace [<

  let workpalace = document.getElementById('workpalace');
  workpalace.textContent = data.company;

  // //! workpalace [<

  //! add location link twitt job_palace >]
}
githubusers();
