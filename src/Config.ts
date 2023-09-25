export interface Theme {
  name: string;
  value: string | null;
  color?: string;
  /**
   * @deprecated Use `Config.default` instead
   */
  default?: boolean;
}

export interface Config {
  clearable?: boolean;
  default?: string;
  property?: string;
  options?: Theme[];
  target?: string;
}

export const DEFAULT_CONFIG: Config = {
  clearable: false,
  default: undefined,
  property: 'class',
  options: [],
  target: 'body',
};

export function getDefaultTheme(config: Config): string | null {
  if (config.default) {
    return config.default;
  } else {
    return config.options?.find((opt) => opt.default)?.value ?? null;
  }
}
