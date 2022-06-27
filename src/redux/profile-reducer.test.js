import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 1, message: "Hi,  how are you?", likesCount: 12 },
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
  ],
};

test("length of posts should be incremented", () => {
  let action = addPostActionCreator("PARARA");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});

test("message of newPost should be correct", () => {
  let action = addPostActionCreator("PARARA");

  let newState = profileReducer(state, action);

  expect(newState.posts[4].message).toBe("PARARA");
});

test("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

test("after deleting length shouldn't be changed if id is incorrect", () => {
  let action = deletePost(10000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});