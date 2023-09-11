import { FC, useCallback } from "react";
import { Flex, Text} from "@mantine/core";
import { useLocalStorage } from '@mantine/hooks';
import SettingsItem from "./SettingsItem/SettingsItem";
import SettingsBox from "./SettingsBox/SettingsBox";
import { Modal, Separator, Switch } from "../../components";
import { DEFAULT_ACCOUNT_SETTINGS, DEFAULT_PROFILE_SETTINGS } from "./constants";
import { Setting, SettingType } from "./types";

import useStyles from "./styles";

interface SettingsProps {
  /** onClose - a callback function to be called by clicking on close (outside) button*/
  onClose: () => void;
}

const Settings:FC<SettingsProps> = ({ onClose }) => {
  const [profileSettings, setProfileSettings] = useLocalStorage<Setting[]>({ key: 'profileSettings', defaultValue: DEFAULT_PROFILE_SETTINGS, getInitialValueInEffect: false });
  const [accountSettings, setAccountSettings] = useLocalStorage<Setting[]>({ key: 'accountSettings', defaultValue: DEFAULT_ACCOUNT_SETTINGS, getInitialValueInEffect: false });

  const { classes: { separator } } = useStyles();

  const handleSettingsChange = useCallback((settingType: SettingType, { name, checked }: { name: string, checked: boolean }) => {
    const setSettings = settingType === 'profile' ? setProfileSettings : setAccountSettings;

    setSettings(prevSettings => prevSettings.map(setting => setting.name === name
      ? ({ ...setting, selected: checked })
      : setting
    ));
  }, [setAccountSettings, setProfileSettings]);

  const modalHeader = (
    <Flex justify="space-between" align="center">
      <Text size="lg" weight="bold" color='gray.0'>Personalization Settings</Text>
      <Switch label="Use Account Research" labelPosition="left" size="md" defaultChecked />
    </Flex>
  );

  return (
    <Modal
      opened
      onClose={onClose}
      header={modalHeader}
      closeOnClickOutside
      withCloseButton={false}
    >
      <SettingsBox title='Profile: '>
        {profileSettings.map(({ label, name, disabled, selected }) => (
          <SettingsItem
            key={name}
            label={label}
            name={name}
            isSelected={selected}
            disabled={disabled}
            settingType={SettingType.Profile}
            onChange={handleSettingsChange}
          />
        ))}
      </SettingsBox>
      <Separator color="green.8" classNames={{ root: separator }} />
      <SettingsBox title='Account: '>
        {accountSettings.map(({ label, name, disabled, selected }) => (
          <SettingsItem
            key={name}
            label={label}
            name={name}
            isSelected={selected}
            disabled={disabled}
            settingType={SettingType.Account}
            onChange={handleSettingsChange}
          />
        ))}
      </SettingsBox>
    </Modal>
  )
};

export default Settings;
