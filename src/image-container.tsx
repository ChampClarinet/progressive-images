import React, { useState, useRef, RefObject } from 'react';
import styled from 'styled-components';
import Image from './components/image';
import useIntersectionObserver from './hooks/use-intersection-observer';

interface IImageComponent {
    height: number;
    width: number;
    src: string;
    thumb: string;
    alt: string | null;
}
const ImageComponent = ({ height, width, src, thumb, alt }: IImageComponent) => {
    const ref = useRef<HTMLDivElement>();
    const [isVisible, setIsVisible] = useState(false);

    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setIsVisible(true);
                observerElement.unobserve(ref?.current as Element);
            }
        }
    });

    const aspectRatio = (height / width) * 100;
    return (
        <ImageContainer
            ref={ref as RefObject<HTMLDivElement>}
            aspectRatio={aspectRatio} >
            {isVisible && (
                <Image
                    src={src}
                    alt={alt || undefined}
                    thumb={thumb} />
            )}
        </ImageContainer>
    )
}

interface IRatio { aspectRatio: number }
const ImageContainer = styled.div<IRatio>`
padding-bottom: ${({ aspectRatio }) => aspectRatio}%;
position: relative;
overflow: hidden;
background: rgba(0, 0, 0, 0.05);
`;

export default ImageComponent;