const DB = require("../DB/index");

async function getFriends() {
  return DB.select("*").from("friends");
}

async function addFriend(friendData, ctx) {
  if (friendData.first_name && friendData.last_name)
    return await DB("friends").insert({
      first_name: friendData.first_name,
      last_name: friendData.last_name,
      nickname: friendData.nickname,
    });
  ctx.status = 400;
}

module.exports = { getFriends, addFriend };
