<template>
  <tr @click="selectQna">
    <th>{{ qna.articleno }}</th>
    <th>{{ qna.subject }}</th>
    <th>{{ qna.content }}</th>
    <th>{{ qna.username }}</th>
  </tr>
</template>

<script>
export default {
  name: "QnAListItem",
  data() {
    return { isColor: false };
  },
  props: {
    qna: Object,
  },

  methods: {
    selectQna() {
      console.log("listRow : ", this.qna);
      this.detailQna(this.house);
    },
    detailQna() {
      this.$store.state.qna = this.$props.qna;
      this.$store.dispatch("getAns"); //답변도 함께 얻기
      this.$router.push({
        name: "QnADetail",
        params: { no: this.$props.qna.articleno },
      });
    },
    colorChange(flag) {
      this.isColor = flag;
    },
  },
};
</script>

<style></style>
