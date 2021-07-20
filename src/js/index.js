import { Cursor } from "./cursor";
import { Item } from "./item";
import data from "./data.json";

// vue instance
var app = new Vue({
  el: "#app",
  data: {
    data,
    search: "",
    length: 5
  },
  computed: {
    sortArray() {
      return this.data.sort((a, b) => a.Fullname.localeCompare(b.Fullname));
    },
    filteredList() {
      return this.sortArray.filter((post) => {
        return post.Fullname.toLowerCase().includes(this.search.toLowerCase());
      });
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
    // Scroll Event
    this.$nextTick(function () {
      window.addEventListener("scroll", this.onScroll);
      this.onScroll(); // needed for initial loading on page
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      var itemList = this.$refs["itemList"];
      if (itemList) {
        var marginTopUsers = itemList.getBoundingClientRect().top;
        var innerHeight = window.innerHeight;

        if (marginTopUsers - innerHeight < -50) {
          this.getItemList();
        }
      }
    },
    getItemList(){
      // console.log('Hello')
    },
    reformLink(url) {
      url ? (url = new URL(url)) : "";
      const imageId = new URLSearchParams(url.search).get("id");
      return `https://drive.google.com/uc?export=view&id=${imageId}`;
    },
  },
});
