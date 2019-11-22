// 버전 업그레이드 때문에 data가 prependData로 바꼈구나... 

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/design-tokens/typography/font-face.scss";
          @import "@/assets/scss/design-tokens/typography/typography-0+.scss";
          @import "@/assets/scss/design-tokens/typography/typography-600+.scss";
          @import "@/assets/scss/design-tokens/typography/typography-900+.scss";
          @import "@/assets/scss/design-tokens/typography/typography-1200+.scss";
          @import "@/assets/scss/design-tokens/utilities/colors.scss";
          @import "@/assets/scss/design-tokens/utilities/grids.scss";

        `
      }
    }
  }
};