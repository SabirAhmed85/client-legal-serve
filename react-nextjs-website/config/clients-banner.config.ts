export type ClientLogoInfo = {
  readonly imageUrl: string;
  readonly altTag: string;
  readonly region: string[];
  readonly type: string;
  readonly default?: boolean;
};

export type ClientsBannerPanelConfig = {
  readonly clientType?: string;
  readonly region?: string;
};

export type ClientsBannerConfig = {
  panels: ClientsBannerPanelConfig[];
};

export const ClientsLogos = Object.freeze<Record<string, ClientLogoInfo>>({
  bedfordCouncil: {
    imageUrl: 'bedford-borough-council-client-logo.png',
    altTag: 'Bedford Borough Council Logo',
    region: ['bedfordshire'],
    type: 'local-authority',
    default: true
  },
  boltonCouncil: {
    imageUrl: 'bolton-council-client-logo.png',
    altTag: 'Bolton Council Logo',
    region: ['surrounding'],
    type: 'local-authority',
    default: true
  },
  powysCouncil: {
    imageUrl: 'powys-county-council-wales-client-logo.png',
    altTag: 'Powys County Council (in Wales) Logo',
    region: ['surrounding'],
    type: 'local-authority',
    default: true
  },
  miltonKeynesCouncil: {
    imageUrl: 'milton-keynes-council-client-logo.png',
    altTag: 'Milton Keynes Council',
    region: ['buckinghamshire'],
    type: 'local-authority',
    default: true
  },
  cambridgeLawPractise: {
    imageUrl: 'cambridge-family-law-practise-client-logo.png',
    altTag: 'Cambridge Family Law Practise Logo',
    region: ['cambridgeshire'],
    type: 'legal-practise',
    default: true
  },
  fullers: {
    imageUrl: 'fullers-solicitors-bedford-client-logo.png',
    altTag: 'Fullers Solicitors (in Bedford) Logo',
    region: ['bedfordshire'],
    type: 'legal-practise',
    default: true
  },
  kennedys: {
    imageUrl: 'Kennedys-law-solicitors-cambridge-and-london-client-logo.png',
    altTag: 'Kennedys Law (servicing Cambridge &amp; London) Logo',
    region: ['cambridgeshire', 'surrounding'],
    type: 'legal-practise',
    default: true
  },
  watsons: {
    imageUrl: 'watsons-solicitors-warrington-client-logo.png',
    altTag: 'Watsons Solicitors (in Warrington) Logo',
    region: ['cambridgeshire'],
    type: 'legal-practise',
    default: true
  },
  rayBorley: {
    imageUrl: 'ray-borley-dunkley-llp-milton-keynes-client-logo.png',
    altTag: 'Ray Borley Dunkley LLP Client (Milton Keynes) Logo',
    region: ['buckinghamshire'],
    type: 'legal-practise'
  },
  davidsonSmith: {
    imageUrl: 'davidson-smith-client-logo.png',
    altTag: 'Davidson Smith & Co Client (Milton Keynes) Logo',
    region: ['bedfordshire'],
    type: 'legal-practise'
  }
});

export const ClientsBannerConfig = Object.freeze<Record<string, ClientsBannerConfig>>({
  'default': {
    panels: [
      {
        clientType: 'local-authority'
      },
      {
        clientType: 'legal-practise'
      }
    ]
  },
  'bedfordshire-clients': {
    panels: [
      {
        region: 'bedfordshire'
      }
    ]
  },
  'buckinghamshire-clients': {
    panels: [
      {
        region: 'buckinghamshire'
      }
    ]
  },
  'cambridgeshire-clients': {
    panels: [
      {
        region: 'cambridgeshire'
      }
    ]
  },
  'clients-in-surrounding-areas': {
    panels: [
      {
        region: 'surrounding'
      }
    ]
  },
  'local-authority-clients': {
    panels: [
      {
        clientType: 'local-authority'
      }
    ]
  },
  'legal-practise-clients': {
    panels: [
      {
        clientType: 'legal-practise'
      }
    ]
  }
});