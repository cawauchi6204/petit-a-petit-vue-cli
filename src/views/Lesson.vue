<template>
  <div id="user">
    <SlideShow />
    <button @click="getImg">getImg</button>
    <input type="file" @change="attachImage">
    <div class="user-title">
      <div class="avatar" :style="'background-image: url('+user.photoURL+')'"></div>
      <div class="texts">
        <h1>{{user.name}}</h1>
        <p v-if="myWhispers.length > 1">{{myWhispers.length}} whispers</p>
        <p v-else>{{myWhispers.length}} whisper</p>
      </div>
    </div>
    <div class="list">
      <Editor :currentUser="currentUser" />
      <Item
        v-for="whisper in orderBy(myWhispers,'date',-1)"
        :key="whisper.id"
        :id="whisper.id"
        :uid="whisper.uid"
      />
    </div>
  </div>
</template>

<script>
import { auth } from "../main";
import { db } from "../main";
import { storage } from "../main";
// import firebase from "firebase";
import Vue2Filters from "vue2-filters";
import Item from "@/components/Item";
import Editor from "../components/Editor";
import SlideShow from "../components/SlideShow";

export default {
  components: {
    Item,
    Editor,
    SlideShow
  },
  data() {
    return {
      user: {},
      myWhispers: [],
      currentUser: {}
    };
  },
  methods: {
    getImg() {
      console.log(storage.ref().child("image/kyuri.jpg"));
    },
    upImg() {
      const storageRef = storage.ref();

      const downRef = storageRef.child("images/kyuri.jpg");
      console.log(downRef);
    },
    attachImage(e) {
      const file = e.target.files[0];
      const storageRef = storage.ref();

      const uploadTask = storageRef.child(`images/${file.name}`).put(file);
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
    },
  },
  firestore() {
    return {
      user: db.collection("users").doc(this.$route.params.uid),
      myWhispers: db
        .collection("whispers")
        .where("uid", "==", this.$route.params.uid)
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  },
  mixins: [Vue2Filters.mixin]
};
</script>

<style lang="stylus" scoped>
.user-title {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  margin: 10px 0;

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-size: cover;
  }

  .texts {
    margin-left: 10px;

    h1 {
      font-size: 1.5rem;
      margin: 0;
    }

    p {
      font-size: 0.8rem;
      margin: 0;
    }
  }
}
</style>
