function loginUser(email, passaword, onSuccess, onError) {
  setTimeout(() => {
    const error = false;

    if (error) {
      return onError(new Error("Error to log in!"));
    }

    console.log("User logged!");
    onSuccess({ email });
  }, 1500);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["vide1", "video2", "video3"]);
  }, 2000);
}

function getVideoDetails(videos, callback) {
  setTimeout(() => {
    callback({ video: "title video" });
  }, 2500);
}

const user = loginUser(
  "Lucas@gmail.com",
  1234567890,
  (user) => {
    getUserVideos(user.email, (videos) => {
      getVideoDetails(videos[0], (videDetail) => {
        console.log({ videDetail });
      });
    });
  },
  (error) => {
    console.log(error);
  }
);
//console.log({ user });
