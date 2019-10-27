module.exports = {
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: {
          default: "var(--color-primary)",
          variant: "var(--color-primary-variant)"
        },
        secondary: {
          default: "var(--color-secondary)",
          variant: "var(--color-secondary-variant)"
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)"
        },
        error: {
          default: "var(--color-error)"
        },
        background: {
          default: "var(--color-background)"
        }
      }
    }
  },
  variants: {
    boxShadow: ["responsive"]
  },
  plugins: [],
  corePlugins: {
    fill: false
  }
};
