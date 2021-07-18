import { Cursor } from "./cursor";
import { Item } from "./item";
import data from "./data.json";

// vue instance
var app = new Vue({
  el: "#app",
  data: {
    data,
  },
  computed: {
    sortArray() {
      return this.data.sort((a, b) => a.Fullname.localeCompare(b.Fullname))
    },
  },
  mounted() {
    // initialize custom cursor
    const cursor = new Cursor(document.querySelector(".cursor"));

    // items/images elems
    [...document.querySelectorAll(".item")].forEach((item) => new Item(item));

    // mouse effects on all links
    [...document.querySelectorAll("a, .distort__img")].forEach((link) => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });
  },
  methods: {
    reformLink(url) {
      url ? (url = new URL(url)) : "";
      const imageId = new URLSearchParams(url.search).get("id");
      return `https://drive.google.com/uc?export=view&id=${imageId}`;
    },
  },
});
