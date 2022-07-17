import utils from '../styles/utils.module.css';

const DEFAULT = 'white';
const COLORS = {
    blue: [utils.bgBlue, utils.fgWhite],
    yellow: [utils.bgYellow, utils.fgBlack],
    black: [utils.bgBlack, utils.fgWhite],
    green: [utils.bgGreen, utils.fgBlack],
    white: [utils.bgWhite, utils.fgBlack],
};

const COLORS_INVERTED = {
    blue: [utils.bgWhite, utils.fgBlue],
    yellow: [utils.bgBlack, utils.fgYellow],
    black: [utils.bgWhite, utils.fgBlack],
    green: [utils.bgBlack, utils.fgGreen],
    white: [utils.bgBlack, utils.fgWhite],

}
const COLORS_OUTLINED = {
    blue: [utils.bgBlue, utils.fgBlue, utils.border],
    yellow: [utils.bgYellow, utils.fgYellow, utils.border],
    black: [utils.bgBlack, utils.fgBlack, utils.border],
    green: [utils.bgGreen, utils.fgGreen, utils.border],
    white: [utils.bgWhite, utils.fgWhite, utils.border],
}

const colors = (color, style) => {
    if (Array.isArray(style)) {
        style = style.join('-');
    }
    switch (style) {
        case 'outline':
            return COLORS_OUTLINED[color] ?? COLORS_OUTLINED[DEFAULT];
        case 'inverted':
            return COLORS_INVERTED[color] ?? COLORS_INVERTED[DEFAULT];
        case 'solid':
        default:
            return COLORS[color] ?? COLORS[DEFAULT];

    }
}

export default colors;
