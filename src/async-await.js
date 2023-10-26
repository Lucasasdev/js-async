const loginUser = function (email, passaword) {
  return new Promise((resolve, reject) => {
    const error = true;

    if (error) {
      reject(new Error("Error in login!"));
    }

    console.log("User logged");
    resolve({ email });
  });
};

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getUserVideos");
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

// loginUser("Lucas@gmail.com", "1234567")
//   .then((user) => getUserVideos(user))
//   .then((videos) => getVideoDetails(videos[0]))
//   .then((videoDetail) => console.log({ videoDetail }))
//   .catch((error) => console.log({ error }));

const displayUser = async () => {
  try {
    const user = await loginUser("lucas@gmail.com", "1234567");
    const videos = await getUserVideos(user.email);
    const videosDetails = await getVideoDetails(videos[0]);
    console.log({ videosDetails });
  } catch (error) {
    console.log({ error });
  }
};

// displayUser();
