import plugin from 'tailwindcss/plugin';

type IConfigColor = Record<string, Record<string, string>>;

/***
 * Tailwind CSS Theme Shift Plugin
 * @param configColors - An array of theme names or an object of theme names and colors
 * @param autoMap - Automatically map each color to the corresponding theme using a single class name, e.g. `bg-primary` could map to `light:bg-primary-light dark:bg-primary-dark`
 */
export = (configColors: IConfigColor, autoMap?: boolean) =>
  plugin(({ addVariant, addUtilities, e }) => {
    let themes: string[] = [];

    // get the themes from the configColors object which exists in tailwind.config.js
    const values = Object.values(configColors) as Record<string, string>[]; // TODO: fix this type
    for (const value of values) {
      themes.push(...Object.keys(value));
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

    if (autoMap) {
      const colorEntries = Object.entries(configColors);

      const tailwindClasses = [
        'bg',
        'text',
        'border',
        'border-t',
        'border-b',
        'border-l',
        'border-r',
        'ring',
        'ring-offset',
        'outline',
        'decoration',
        'divide',
        'from',
        'via',
        'to',
      ];

      const suffixes = [...range(10, 100, 10).map((value) => `\\/${value}`), ''];

      for (let i = 0; i < colorEntries.length; i++) {
        const [name, values] = colorEntries[i];
        const valuesKeys = Object.keys(values);

        if (valuesKeys.includes('DEFAULT')) {
          throw new Error(
            `colors with 'DEFAULT' value are not supported. Please remove the 'DEFAULT' value from '${name}'`,
          );
        }

        for (const tailwindClass of tailwindClasses) {
          for (const suffix of suffixes) {
            const className = `${tailwindClass}-${name}${suffix}`;

            const applyClasses = valuesKeys
              .map((value) => `${tailwindClass}-${name}-${value}${suffix.replace('\\', '')}`)
              .join(' ');

            addUtilities({
              [`.${className}`]: {
                [`@apply ${applyClasses}`]: '',
              },
            });
          }
        }
      }
    }
  });

const range = (start: number, end: number, step: number) => {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};
