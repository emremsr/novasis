<template>
  <div>
    <div class="container">
      <div v-for="char in character" :key="char.id" class="character-container">
        <h1 class="character-title">{{ char.title }}</h1>
        <div class="header-section">
          <div class="image-container">
            <img :src="url" alt="Character Image" class="character-image" />
          </div>
        </div>
        <div class="info-container">
          <div class="character-description">
            <p>{{ char.description }}</p>
          </div>
          <div class="character-creators">
            <p class="creators">Creators:</p>
            <ul>
              <li
                v-for="creator in char.creators.items"
                :key="creator.resourceURI"
                class="character-creator"
              >
                {{ creator.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NovasisCharacter",
  data() {
    return {
      size: "standard_large.jpg",
    };
  },

  mounted() {
    this.$store.dispatch("getCharacter", this.$route.params.id);
    this.getImage();
  },

  computed: {
    ...mapState({
      character: (state) => state.character,
      preUrl: (state) => state.url,
    }),
  },

  methods: {
    getImage: function () {
      this.url = `${this.preUrl}${this.size}`;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  min-height: 100vh;
}

.character-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: black;
  border-radius: 8px;
}

.header-section {
  width: 100%;
}

.image-container {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.character-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.character-title {
  margin-top: 10px;
  font-size: 24px;
  color: white;
}

.info-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
}

.character-description {
  font-size: 14px;
  text-align: justify;
}

.character-creators {
  margin-top: 10px;
  font-size: 16px;
}

.character-creators p {
  margin-bottom: 5px;
}

.character-creators ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.character-creators li {
  margin-bottom: 5px;
}

.back-button {
  background-color: white;
  color: red;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background-color: red;
  color: white;
}
</style>
