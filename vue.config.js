module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/global_style.scss";
          @import "@/assets/scss/design-tokens/typography/font-face.scss";
          @import "@/assets/scss/design-tokens/typography/typography-0+.scss";
          @import "@/assets/scss/design-tokens/typography/typography-600+.scss";
          @import "@/assets/scss/design-tokens/typography/typography-900+.scss";
          @import "@/assets/scss/design-tokens/typography/typography-1200+.scss";
          @import "@/assets/scss/design-tokens/utilities/colors.scss";
          @import "@/assets/scss/design-tokens/utilities/grids.scss";
          @import "@/assets/scss/design-tokens/utilities/borders.scss";
        `
      }
    }
  }
};