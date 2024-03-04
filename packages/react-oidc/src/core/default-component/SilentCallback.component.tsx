import { OidcClient } from '@uwunyaa/oidc-client';
import { ComponentType, useEffect } from 'react';

const SilentCallbackManager: ComponentType<any> = ({ configurationName }) => {
    useEffect(() => {
        const playCallbackAsync = async () => {
            const getOidc = OidcClient.get;
            const oidc = getOidc(configurationName);
            oidc.silentLoginCallbackAsync();
        };
        playCallbackAsync();
    }, []);

    return <></>;
};

export default SilentCallbackManager;
