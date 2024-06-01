let formbox = document.querySelector('.form_box');

let noresult = document.getElementById('noinformation');
let noresulttxt = document.createElement('p');
noresulttxt.textContent = '';
noresulttxt.classList.add('no_REsult');
noresult.appendChild(noresulttxt);

formbox.addEventListener('submit', (e) => {
  e.preventDefault();
  let users;

  username = document.querySelector('#user');

  users = username.value.trim();

  let noresult = document.getElementById('noinformation');

  async function githubusers() {
    let url = `https://api.github.com/users/${users}`;

    let response = await fetch(url);

    let data = await response.json();

    console.log(data);

    //! if no infomation [<

    let infpBox = document.querySelector('.info');

    if (data.message === 'Not Found') {
      noresulttxt.classList.add('no_REsultDislay');
      noresulttxt.textContent = 'No results';

      infpBox.classList.remove('displayBlock');

      noresult.appendChild(noresulttxt);
    } else if (
      data.message ===
      "API rate limit exceeded for 212.58.121.175. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)"
    ) {
      infpBox.classList.remove('displayBlock');
      console.log('API DO NOT WORK');
      noresulttxt.classList.add('no_REsultDislay');
      noresulttxt.textContent = 'API DO NOT WORK';
    } else {
      infpBox.classList.add('displayBlock');

      noresulttxt.textContent = '';

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
        location.classList.add('notAvaible');
        let img = document.querySelector('.location');
        img.classList.add('notAvaible');
      } else {
        location.textContent = data.location;
      }

      // //! location >]

      // //! twit [<

      let twit = document.getElementById('twiter');
      if (data.twitter_username === null) {
        twit.textContent = 'not avaible';
        twit.classList.add('notAvaible');
        let img = document.querySelector('.twitter');
        img.classList.add('notAvaible');
        // notAvaible
      } else {
        twit.textContent = data.twitter_username;
      }

      // //! twit >]

      // //! link [<

      let link = document.querySelector('#atag');
      link.textContent = data.html_url;
      link.href = data.html_url;
      link.target = '_blank';
      link.classList.add('atag');

      let alink = document.getElementById('githublink');
      alink.appendChild(link);

      // //! link >]

      // //! workpalace [<

      let workpalace = document.getElementById('workpalace');
      if (data.company === null) {
        workpalace.textContent = 'not avaible';
        workpalace.classList.add('notAvaible');
        let img = document.querySelector('.palace');
        img.classList.add('notAvaible');
      } else {
        workpalace.textContent = data.company;
      }

      // //! workpalace [<

      //! add location link twitt job_palace >]
    }
  }
  githubusers();

  users = username.value = '';

  noresulttxt.classList.remove('no_REsultDislay');
});

let moonBox = document.getElementById('moonbox');

moonBox.addEventListener('mouseenter', () => {
  let moonimg = document.querySelector('.logo');

  setTimeout(() => {
    moonimg.src = './img/darkMoon.svg';
  }, 700);
});

moonBox.addEventListener('mouseleave', () => {
  let moonimg = document.querySelector('.logo');

  setTimeout(() => {
    moonimg.src = './img/moon.svg';
  }, 700);
});
