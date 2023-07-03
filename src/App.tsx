// components
import Content from '@/pages/Content';
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
