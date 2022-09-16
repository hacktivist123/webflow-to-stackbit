import dynamic from 'next/dynamic';

const components = {
    'Button': dynamic(() => import('./Button')),
    'Page': dynamic(() => import('./Page')),
    'Container': dynamic(() => import('./Container')),
    'HeroBanner': dynamic(() => import('./HeroBanner'))
};

export function getComponent(type) {
    return components[type];
}
