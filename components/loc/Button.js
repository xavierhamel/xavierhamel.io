import styles from '../../styles/loc.module.css';
import colors from '../colors';

const Group = ({children}) => {
    return (
        <div className={styles.buttonGroup}>
            {children}
        </div>
    )
}

const Inner = ({ color, style, onClick, children }) => {
    if (!style) {
        style = 'solid';
    }
    return (
        <button
            className={[styles.button, ...colors(color, style)].join(' ')}
            onClick={onClick}>
            {children}
        </button>
    );
};
const Button = ({ anchor, href, ...props }) => {
    if (anchor || href) {
        href = anchor ? `#${anchor}` : href;
        return (
            <a href={href}>
                <Inner {...props} />
            </a>
        )
    }
    return <Inner {...props} />;
};

export default { Button, Group };
