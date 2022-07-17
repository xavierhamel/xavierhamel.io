import { useState } from 'react';
import Link from 'next/link';

import styles from '../../styles/Nav.module.css';

import Button from '../loc/Button';
import Squiggly from '../loc/Squiggly';

const NavButton = ({label, anchor}) => {
    return (
        <a className={styles.button} href={`#${anchor}`}>
            <p>{label}</p>
            <Squiggly style="yellow" />
        </a>
    )
};

const Nav = ({lang}) => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const BUTTONS = [
        {
            anchor: 'about',
            label: lang.about.title,
        },
        {
            anchor: 'work',
            label: lang.work.title,
        },
        {
            anchor: 'skill',
            label: lang.skill.title,
        }
    ];
    const otherLocale = lang.lang === 'fr' ? 'en' : 'fr';
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                Xavier Hamel.
            </div>
            <div className={styles.spacer}></div>
            <div 
                className={styles.burgerButton}
                onClick={() => setIsDropDownVisible(!isDropDownVisible)}>
                <div />
            </div>
            <div className={[styles.buttons, isDropDownVisible ? null : styles.buttonsHide].join(' ')}>
                <div className={styles.spacer}></div>
                {BUTTONS.map(({ label, anchor }, index) => {
                    return <NavButton key={index} label={label} anchor={anchor} />;
                })}
                <Button.Button color="yellow" style="solid" anchor="contact">
                    {lang.contact.contact_me}
                </Button.Button>
                <Link href="/" locale={otherLocale}>
                    <div className={styles.button}>
                        <p>{otherLocale}</p>
                        <Squiggly style="yellow" />
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Nav;
