import { Vue, prop } from "vue-class-component";

class Props {
  // optional prop
  text = prop({
    type: String,
    required: false,
  });

  image = prop({
    required: false,
  });

  altText = prop({
    type: String,
    required: false,
  });

  // optional prop with default
  aspectRatio = prop<string>({ default: "default value" });
}

export default class HomeCard extends Vue.with(Props) {
  mounted() {
    if (this.image) {
      this.text = undefined;
    }
  }
}
