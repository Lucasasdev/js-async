const loginUser = function (email, passaword) {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(new error("Error in login!"));
    }

    console.log("User logged");
    resolve({ email });
  });
};

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("geUserVideos");
      resolve(["vide1", "video2", "video3"]);
    }, 2000);
  });
}

function getVideoDetails(videos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getVideoDetails");
      resolve({ video: "title video" });
    }, 2500);
  });
}

loginUser("Lucas@gmail.com", "1234567")
  .then((user) => getUserVideos(user))
  .then((videos) => getVideoDetails(videos[0]))
  .then((videoDetail) => console.log({ videoDetail }))
  .catch((error) => console.log({ error }));

//Promise.all

const fb = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Posts from facebook");
  }, 2000);
});

const yt = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Posts from youtube");
  }, 2500);
});

Promise.all([fb, yt])
  .then((result) => {
    console.log({ result });
  })
  .catch((error) => {
    return `There's an error!${error}`;
  });
