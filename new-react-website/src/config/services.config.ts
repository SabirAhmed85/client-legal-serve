export type ServiceInfo = {
  readonly description: string;
  readonly packageName?: string;
};

export const ServiceInfoConfig = Object.freeze<Record<string, ServiceInfo>>({
  processServing: {
    description: 'Professionaly handled and timely Process Serving'
  },
  legalCourier: {
    description: 'Legal courier services that are flexible &amp; accommodating'
  },
  privacy: {
    description: 'Guaranteed privacy and confidentiality'
  }
});