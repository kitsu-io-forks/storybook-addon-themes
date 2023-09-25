# Storybook Addon Themes

Greatly inspired by [@storybook/addon-backgrounds](https://github.com/storybooks/storybook/tree/next/addons/backgrounds).

This Storybook Theme Decorator can be used to add a custom HTML class or classes to the preview in [Storybook](https://storybook.js.org).

![Demo](media/demo.gif)

## Compatibility

This version is compatible with storybook version `7.0.x`.

## Installation

```sh
npm i -D @kitsu-io-forks/storybook-addon-themes
```

## Getting started

Then activate the addon by adding it to the storybook `main.js` file (located in the Storybook config directory):

```jsx
module.exports = {
  addons: [
    // Maybe other addons here...
    'storybook-addon-themes',
    // Or here...
  ],
};
```

See the [storybook documentation](https://storybook.js.org/docs/addons/using-addons/) for more informations.

## Configuration

The `themes` parameter accepts the following `Config` object:

- `default` (`string` - optional): Value of theme selected by default
- `clearable` (`boolean` - optional - default is `true`): Can the user clear the selected theme ?
- `options` (`Theme[]` - required): The list of themes
- `target` (`string` - optional): Target element selected with `document.querySelector()` to which classes are applied. Defaults to `body`.
- `property` (`string` - optional): The HTML attribute to which the theme value is assigned. Defaults to `class`.

Each `Theme` under `options` is an object with the following properties:

- `name` (`string`): Display name for the theme
- `value` (`string`): Property value for the theme
- `color` (`string`): The color of the badge in the theme selector
- `default` [_deprecated_] (`boolean` - optional): Is the theme selected by default?

You define this in your storybook `preview.js` file:

```jsx
export const parameters = {
  themes: {
    default: 'theme-twt',
    list: [
      { name: 'twitter', value: 'theme-twt', color: '#00aced' },
      { name: 'facebook', value: 'theme-fb', color: '#3b5998' },
    ],
  },
};
```

See the [storybook documentation](https://storybook.js.org/docs/addons/using-addons/#global-configuration) for more information.
