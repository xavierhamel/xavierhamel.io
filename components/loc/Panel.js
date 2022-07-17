import styles from '../../styles/loc.module.css';
import utils from '../../styles/utils.module.css';
import colors from '../colors';

const SplitPanelImage = ({image}) => {
    return (
        <div className={styles.splitPanelImage}>
            <img src={image} alt="split panel" />
        </div>
    );
};

const Split = ({ children, image, style, isLayoutInverted }) => {
    return (
        <div className={[styles.splitPanel, ...colors(style), utils.noBorder].join(' ')}>
            {!isLayoutInverted && <SplitPanelImage image={image} />}
            <div className={styles.splitPanelContent}>
                {children}
            </div>
            {isLayoutInverted && <SplitPanelImage image={image} />}
        </div>
    )
};

const Panel = ({title, subtitle, children}) => {
    return (
        <div className={styles.panel}>
            <div className={[styles.panelContent, ...colors('black'), utils.noBorder].join(' ')}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                {children}
            </div>
        </div>
    );
};

const HeaderWithIcons = ({title, icons}) => {
    return (
        <div className={styles.panelHeader}>
            <h2>{title}</h2>
            <div className={styles.panelHeaderIcons}>
                {icons.map((icon, index) => {
                    return <img key={index} src={`/img/${icon}-icon.png`} alt={icon} />;
                })}
            </div>
        </div>
    )
}

export default {Panel, Split, HeaderWithIcons};
