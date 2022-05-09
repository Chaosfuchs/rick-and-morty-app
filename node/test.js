import { promises } from 'fs';

promises
  .readFile('database.json', 'utf-8')
  .then(data => JSON.parse(data))
  .then(json => {
    console.log(json);
  })
  .catch(error_ => {
    throw error_;
  });

async function getDatabase() {
  const content = await promises.readFile('database.json', 'utf-8');
  const data = JSON.parse(content);
  return data;
}

async function addUser(user) {
  const data = await getDatabase();
  data.users.push(user);
  await promises.writeFile('database.json', JSON.stringify(data, null, 4));
  console.log(data);
}

addUser({ name: 'Anna', age: 19, hobbies: ['reading'] }); // Aufruf der Add Function

async function removeUser(user) {
  const data = await getDatabase();
  data.users.pop(user);
  await promises.writeFile('database.json', JSON.stringify(data, null, 4));
  console.log(data);
}
