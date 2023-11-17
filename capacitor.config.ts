import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miapp.movil',
  appName: 'Uviex',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
