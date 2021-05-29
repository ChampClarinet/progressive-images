import React from 'react';
import styled from 'styled-components';
import images from './images.json';
import ImageComponent from './image-container';

export default function AppComponent() {
    return (
        <App>
            <div className="container">
                {images.map(res => (
                    <div className="wrapper" key={res.id}>
                        <ImageComponent
                            src={res.urls.regular}
                            thumb={res.urls.thumb}
                            height={res.height}
                            width={res.width}
                            alt={res.alt_description} />
                    </div>
                ))}
            </div>
        </App>
    )
}

const App = styled.div`
display: flex;
justify-content: center;
padding-top: 1em;

.container {
    width: 100%;
    max-width: 600px;
}

.wrapper {
    padding: 1em 0;
}
`;