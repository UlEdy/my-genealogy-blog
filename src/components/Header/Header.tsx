// interface
import { HeaderProps } from '@interface';

// style
import {
    HeaderWrapper,
    HeaderImg,
    HeaderText,
    HeaderBackground,
} from './Header.styles';

const Header: React.FC<HeaderProps> = ({ header, quote }) => {
    return (
        <HeaderWrapper>
            <HeaderImg>
                <HeaderText className='header-text'>
                    <h1>{header}</h1>
                    <p>{quote}</p>
                </HeaderText>
                <HeaderBackground />
            </HeaderImg>
        </HeaderWrapper>
    );
};

export default Header;
