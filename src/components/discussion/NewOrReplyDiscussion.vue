<template>
  <div class="d-flex">
    <rounded-image :src="user.avatar" :title="user.name" />
    <v-textarea
      v-model="discussionText"
      rounded-xl
      :label="isReply ? 'Reply' : 'Start a discussion'"
      flat
      class="ml-3 my-auto"
      solo
      outlined
      dense
      hide-details=""
      auto-grow
      rows="1"
      @keydown.enter.prevent="submit"
    ></v-textarea>
  </div>
</template>

<script>
import RoundedImage from "../widget/RoundedImage.vue";
import { mapGetters } from "vuex";

export default {
  components: { RoundedImage },
  props: {
    isReply: {
      type: Boolean,
      default: false,
    },
    discussionId: {
      type: String,
      default: null,
    },
  },

  computed: {
    ...mapGetters({ user: "getUser" }),
  },

  data() {
    return {
      discussionText: "",
    };
  },
  methods: {
    submit() {
      if (!this.discussionText) {
        return;
      }

      if (this.isReply) {
        //Reply discussion
        this.$store.dispatch("replyDiscussion", {
          discussionText: this.discussionText,
          discussionId: this.discussionId,
        });
      } else {
        //Start discussion
        this.$store.dispatch("startDiscussion", {
          discussionText: this.discussionText,
        });
      }

      this.discussionText = ""
    },
  },
};
</script>

<style lang="scss">
</style>