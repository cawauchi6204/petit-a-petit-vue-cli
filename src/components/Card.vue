<template>
  <section class="card">
    <img class="card-img" src="http://webcreatorbox.com/sample/images/bear.jpg" alt />
    <div class="card-content">
      <h1 class="card-title" :card-title="card-title">{{ cardTitle }}</h1>
      <p class="card-text">WebデザインやWebサイト制作、最新のWeb業界情報などを紹介していくサイト。</p>
    </div>
    <div class="card-link">
      <a href="http://webcreatorbox.com/about">About</a>
      <a href="http://webcreatorbox.com/">Website</a>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    show: false,
    cardTitle: "くまちゃん"
  })
};
</script>

<style>
.card {
  margin: 30px auto;
  width: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.card-link a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
}
.card-link a:hover {
  color: #0090aa;
}
</style>
