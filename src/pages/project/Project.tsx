import useProjectQuery from '~/api/query/useProjectQuery';
import { ReactElement } from 'react';

function Project(): ReactElement {
    const { getProjectQuery } = useProjectQuery();

    const { data, isLoading } = getProjectQuery(12);

    console.log('isLoading', isLoading);
    console.log('data', data);

    return <div>프로젝트</div>;
}

export default Project;
