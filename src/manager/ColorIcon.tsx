import { styled } from '@storybook/theming';

export const ColorIcon = styled.span(
  ({ background }: { background?: string }) => ({
    borderRadius: '1em',
    display: 'block',
    height: '1em',
    width: '1em',
    boxSizing: 'border-box',
    border: `1px solid currentColor`,
    background,
  })
);
