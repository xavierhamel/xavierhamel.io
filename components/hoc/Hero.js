import styles from '../../styles/Hero.module.css';
import utils from '../../styles/utils.module.css';

import Button from '../loc/Button';
import Section from '../loc/Section';
import Panel from '../loc/Panel';

const PROJECTS = {
    'Caliko': 'caliko',
    'Something ToDo': 'something',
    'FST Format': 'fst',
};

const Projects = () => {
    return (
        <div className={styles.projectsRow}>
            {Object.keys(PROJECTS).map((label, index) => {
                return (
                    <div className={styles.project} key={index}>
                        <div className={styles.projectImage}>
                            <img src={`/img/${PROJECTS[label]}-icon.png`} alt={`${label} icon`} />
                        </div>
                        <div className={styles.projectLabel}>{label}</div>
                    </div>
                )
            })}
        </div>
    )
}

const Hero = ({lang}) => {
    return (
        <div className={styles.container}>
            <div className={[styles.bgLeft, utils.bgCross].join(' ')} />
            <div className={[styles.bgRight, utils.bgBlue, utils.noBorder].join(' ')}>
                <div className={styles.picture} />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <div>
                        {lang.hero.titles.map((title, index) => {
                            return (
                                <h1 className={index === 0 ? utils.fgBlue : null} key={index}>
                                    {title}
                                </h1>
                            )
                        })}
                        <div className={styles.buttons}>
                            <Button.Group>
                                <Button.Button color="blue" anchor="contact">
                                    {lang.contact.contact_me}
                                </Button.Button>
                                <Button.Button color="yellow" anchor="about">
                                    {lang.about.title}
                                </Button.Button>
                            </Button.Group>
                        </div>
                        <div className={styles.projects}>
                            <h4>{lang.hero.work}</h4>
                            <Projects />
                        </div>
                    </div>
                </div>
                <div id="about" />
                <Panel.Panel title={lang.about.title} subtitle={lang.about.subtitle}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris.<br /><br />
                        Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt.<br /><br />
                        In culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel.Panel>
            </div>
        </div>
    )
};

export default Hero;
