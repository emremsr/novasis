import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { public_key } from "@/marvel";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    character: [],
    url: "",
  },
  mutations: {
    getCharacters(state) {
      state.characters = [];
      axios
        .get(
          `http://gateway.marvel.com/v1/public/comics?apikey=${public_key}`
        )
        .then((result) => {
          result.data.data.results.forEach((item) => {
            state.characters.push(item);
            state.url = `${item.thumbnail.path}/`;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCharacter(state, id) {
      state.character = [];
      axios
        .get(
          `http://gateway.marvel.com/v1/public/comics/${id}?apikey=${public_key}`
        )
        .then((result) => {
          result.data.data.results.forEach((item) => {
            state.character.push(item);
            console.log(item);
            state.url = `${item.thumbnail.path}/`;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  actions: {
    getCharacters: (context) => {
      context.commit("getCharacters");
    },

    getCharacter: (context, id) => {
      context.commit("getCharacter", id);
    },
  },
});
