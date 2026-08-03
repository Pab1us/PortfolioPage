import { useState } from 'react';
import styles from "./toggleSwich.module.scss"
function ToggleSwitch({
                          initialValue = false,
                          onToggle = () => {},
                          label = '',
                          disabled = false
                      }) {
    const [isToggled, setIsToggled] = useState(initialValue);

    const handleToggle = () => {
        if (!disabled) {
            const newState = !isToggled;
            setIsToggled(newState);
            onToggle(newState);
        }
    };

    return (
        <div className={`${styles.toggleСontainer} ${disabled ? 'disabled' : ''}`}>
            {label && <span className={styles.toggleLabel}>{label}</span>}
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={isToggled}
                    onChange={handleToggle}
                    disabled={disabled}
                />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
        </div>
    );
}

export default ToggleSwitch;