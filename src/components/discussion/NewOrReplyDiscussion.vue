<template>
  <div class="d-flex">
    <rounded-image :title="'M e'"/>
    <v-text-field
      rounded-xl
      :label="isReply ? 'Reply' : 'Start a discussion'"
      flat
      class="ml-3 my-auto"
      solo
      outlined
      dense
      hide-details=""
    ></v-text-field>
  </div>
</template>

<script>
import RoundedImage from "../widget/RoundedImage.vue";
export default {
  components: { RoundedImage },
  props: {
    isReply: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">

</style>