import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

export function LocationPin({ text }) {
  return (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
}
