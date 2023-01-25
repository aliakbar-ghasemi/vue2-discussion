<template>
  <div>
    <v-chip class="px-4" :color="iLikedIt ? '#245ee7' : '#F4F5FA'">
      <v-avatar left>
        <v-icon small :color="iLikedIt ? '#fff' : '#909AB4'">mdi-thumb-up</v-icon>
      </v-avatar>
      <strong :class="iLikedIt ? 'white--text' : ''">{{ count }}</strong>
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
    iLikedIt: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>