import { useEffect, useState } from 'react';
import { useMountedState } from 'react-use';

const useSidebarVisible = () => {
    const [visible, setVisible] = useState(false);
    const isMounted = useMountedState();

    useEffect(() => {
        logseq.App.onSidebarVisibleChanged(({ visible }) => {
            if (isMounted()) {
                setVisible(visible);
            }
        });
    }, []);

    return visible;
};

export default useSidebarVisible;
