import { Switch, Route } from 'react-router-dom';
import ArticleList from './containers/ArticleList';
import ArticleDetails from './containers/ArticleDetails';


const BaseRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ArticleList} />
                <Route exact path="/:articleID" component={ArticleDetails} />
            </Switch>
        </div>
    );
}
 
export default BaseRouter;