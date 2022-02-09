const DB = require("../DB/index");

async function getFriends() {
  return DB.select("*").from("friends");
}

async function addFriend({ first_name, last_name, nickname }) {
  return await DB("friends").insert({
    first_name: first_name,
    last_name: last_name,
    nickname: nickname,
  });
}

module.exports = { getFriends, addFriend };
