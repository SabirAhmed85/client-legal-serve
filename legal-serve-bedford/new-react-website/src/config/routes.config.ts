import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Route = {
  readonly path: string;
  readonly icon: IconProp;
  readonly exact?: boolean;
  readonly displayName: string;
  readonly activeClassName: string;
  readonly metaInfo: {
    readonly title?: string;
    readonly description?: string;
  };
};

export const RoutesConfig = Object.freeze<Record<string, Route>>({
  Home: {
    path: '/',
    exact: true,
    displayName: 'Home',
    activeClassName: 'is-active',
    icon: 'home',
    metaInfo: {
      title: 'Process Server Bedford &amp; London | Legal Serve',
      description: 'Bedfordshire, Buckinghamshire &amp; London-based process server, legal courier &amp; legal document server.'
    }
  },
  Services: {
    path: '/our-services',
    exact: true,
    displayName: 'Services',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'Our Services | Process Serving, Legal Courier Services',
      description: 'Process Serving &amp; Legal Courier Services in London, Bedfordshire &amp; Buckinghamshire'
    }
  },
  Contact: {
    path: '/contact',
    exact: true,
    displayName: 'Contact',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'Process Serving Enquiries | Contact Legal Serve Bedford',
      description: 'Enquire about your next Process Server.'
    }
  }
  /*,
  About: {
    path: '/about',
    exact: true,
    displayName: 'About',
    activeClassName: 'is-active',
    icon: 'info',
    metaInfo: {
      title: 'About | ReactSeoFriendlySpaTemplate',
      description: 'About page description - limit of 160 characters (try for 150-155).'
    }
  }*/
});
