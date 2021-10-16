import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Project from '~/pages/project/Project';
import Login from '~/pages/login/Login';
import Main from '~/pages/main/Main';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Switch>
                    <Route path={'/login'} exact component={Login} />
                    <Route path={'/project/list'} exact component={Project} />
                    <Route path={'/'} exact component={Main} />
                </Switch>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
