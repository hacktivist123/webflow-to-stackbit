import dynamic from 'next/dynamic';

const components = {
    'Button': dynamic(() => import('./Button')),
    'Page': dynamic(() => import('./Page')),
    'Container': dynamic(() => import('./Container')),
    'hero': dynamic(() => import('./Hero')),
    'postFeed': dynamic(() => import('./PostFeed')),
    'Post': dynamic(() => import('./Post')),
    'Footer' : dynamic(() => import('./Footer')),
    'Icon' : dynamic(() => import('./Icon')),
    'IconsField': dynamic(() => import('./IconsField')),
    'SquareButton': dynamic(() => import('./SquareButton'))
};

export function getComponent(type) {
    return components[type];
}
