import { i18n } from "@/i18n";
import { config } from "@vue/test-utils";

config.global.mocks = {
  $t: (msg: string) => i18n.global.t(msg),
  $i18n: i18n.global,
};
