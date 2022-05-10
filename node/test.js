import { promises } from 'fs';
import { nanoid } from 'nanoid';
/*
promises
  .readFile('database.json', 'utf-8')
  .then(data => JSON.parse(data))
  .then(json => {
     console.log(json);
  })
  .catch(error_ => {
    throw error_;
  }); */

async function getDatabase() {
  const content = await promises.readFile('database.json', 'utf-8');
  const data = JSON.parse(content);
  return data;
}

async function addUser(user) {
  const data = await getDatabase();
  data.users.push(user);
  await promises.writeFile('database.json', JSON.stringify(data, null, 4));
  //console.log(data);
}

// addUser({ id: nanoid(), name: 'Anna', age: 20, hobbies: ['reading'] }); // Aufruf der Add Function

async function removeUser(id) {
  const data = await getDatabase();
  const newArray = data.users.filter(user => user.id !== id);
  data.users = newArray;
  await promises.writeFile('database.json', JSON.stringify(data, null, 4));
  console.log(newArray);
}

// removeUser(''); // Aufruf der Remove Function

async function updateUser(id, name, hobby) {
  const data = await getDatabase();

  data.users = data.users.map(user => {
    if (user.id === id) {
      user.name = name;
      user.hobbies.unshift(hobby);
    }
    return user;
  });
  promises.writeFile('database.json', JSON.stringify(data, null, 4));
}
// updateUser();
