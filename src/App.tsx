// components
import Content from '@components/Content';
import Layout from './components/Layout';

// style
import GlobalStyle from '@styles';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Layout />
            <Content />
        </>
    );
};

export default App;
