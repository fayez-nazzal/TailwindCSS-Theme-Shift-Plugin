# TailwindCSS Theme Shift Plugin

<img src="https://user-images.githubusercontent.com/49946791/218137658-2a0ace5c-b9e9-4bd1-86aa-adb6f441cba5.png" />
<br />
<br />

Add multiple themes to your TailwindCSS project with autoMap classes support --- Fast and Easy 🥞

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

You can use your themes like the following:
```html
<h1 class="bg-background-light dark:bg-background-dark colorblind:bg-background-colorblind">
  Let's go!
</h1>
```

## Auto map class names to the active theme, you will feel like they are dynamic!

That's a long class name right? pass `true` as a second argument to allow yourself to drastically use shorter class names :D

```js
...
module.exports = {
  theme: {
    extend: {
      colors,
    },
  },  plugins: [
    require("tailwindcss-theme-shift")(colors, true)
  ]
}
```

Now you can use one class name that auto maps to all of your themes, and the correct class will be applied for the active theme.
```html
<h1 class="bg-background">
  Let's go!
</h1>
```

NOTE: To use this plugin, you need to NOT use the `DEFAULT` property in your config colors, as it leads to circular dependency when the `autoMap` argument is given. If you do, an error will be thrown asking you to remove those.


## License

MIT

</div>
