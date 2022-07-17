import styles from '../../styles/loc.module.css';

const Squiggly = ({style}) => {
    const color = style.charAt(0).toUpperCase() + style.slice(1).toLowerCase();
    return (
        <div className={styles.squiggly}>
            <div className={[styles.squigglyInnerTop, styles[`squiggly${color}`]].join(' ')}></div>
            <div className={[styles.squigglyInnerBottom, styles[`squiggly${color}`]].join(' ')}></div>
        </div>
    )
};

export default Squiggly;
