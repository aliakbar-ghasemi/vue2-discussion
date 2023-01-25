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
          <span class="mx-3 grey--text text--lighten-1">{{
            getTimePassed(discussion.date)
          }}</span>
        </div>

        <p class="mt-1 grey--text text--darken-1">{{ discussion.text }}</p>
        <v-layout> </v-layout>
        <div class="d-flex">
          <like
            class="my-auto"
            :discussion="discussion"
            :count="discussion.likes"
            :iLikedIt="discussion.iLikedIt"
          />
          <v-btn
            v-if="isShowReply"
            text
            rounded
            class="mx-3 my-auto"
            color="#0c589d"
            ><strong>Reply</strong></v-btn
          >
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
</style>