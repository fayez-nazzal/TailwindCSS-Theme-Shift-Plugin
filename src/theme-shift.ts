import plugin from 'tailwindcss/plugin';

interface IConfigColor {
  [key: string]: Record<string, string>;
}

export = (configColors: IConfigColor[] | string[]) =>
  plugin(({ addVariant, e }) => {
    let themes: string[] = [];

    // if the user provided an array of themes, use that
    if (Array.isArray(configColors)) {
      themes = configColors as string[];
    } else {
      // otherwise, get the themes from the configColors object which exists in tailwind.config.js
      const values = Object.values(configColors) as Record<string, string>[]; // TODO: fix this type
      for (const value of values) {
        themes.push(...Object.keys(value));
      }
    }

    // remove duplicates
    themes = [...new Set(themes)];

    for (const theme of themes) {
      // @ts-ignore
      addVariant(theme, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }: { className: string }) => {
          return `.${theme} .${e(`${theme}${separator}${className}`)}`;
        });
      });
    }
  });
