export interface Theme {
  name: string;
  value: string | null;
  color?: string;
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
