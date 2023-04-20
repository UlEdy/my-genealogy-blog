// interface
import { HeaderProps } from '@/interface/interface';

// style
import {
    HeaderWrapper,
    HeaderImg,
    HeaderText,
    HeaderBackground,
} from './Header.styles';

const Header: React.FC<HeaderProps> = ({ headerText, paragraphText }) => {
    return (
        <HeaderWrapper>
            <HeaderImg>
                <HeaderText className='header-text'>
                    <h1>{headerText}</h1>
                    <p>{paragraphText}</p>
                </HeaderText>
                <HeaderBackground />
            </HeaderImg>
        </HeaderWrapper>
    );
};

export default Header;
