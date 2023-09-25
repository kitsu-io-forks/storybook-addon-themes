import React, { useCallback } from 'react';

import { useGlobals, useParameter } from '@storybook/manager-api';

import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from '@storybook/components';

import { PARAM_KEY } from '../constants';
import { Theme, Config, DEFAULT_CONFIG, getDefaultTheme } from '../config';

import { ColorIcon } from './ColorIcon';

const ThemeSelectorList = ({
  items,
  selected,
  onChange,
}: {
  items: Theme[];
  selected: string;
  onChange: (selected: string | null) => void;
}) => {
  const links = items.map((item) => ({
    key: item.value,
    id: item.value ?? item.name,
    title: item.name,
    value: item.value,
    onClick: () => onChange(item.value),
    right: item.color ? <ColorIcon background={item.color} /> : undefined,
    active: item.value === selected,
  }));

  return <TooltipLinkList links={links} />;
};

const useConfig = () => useParameter<Config>(PARAM_KEY, DEFAULT_CONFIG);

export function ThemeSelector() {
  const config = useConfig();
  const [globals, updateGlobals] = useGlobals();
  const [expanded, setExpanded] = React.useState(false);
  const onChange = useCallback(
    (value: string | null) => {
      updateGlobals({
        [PARAM_KEY]: value,
      });
    },
    [updateGlobals]
  );

  const themes = [...(config.options ?? [])];

  if (config.clearable) {
    themes.unshift({ name: 'Clear Theme', value: null });
  }

  if (globals[PARAM_KEY] === false) {
    const defaultTheme = getDefaultTheme(config);
    onChange(defaultTheme);
  }

  const selected = themes.find((theme) => theme.value === globals[PARAM_KEY]);

  return (
    <WithTooltip
      placement="top"
      trigger="click"
      onVisibleChange={setExpanded}
      tooltip={
        <ThemeSelectorList
          items={themes}
          selected={globals[PARAM_KEY]}
          onChange={onChange}
        />
      }
      closeOnOutsideClick
    >
      <IconButton
        key="theme"
        active={expanded}
        title="Change the theme of the preview"
      >
        <ColorIcon background={selected?.color} />
      </IconButton>
    </WithTooltip>
  );
}
