<template>
  <div>
    <div @click="visiblePanel = !visiblePanel">
      <discussion-item :discussion="discussion" :is-show-reply="true" />
    </div>

    <div v-if="visiblePanel" class="ml-15 mt-5">
      <div v-for="dItem in discussion.replies" :key="dItem.id">
        <discussion-item
          class="mt-3"
          :discussion="dItem"
          :isShowReply="false"
        />
      </div>
      <reply-discussion
        class="mt-5"
        :is-reply="true"
        :discussion-id="discussion.id.toString()"
      />
    </div>
  </div>
</template>

<script>
import DiscussionItem from "./DiscussionItem.vue";
import ReplyDiscussion from "./NewOrReplyDiscussion.vue";
export default {
  components: { DiscussionItem, ReplyDiscussion },
  props: {
    discussion: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      visiblePanel: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>