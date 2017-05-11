const CREATE_POST = "CREATE_POST";
const DELETE_POST = "DELETE_POST";
const USER_LOGIN = "USER_LOGIN";

function createPostAction(data) {
  return {
    type: CREATE_POST,
    data: data
  };
}

function deletePostAction(id) {
  return {
    type: DELETE_POST,
    id: id
  }
};

function userLoginAction(data) {
  return {
    type: USER_LOGIN,
    data: data
  }
};