import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from '@storybook/types';
import { useEffect, useGlobals, useParameter } from '@storybook/preview-api';
import { PARAM_KEY } from './constants';
import { Config, Theme, DEFAULT_CONFIG } from './config';

const useConfig = () => useParameter<Config>(PARAM_KEY, DEFAULT_CONFIG);
const useTheme = () => useGlobals()[0][PARAM_KEY] as string | null | undefined;

export const withTheme = (
  StoryFn: StoryFunction<Renderer>,
  context: StoryContext<Renderer>
) => {
  const config = useConfig();
  const theme = useTheme();

  useEffect(() => {
    const target = document.querySelector(config?.target ?? 'body');
    if (!target) return;

    if (config?.target === 'class') {
      config.options?.forEach(
        (o) => o.value && target.classList.remove(o.value)
      );
      if (theme) {
        target.classList.add(theme);
      }
    } else if (config?.property) {
      target.setAttribute(config?.property, theme ?? '');
    }
  }, [config?.property, config?.target, theme]);

  return StoryFn();
};
