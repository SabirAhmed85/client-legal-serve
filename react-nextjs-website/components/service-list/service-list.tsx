import React, { Fragment } from 'react';
import { ServiceInfo } from '../../config/services.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ServiceListProps = {
  readonly serviceList: ServiceInfo[];
};

const ServiceList = React.memo<ServiceListProps>(({ serviceList }) => (
  <Fragment>
    {serviceList.map(({ description }: ServiceInfo, index: number) => (
        <h2 key={index} className='subtitle'>
          <FontAwesomeIcon icon='check' />
          {` ${description} `}
        </h2>
      )
    )}
  </Fragment>
));

ServiceList.displayName = 'ServiceList';

export default ServiceList;