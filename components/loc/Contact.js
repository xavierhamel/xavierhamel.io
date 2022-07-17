import styles from '../../styles/loc.module.css';

const LINKS = {
    email: 'mailto:hire@xavierhamel.ca',
    linkedin: 'https://linkedin.com/in/hire-xavier',
    github: 'https://github.com/xavierhamel',
}
const Contact = ({type, children}) => {
    return (
        <a className={styles.contact} href={LINKS[type]} target="_blank">
            <img src={`/img/${type}-icon.png`} alt={`${type} icon`} />
            <p>{children}</p>
        </a>
    )
};

const Contacts = ({ children }) => {
    return (
        <div className={styles.contacts}>
            <div>{children}</div>
        </div>
    )
};

export default {
    Contact,
    Contacts,
}
