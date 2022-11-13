const getAllUsers = require("./getAllUsers");
const getUsers = require("./getUsers");
const createUser = require("./createUser");
const getUser = require("./getUser");
const updateUser = require("./updateUser");
const deleteUser = require("./deleteUser");

module.exports = {
  "/users/all": {
    ...getAllUsers,
  },
  "/users": {
    ...getUsers,
    ...createUser,
  },
  "/users/{id}": {
    ...getUser,
    ...updateUser,
    ...deleteUser,
  },
};
