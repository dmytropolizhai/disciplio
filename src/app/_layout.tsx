import "@/i18n";
import './globals.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from "@rn-primitives/portal"
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Suspense } from 'react';
import { SQLiteProvider } from 'expo-sqlite';
import { ActivityIndicator } from 'react-native';
import { DATABASE_NAME } from '@/database/schema';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <Suspense fallback={<ActivityIndicator size="large" />} >
      <SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
        useSuspense={true}
      >
        <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(modals)" options={{ headerShown: false }} />
          </Stack>
          <PortalHost />
        </ThemeProvider>
      </SQLiteProvider>
    </Suspense>
  );
}

export {
  ErrorBoundary,
} from 'expo-router';
