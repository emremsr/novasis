<template>
  <div class="relative">
    <img
      class="w-full h-96 object-cover"
      src="../assets/banner.jpg"
      alt="Arka Plan Resmi"
    />

    <!-- Netflix Logo -->
    <div class="flex justify-between items-center">
      <img
        class="absolute top-5 left-5 h-10"
        src="../assets/netflix-logo.png"
        alt="Netflix Logo"
      />
      <img
        class="absolute top-5 right-5 h-10"
        src="../assets/netflix-avatar.png"
        alt="Ufak Resim"
      />
    </div>
    <header
      class="absolute inset-0 flex items-center justify-between pl-5 pr-5 md:pl-10 md:pr-10"
    >
      <div>
        <h1 class="text-white text-3xl md:text-4xl font-bold">Money Heist</h1>
        <div class="mt-3 md:mt-5">
          <button
            class="bg-transparent text-white hover:text-black hover:bg-white px-3 md:px-4 rounded mr-2"
          >
            Play
          </button>
          <button
            class="bg-transparent text-white hover:text-black hover:bg-white px-3 md:px-4 rounded"
          >
            My List
          </button>
        </div>
        <p class="text-white mt-3 md:mt-5 w-80">
          To carry out the biggest heist in history, a mysterious man called The
          Professor recruits a band of eight robbers who have a single
          characteristic: n...
        </p>
      </div>

      <!-- Ufak Resim -->
    </header>
  </div>
</template>

<script>
export default {
  name: "NovasisHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
