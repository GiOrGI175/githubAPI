let users = prompt('users');

async function githubusers() {
  let url = `https://api.github.com/users/${users}`;

  let response = await fetch(url);

  console.log('response:' + response);

  let data = await response.json();

  console.log(data);

  if (data.message === 'Not Found') {
    let noresult = document.querySelector('iput_box');

    let noresulttxt = document.createElement('p');
    noresulttxt.textContent = 'No results';
    noresulttxt.classList.add('no_Esult');

    console.log(noresulttxt);

    noresult.appendChild(noresulttxt);
  }
}
githubusers();
