module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      gridTemplateAreas: {
        desktop: `
          "nav nav nav nav"
          "sidebar main main main"
          "sidebar content1 content2 content3"
          "sidebar footer footer footer"
        `,
        mobile: `
          "nav"
          "sidebar"
          "main"
          "content1"
          "content2"
          "content3"
          "footer"
        `,
      },
    },
  },
  plugins: [],
};
