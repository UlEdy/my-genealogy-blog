// interface
import { HeaderProps } from '@/interface/interface';

// style
import { HeaderWrapper } from './Header.styles';

const Header: React.FC<HeaderProps> = ({ headerText, paragraphText }) => {
    return (
        <HeaderWrapper>
            <div className='header-img'>
                <div className='header-text'>
                    <h1>{headerText}</h1>
                    <p>{paragraphText}</p>
                </div>
                <div className='header-bg'></div>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
