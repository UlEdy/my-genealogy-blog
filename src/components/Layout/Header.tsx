// interface
import { HeaderProps } from '@interface';

// style
import {
    HeaderWrapper,
    HeaderImg,
    HeaderText,
    HeaderBackground,
} from './Layout.styles';

import { TextStyle } from '@styles';
export const Header: React.FC<HeaderProps> = ({ header, quote }) => {
    return (
        <HeaderWrapper>
            <HeaderImg>
                <HeaderText className='header-text'>
                    <TextStyle
                        shadow
                        as='h1'
                    >
                        {header}
                    </TextStyle>
                    <TextStyle shadow>{quote}</TextStyle>
                </HeaderText>
                <HeaderBackground />
            </HeaderImg>
        </HeaderWrapper>
    );
};
