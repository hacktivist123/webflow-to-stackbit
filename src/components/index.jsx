import dynamic from 'next/dynamic';

const components = {
    'Button': dynamic(() => import('./Button')),
    'Page': dynamic(() => import('./Page')),
    'Container': dynamic(() => import('./Container')),
    'Hero': dynamic(() => import('./Hero'))
};

export function getComponent(type) {
    return components[type];
}
