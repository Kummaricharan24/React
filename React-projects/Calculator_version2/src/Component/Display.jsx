import styles from '../App.module.css';

function Display({ value }) {
    return (
        <input
            id="display"
            className={styles.display}
            type="text"
            value={value}
            readOnly
        />
    );
};
export default Display;