import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, TOOL_ID } from './constants';

import { ThemeSelector } from './manager/index';

// Register the addon
addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    title: 'Themes',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: ThemeSelector,
  });
});
