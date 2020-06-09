<template>
  <div class="hooper-sample">
    <hooper class="hooper-sample__hooper" :settings="hooperSettings" @slide="slide">
      <slide class="hooper-sample__slide">
        Hooperを
        <br />使って
      </slide>
      <slide class="hooper-sample__slide">
        簡単に
        <br />カルーセルを
      </slide>
      <slide class="hooper-sample__slide">実装してみる</slide>
      <slide class="hooper-sample__slide">
        最後のスライドは
        <br />ボタンだけを表示する
      </slide>
      <hooper-pagination slot="hooper-addons" v-if="!isLastSlide" />
      <hooper-navigation slot="hooper-addons" v-if="!isLastSlide" />
    </hooper>
    <button v-if="isLastSlide" class="hopper-sample__button">ボタン</button>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from "hooper";

const SLIDE_COUNT = 3;

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        wheelControl: false
      },
      currentSlide: 0
    };
  },
  computed: {
    isLastSlide() {
      return this.currentSlide >= SLIDE_COUNT;
    }
  },
  methods: {
    slide({ currentSlide }) {
      this.currentSlide = currentSlide;
    }
  }
};
</script>

<style lang="scss">
.hooper-sample {
  background-color: #d5d5d5;
  text-align: center;

  &__hooper {
  }

  &__slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
