<template>
  <div class="container">
    <div class="item" v-for="character in characters" :key="character.id">
      <div class="image-container">
        <img
          :src="getThumbnailSrc(character.thumbnail)"
          alt="Character Image"
          class="character-image"
        />
        <div class="overlay">
          
          <router-link
            :to="{ name: 'character', params: { id: character.id } }"
          >
          <button class="details-button">
              <i class="fas fa-heart"></i> Details
            </button>
          </router-link>
        </div>
      </div>
      <h1>{{ character.title }}</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NovasisCharacters",

  data() {
    return { url: "", size: "standard_large.jpg" };
  },

  mounted() {
    this.$store.dispatch("getCharacters");
  },

  computed: {
    ...mapState({ characters: (state) => state.characters }),
  },

  methods: {
    getThumbnailSrc: function (thumbnail) {
      return `${thumbnail.path}.${thumbnail.extension}`;
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  background-color: black;
}

.item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item:hover .overlay {
  opacity: 1;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  height: 200px;
}

.character-image {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

h1 {
  margin-top: 10px;
  margin-bottom: 0;
  text-align: center;
  font-size: 18px;
  color: #ffff;
}

.details-button {
  padding: 10px 20px;
  background-color: #e50914;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: #bf0812;
}
</style>
