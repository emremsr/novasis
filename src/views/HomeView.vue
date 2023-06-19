<template>
  <div>
    <Header />
    <Characters />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Characters from "@/components/Characters.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    Characters,
  },
};
</script>
