<template>
  <div class="">
    <v-avatar size="50" color="#DEEDFC">
      <v-img v-if="src" :src="src">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-icon color="white">mdi-account</v-icon>
          </v-row>
        </template>
      </v-img>
      <strong v-else style="color: #0c589d"> {{ label }} </strong>
    </v-avatar>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    label() {
      if (this.title) {
        if (this.title.includes(" ")) {
          var chars = this.title.split(" ");
          return (chars[0][0] + chars[1][0]).toUpperCase();
        } else {
          return this.title[0];
        }
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>