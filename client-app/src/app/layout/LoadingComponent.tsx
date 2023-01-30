import { Dimmer, Loader } from 'semantic-ui-react';

export interface ILoadingComponentProps {
    inverted?: boolean
    content?: string
}

export function LoadingComponent({ inverted = true, content = 'Loading...' }: ILoadingComponentProps) {
    return (
        <Dimmer active={true} inverted={inverted} >
            <Loader content={content} />
        </Dimmer>
    );
}
