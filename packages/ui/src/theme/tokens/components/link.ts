import { ColorValue, DesignToken, FontSizeValue } from '../types/designToken';

interface LinkStateTokens {
  color: DesignToken<ColorValue>;
}

interface LinkSizeTokens {
  fontSize: DesignToken<FontSizeValue>;
}

export interface LinkTokens {
  active: LinkStateTokens;
  color: DesignToken<ColorValue>;
  focus: LinkStateTokens;
  hover: LinkStateTokens;
  visited: LinkStateTokens;
  _active: LinkStateTokens;
  _focus: LinkStateTokens;
  _hover: LinkStateTokens;
  _visited: LinkStateTokens;
}

export const link: LinkTokens = {
  active: {
    color: { value: '{colors.font.active.value}', deprecated: true },
  },
  color: { value: '{colors.font.interactive.value}' },
  focus: {
    color: { value: '{colors.font.focus.value}', deprecated: true },
  },
  hover: {
    color: { value: '{colors.font.hover.value}', deprecated: true },
  },
  visited: {
    color: { value: '{colors.font.interactive.value}', deprecated: true },
  },
  _active: {
    color: { value: '{colors.font.active.value}' },
  },
  _focus: {
    color: { value: '{colors.font.focus.value}' },
  },
  _hover: {
    color: { value: '{colors.font.hover.value}' },
  },
  _visited: {
    color: { value: '{colors.font.interactive.value}' },
  },
};
