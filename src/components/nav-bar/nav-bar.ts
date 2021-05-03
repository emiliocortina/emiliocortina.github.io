import { LOGO_IMAGE, NAV_ROUTES } from "@/constants";
import { Vue } from "vue-class-component";

export default class NavBar extends Vue {
  logoImage = LOGO_IMAGE;
  navRoutes = NAV_ROUTES;
  activeMenu = true;
  wide = false;
  scrolling = true;

  created(): void {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onResize);
    this.onScroll();
    this.onResize();
  }

  onResize(): void {
    if (window.matchMedia("(max-width: 786px)").matches) {
      if (this.wide === true) {
        this.wide = false;
        this.activeMenu = false;
      }
    } else {
      if (this.wide === false) {
        this.wide = true;
      }
    }
  }

  onScroll(): void {
    if (window.scrollY <= 155) {
      this.setStyleTop();
    } else if (!this.scrolling) {
      console.log("scrollin");
      this.scrolling = true;
    }
  }

  setStyleTop(): void {
    if (this.showMenu) {
      return;
    }
    if (this.scrolling === true) {
      this.scrolling = false;
    }
  }

  get showMenu(): boolean {
    return this.wide || this.activeMenu;
  }

  get isOpaque(): boolean {
    return this.wide ? this.scrolling : this.scrolling || this.activeMenu;
  }

  toggleMenu(): void {
    this.activeMenu = !this.activeMenu;
  }
}
