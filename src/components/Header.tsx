/** @format */

// interface
import { HeaderProps } from '../interface/interface';

// style
import '../assets/css/style.css';

const Header: React.FC<HeaderProps> = ({ headerText, paragraphText }) => {
    return (
        <header>
            <div className='header-img'>
                <div className='header-text'>
                    <h1>{headerText}</h1>
                    <p>{paragraphText}</p>
                </div>
                <div className='header-bg'></div>
            </div>
        </header>
    );
};

export default Header;
