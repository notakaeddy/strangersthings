
export const createNewPost = async (newPost) =>
{
  const url ="https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/posts";
  const token = localStorage.getItem("token");
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: newPost.title,
        description: newPost.description,
        price: newPost.price,
        willDeliver: newPost.willDeliver,
      },
    }),
  })
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  })
  .catch(console.error);
};

export const getPosts = async () =>
{
  const url = "https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/posts";
  const token = localStorage.getItem("token");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json;
};


export const updatePost = async (postToUpdate, postId) => {
  const url = `https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/posts/${postId}`;
  const token = localStorage.getItem("token");
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postToUpdate),
  });

  const json = await response.json();
  return json;
};

export const deletePost = async (postId) =>
{
  const url = `https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/posts/${postId}`;
  const token = localStorage.getItem("token");
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json();
  return json;
};

export const accountCreation = async (username, password) =>
{
  await fetch("https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      localStorage.setItem("token", result.data.token);
    })
    .catch(console.error);
};

export const accountLogin = async (username, password) =>
{
  await fetch(
    "https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      localStorage.setItem("token", result.data.token);
      console.log(result);
    })
    .catch(console.error);
};

export const testAuthentication = async () => {
  const url =
    "https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/test/me";
  const token = localStorage.getItem("token");
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await response.json();
  return json.success;
};
