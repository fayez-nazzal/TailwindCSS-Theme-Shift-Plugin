# TailwindCSS Theme Shift Plugin

<img src="https://user-images.githubusercontent.com/49946791/218137658-2a0ace5c-b9e9-4bd1-86aa-adb6f441cba5.png" />
<br />
<br />

Add multiple themes to your TailwindCSS project with autoMap classes support, fast and easy!

## How to use?

1. Map colors to the desired themes in your `tailwind.config.js`.
2. Add this plugin to your tailwind's config, pass those arguments in order:
    1. colors: Your tailwind config's color object.
    2. defaultTheme: The key of your default theme, e.p: "light".
    3. autoMap: A boolean that indicates whether you want to auto-map one class name to all of your themes ( `bg-primary` could map to `bg-primary dark:bg-primary-dark cosmic:bg-primary-cosmic` ).

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
  },  
  plugins: [
    require("tailwindcss-theme-shift")(colors, "light", true)
  ]
}
```

You can use your themes like the following:
```html
<h1 class="bg-background">
  Let's go!
</h1>
```

The Auto map features allows you to use drastically shorter class name, so the class name `bg-background` is a shorthand for `bg-background dark:bg-background-dark cosmic:bg-background-cosmic`. Otherwise if you decide to use the usual long names, you can pass `false`, as the third argument.

```js
...

module.exports = {
  theme: {
    extend: {
      colors,
    },
  },  
  plugins: [
    require("tailwindcss-theme-shift")(colors, true)
  ]
}
```

## License

MIT

</div>
