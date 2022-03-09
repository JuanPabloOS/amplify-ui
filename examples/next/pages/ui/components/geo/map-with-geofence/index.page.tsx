import { AmplifyMap, Geofence } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

export default function MapWithGeofence() {
  return (
    <AmplifyMap>
      <Geofence />
    </AmplifyMap>
  );
}
