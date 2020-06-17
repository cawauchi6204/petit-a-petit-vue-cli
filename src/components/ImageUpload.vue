<template>
  <div id="user">
    <input type="file" @change="attachImage" />
  </div>
</template>

<script>
import { auth } from "../main";
import { storage } from "../main";
// import firebase from "firebase";

export default {
  methods: {
    attachImage(e) {
      const file = e.target.files[0];
      const storageRef = storage.ref();

      const uploadTask = storageRef.child(`${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        snapshot => {
          console.log("snapshot", snapshot);
        },
        error => {
          console.log("err", error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log("File available at", downloadURL);
          });
        }
      );
    }
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
