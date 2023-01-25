<template>
  <div class="">
    <v-card class="home rounded my-6">
    <div class="py-6 px-8 new-discussion">
      <new-discussion />
    </div>

    <discussions class="pb-5" />
  </v-card>
  </div>
</template>

<script>
import NewDiscussion from "../components/discussion/NewOrReplyDiscussion.vue";
import Discussions from "../components/discussion/Discussions.vue";

export default {
  components: {
    NewDiscussion,
    Discussions,
  },
};
</script>

<style>
.home {
  max-width: 600px;
  margin: auto;
  background-color: #fff;
}

.new-discussion {
  background-color: #FAFBFC;
}
</style>
