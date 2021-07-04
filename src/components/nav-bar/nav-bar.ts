import { LOGO_IMAGE, NAV_ROUTES } from "@/constants";
import LanguageToggle from "@/components/language-toggle/language-toggle.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    LanguageToggle,
  },
})
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

  /**
   * Event fired on window resize.
   * Checks a threshold of 786 pixels of width to change the mode to wide (more than 786px).
   * When wide mode is disabled, it also hides the menu.
   */
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

  /**
   * Event fired on window scroll.
   * Checks the scroll position, if the navbar is at the top, it sets a custom styling.
   */
  onScroll(): void {
    if (window.scrollY <= 155) {
      if (this.scrolling) {
        this.scrolling = false;
      }
    } else if (!this.scrolling) {
      this.scrolling = true;
    }
  }

  /**
   * Field to check if menu (element containing the links to subpages) must be displayed.
   * It is displayed on desktop view (wide) OR on mobile when it is active (user toggled it).
   */
  get showMenu(): boolean {
    return this.wide || this.activeMenu;
  }

  /**
   * Field to check if nav bar is transparent or opaque.
   * Nav bar should be opaque when the user is scrolling through the page OR when on mobile the menu is showing.
   */
  get isOpaque(): boolean {
    return this.wide ? this.scrolling : this.scrolling || this.activeMenu;
  }

  /**
   * Toggles the menu. On mobile it shows/displays (see showMenu);
   */
  toggleMenu(): void {
    this.activeMenu = !this.activeMenu;
  }
}
