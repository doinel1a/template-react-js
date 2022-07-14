import { useStateContext } from '../contexts/ContextProvider';

import { Paragraph } from './Text';

import { BG_PRIMARY_DARK, BG_PRIMARY_LIGHT } from '../const/COLORS';

const Footer = () => {
    const { isDarkMode } = useStateContext();

    return (
        <footer
            className={` 
                w-full footer-h fixed bottom-0 z-10 flex justify-center items-center border-t transition-colors 
                ${isDarkMode ? BG_PRIMARY_DARK : BG_PRIMARY_LIGHT}
            `}
        >
            <Paragraph text='© 2022 — D1A' customCss='cursor-default' />
        </footer>
    );
};

export default Footer;
