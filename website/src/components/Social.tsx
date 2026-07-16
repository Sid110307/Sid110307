import type { IconType } from "react-icons";
import {
  BiLogoDevTo,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const ICONS: Record<string, IconType> = {
  GitHub: BiLogoGithub,
  LinkedIn: BiLogoLinkedin,
  "X/Twitter": BiLogoTwitter,
  "DEV Community": BiLogoDevTo,
};

interface SocialIconProps {
  label: string;
}

export default function SocialIcon({ label }: SocialIconProps) {
  const Icon = ICONS[label];

  return Icon ? (
    <Icon aria-hidden="true" focusable="false" />
  ) : null;
}
