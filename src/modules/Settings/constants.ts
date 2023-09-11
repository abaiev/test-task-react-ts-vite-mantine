import { Setting } from "./types";

export const DEFAULT_PROFILE_SETTINGS: Setting[] = [
  { label: 'Linkedin Bio', name: 'linkedin',  selected: true, disabled: false },
  { label: 'Years of experience', name: 'years_of_experience', selected: true, disabled: false },
  { label: 'Current Experience', name: 'current_experience', selected: true, disabled: false },
  { label: 'List of post jobs', name: 'list_jobs', selected: false, disabled: false },
  { label: 'Current job description', name: 'job_description', selected: false, disabled: true },
  { label: 'Current job specialities', name: 'job_specialities', selected: false, disabled: true },
];

export const DEFAULT_ACCOUNT_SETTINGS: Setting[] = [
  { label: 'Linkedin Bio', name: 'linkedin',  selected: true, disabled: false },
  { label: 'Show rating', name: 'show_rating', selected: false, disabled: true },
  { label: 'Show comments', name: 'show_comments', selected: false, disabled: false },
  { label: 'Show connections', name: 'show_connections', selected: false, disabled: true },
  { label: 'Show online status', name: 'show_online_status', selected: false, disabled: false },
];
