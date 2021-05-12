import { useHistory } from 'react-router-dom';

const isGuest = (WrappedComponent) => {
    
    const Component = (props) => {
        const history = useHistory();

        if (localStorage['auth']) {
            history.push('/categories/all');
            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
}

export default isGuest;