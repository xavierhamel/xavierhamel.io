import utils from '../../styles/utils.module.css';
import styles from '../../styles/loc.module.css';
import colors from '../colors';


const Section = ({style, children}) => {
    return (
        <div className={[styles.section, ...colors(style), utils.noBorder].join(" ")}>
            {style === 'cross' && <div className={utils.bgCross}></div>}
            <div className={styles.sectionContent}>
                {children}
            </div>
        </div>
    )
};

export default Section;
