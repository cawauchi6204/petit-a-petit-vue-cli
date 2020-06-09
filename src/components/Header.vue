<template>
  <header>
    <router-link to="/">
      <h1>Petit a Petit</h1>
    </router-link>
    <div v-if="currentUser" class="btns">
      <router-link :to="'/user/'+currentUser.uid">
        <button :style="'background-image:url('+currentUser.photoURL+')'"></button>
      </router-link>
      <button>
        <fa icon="sign-out-alt" @click="signOut" />
      </button>
    </div>
    <div v-else class="btns">
      <button>
        <fa icon="user" @click="signIn" />
      </button>
    </div>
  </header>
</template>

<script>
import firebase from "firebase";

import { auth } from "../main";
import { db } from "../main";

export default {
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(result => {
        this.$router.push("/user/" + result.user.uid);
        alert("Bonjour " + result.user.displayName + "さん!");

        this.createUser(result.user);
      });
    },
    createUser(user) {
      db.collection("users")
        .doc(user.uid)
        .set(
          {
            name: user.displayName,
            photoURL: user.photoURL,
            email: user.email
          },
          { merge: true }
        );
    },
    signOut() {
      if (window.confirm("サインアウトしてもいいですか?")) {
        auth.signOut().then(() => {
          alert("安全にサインアウトされました");
          this.$router.push("/");
        });
      }
    }
  },
  data() {
    return {
      currentUser: {}
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      this.currentUser = user;
    });
  }
  // こちらのコードでは、currentUserという、サインイン中のユーザーデータを格納する変数をdata() {}内に作成したのち、上の関数を追加し、ユーザーの状態が変わるごとにこの変数にユーザーデータを格納するようにしています。
};
</script>

<style lang="stylus" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: white;
  display: flex;

  h1 {
    width: fit-content;
    margin-right: auto;
    font-size: 1.4rem;
  }

  .btns {
    cursor: pointer;
    margin-left: auto;
    margin-right: 30px;

    img {
      width: 100%;
    }
  }
}
</style>
