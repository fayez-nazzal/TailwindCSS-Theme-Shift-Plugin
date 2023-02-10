# TailwindCSS Theme Shift Plugin

<img src="./logo.png" />
<br />

Add multiple themes to your TailwindCSS project with variants support, fast and easy 🥞
<br />

## How to use?

1. Map colors to the desired themes in your `tailwind.config.js`.
2. Add this plugin in tailwind's config `plugins`, you can either pass an array of theme names or your full colors config.
3. Use your new theme variants ⏩.

Your final config could look something similar to this:
```js
/** @type {import('tailwindcss').Config} */

const colors = {
  background: {
    light: "#f6f6f6",
    dark: "#282A3A",
    cosmic: "#50577A",
  },
  primary: {
    light: "#6D67E4",
    dark: "#46C2CB",
    cosmic: "#892CDC",
  }
}

module.exports = {
  theme: {
    extend: {
      colors,
    },
  },  plugins: [
    require("tailwindcss-theme-shift")(colors)
  ]
}
```

OR

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f6f6f6",
          dark: "#282A3A",
          cosmic: "#50577A",
        },
        primary: {
          light: "#6D67E4",
          dark: "#46C2CB",
          cosmic: "#892CDC",
        }
      },
    },
  },  plugins: [
    require("tailwindcss-theme-shift")(["light", "dark", "cosmic"])
  ]
}
```

You can use your themes like the following:
```html
<h1 class="bg-background-light dark:bg-background-dark colorblind:bg-background-colorblind">
  Let's go!
</h1>
```

That's a long class name for a simple background right? You can use the [tailwindcss-themed-class](https://www.npmjs.com/package/tailwindcss-themed-class) plugin to drastically make your class names shorter :D

## License

MIT

</div>
