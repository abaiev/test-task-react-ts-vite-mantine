export type Setting = {
  /** label - defines settings item label */
  label: string;
  /** name - defines settings item name (used for form) */
  name: string;
  /** selected - defines that settings is selected (enabled) */
  selected: boolean;
  /** disabled - defines that settings item is disabled */
  disabled: boolean;
}

export enum SettingType {
  /** Profile - settings related to profile */
  Profile = 'profile',
  /** Account - settings related to account */
  Account = 'account'
}
