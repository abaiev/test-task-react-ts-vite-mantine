import { memo, FC, ChangeEvent } from 'react';
import { Flex } from "@mantine/core";
import { Checkbox, Badge } from "../../../components";
import { SettingType } from "../types";

interface SettingsItemProps {
  /** settingType - defines setting type */
  settingType: SettingType;
  /** isSelected - defines that settings is selected (enabled) */
  isSelected?: boolean;
  /** disabled - defines that settings item is disabled */
  disabled?: boolean;
  /** label - defines settings item label */
  label: string;
  /** name - defines settings item name (used for form) */
  name: string;
  /** onChange - a callback function to be called when the settings selected state changes */
  onChange: (settingType: SettingType, options: { checked: boolean, name: string }) => void;
}

const SettingsItem:FC<SettingsItemProps> = memo(({ label, name, isSelected = false, disabled = false, settingType, onChange = () => {} }) => {
  const handleChange = ({ target: { checked, name }}: ChangeEvent<HTMLInputElement>) => {
    onChange(settingType, { checked, name })
  };

  return (
    <Flex gap={16}>
      <Checkbox
        label={label}
        name={name}
        disabled={disabled}
        checked={isSelected}
        onChange={handleChange}
      />
      {disabled && <Badge status="warning">Disabled</Badge>}
    </Flex>

  )
});

export default SettingsItem;
