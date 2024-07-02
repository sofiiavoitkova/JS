async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  } else {
    throw new Error(response.status);
  }
}

loadJson("https://javascript.info/no-such-user.json").catch(alert);
