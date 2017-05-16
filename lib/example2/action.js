(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.action = mod.exports;
  }
})(this, function () {
  "use strict";

  var CREATE_POST = "CREATE_POST";
  var DELETE_POST = "DELETE_POST";
  var USER_LOGIN = "USER_LOGIN";

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
    };
  };

  function userLoginAction(data) {
    return {
      type: USER_LOGIN,
      data: data
    };
  };
});