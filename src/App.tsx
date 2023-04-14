/** @format */

// import { Admin, DataProvider } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';

// const dataProvider: DataProvider = jsonServerProvider(
// 	'https://jsonplaceholder.typicode.com'
// );

// const App = () => <Admin dataProvider={dataProvider} />;
import Header from './components/Header';

const App = () => {
	return <Header />;
};

export default App;
