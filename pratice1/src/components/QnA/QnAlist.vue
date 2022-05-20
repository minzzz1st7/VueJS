<template>
  <div>
    <qn-a-list-item v-for="(qna, index) in qnas" :key="index" :qna="qna" />
  </div>
</template>

<script>
import QnAListItem from "@/components/QnA/QnAListItem.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "QnAList",
  components: {
    QnAListItem,
  },
  data() {
    return {};
  },
  created() {
    this.getQnAs();
  },
  computed: {
    ...mapState(["qnas"]),
  },
  methods: {
    ...mapActions(["getQnAs"]),
  },
};
</script>

<style></style>
