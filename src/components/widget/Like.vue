<template>
  <div>
    <v-chip
      class="px-4"
      :color="iLikedIt ? '#245ee7' : '#F4F5FA'"
      @click.stop="submitLike"
    >
      <v-avatar left>
        <v-icon small :color="iLikedIt ? '#fff' : '#909AB4'"
          >mdi-thumb-up</v-icon
        >
      </v-avatar>
      <strong :class="iLikedIt ? 'white--text' : ''">{{ count }}</strong>
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    discussion: {
      type: Object,
      default: null,
    },
  },
  computed: {
    count() {
      if (this.discussion?.likes) {
        return this.discussion.likes;
      } else {
        return 0;
      }
    },
    iLikedIt() {
      if (this.discussion?.iLikedIt) {
        return this.discussion.iLikedIt;
      } else {
        return false;
      }
    },
  },
  methods: {
    submitLike() {
      this.$store.dispatch("likeDiscussion", { discussion: this.discussion });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>