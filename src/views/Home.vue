<template>
  <div class="home">
    <SlideShow />
    <div class="list">
      <Item
        v-for="whisper in orderBy(whispers,'date',-1)"
        :key="whisper.id"
        :id="whisper.id"
        :uid="whisper.uid"
      />
    </div>
    <div class="cards">
      <router-link to="/lesson/lesson"><Card /></router-link>
      <router-link to="/lesson/lesson"><Card /></router-link>
      <router-link to="/lesson/lesson"><Card /></router-link>
      <router-link to="/lesson/lesson"><Card /></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Item from "../components/Item";
import SlideShow from "../components/SlideShow";
import Card from "../components/Card";

import { db } from "../main";
import Vue2Filters from "vue2-filters";

export default {
  name: "Home",
  components: {
    Item,
    SlideShow,
    Card
  },
  data() {
    return {
      whispers: []
    };
  },
  firestore() {
    return {
      whispers: db.collection("whispers")
    };
  },
  mixins: [Vue2Filters.mixin]
};
</script>

<style>
  .cards {
    display:flex;
    flex-wrap: wrap;
  }
</style>
