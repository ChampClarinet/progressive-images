import { useEffect, MutableRefObject } from 'react';

interface IUseIntersectionObserver {
    target: MutableRefObject<any> | undefined;
    onIntersect: IntersectionObserverCallback;
    threshold?: number;
    rootMargin?: string;
}
const useIntersectionObserver = ({
    target,
    onIntersect,
    threshold = 0.1,
    rootMargin = "0px"
}: IUseIntersectionObserver) => {
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, {
            rootMargin,
            threshold,
        });
        const current = target?.current;

        observer.observe(current);

        return () => observer.observe(current);
    });

}

export default useIntersectionObserver;