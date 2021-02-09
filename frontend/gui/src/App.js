import "antd/dist/antd.css";
import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleList';


function App() {
  return (
    <div className="">
      <CustomLayout>
        <ArticleList />
      </CustomLayout>
    </div>
  );
}

export default App;
