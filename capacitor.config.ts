import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.qwikie.app',
  appName: 'Qwikie',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
