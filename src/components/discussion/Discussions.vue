<template>
  <div>
    <div v-for="discussion in discussions" :key="discussion.id">
      <hr />
      <Discussion :discussion="discussion" class="my-6 px-8" />
    </div>
  </div>
</template>

<script>
import Discussion from "./Discussion.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Discussion,
  },
  computed: {
    ...mapGetters({ discussions: "getDiscussions" }),
  },
};
</script>

<style lang="scss">
hr {
  border: solid 0.1rem #ebeff3;
}
</style>