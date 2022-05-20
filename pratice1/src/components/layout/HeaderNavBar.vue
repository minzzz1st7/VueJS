<template>
  <div>
    <router-link :to="{ name: 'home' }"> 홈</router-link>
    <router-link :to="{ name: 'qna' }"> 질문게시판</router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderNavBar",
};
</script>

<style></style>
