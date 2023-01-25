<template>
  <div>
    <v-layout>
      <rounded-image
        :src="discussion.user.avatar"
        :title="discussion.user.name"
      />
      <div class="ml-2 mt-1">
        <div class="d-flex">
          <h4>{{ discussion.user.name }}</h4>
          <span class="mx-3 grey--text">{{
            getTimePassed(discussion.date)
          }}</span>
        </div>

        <p>{{ discussion.text }}</p>
        <v-layout> </v-layout>
        <div class="d-flex">
          <like :count="discussion.likes" :iLikedIt="discussion.iLikedIt" />
          <strong v-if="isShowReply" @click="discussion.showReplies = true" class="mx-3 my-auto reply">Reply</strong>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
import Like from "../widget/Like.vue";
import RoundedImage from "../widget/RoundedImage.vue";
export default {
  components: { RoundedImage, Like },
  props: {
    discussion: {
      type: Object,
      default: null,
    },
    isShowReply: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.reply {
  color: #0c589d;
}
</style>