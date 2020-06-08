<template>
  <div class="item">
    <div class="user-box">
      <div class="avatar" :style="'background-image: url('+user.photoURL+')'"></div>
      <p class="user-name">{{user.name}}</p>
    </div>
    <div class="content" v-html="whisper.content"></div>
  </div>
</template>

<script>
import { db } from '../main'

export default {
    props:['id' , 'uid'],
    data() {
        return {
            whisper: {},
            user: {}
        }
    },
    firestore() {
        return {
            whisper:db.collection('whispers').doc(this.$props.id),
            user:db.collection('users').doc(this.$props.uid)
        }
    }
 }
// 上のコードでは、まず該当するwhisperドキュメントを格納するための空のオブジェクトwhisperを用意、同様に投稿ユーザーのドキュメントを格納するためのuserを用意しています。また、props: ['id','uid']で、Home.vueから取得したwhisperのIDをidというプロパティに格納、投稿ユーザーのIDをuidに格納するようにしています。
</script>

<style lang="stylus">
.item
  list-style none
  border-top 1px solid #eee
  padding 5px 15px
  display flex
  flex-wrap no-wrap
  justify-content flex-start
  position relative
  &:first-child
    border none
  &:hover
    background rgba(0,0,0,.02)
  .user-box
    margin 10px 10px 10px 0
    .avatar
      height 50px
      width 50px
      border-radius 50%
      border 1px solid #eee
      background-size cover
    .user-name
      margin 5px 0 0 0
      text-align center
      font-size .7rem
      line-height .7rem
      width 50px
  .content
    padding 10px
</style>
