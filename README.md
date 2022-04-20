# Karta mieszkańca mobile

# przygotowanie środowiska

npm uninstall -g ionic
npm install -g @ionic/cli

# po scięagnieciu z GitLab

npm install
npx cap add ios
npx cap add android

# developerka w przeglądarce

npm run dev

# odpalenie w XCode dla ios

npm run buildios

# odpalenie w Android Studio dla Android

## nie aktualizować Gradle o co prosi Android Studio

npm run buildandroid

# NFC - wymagania

https://github.com/revtel/react-native-nfc-manager/blob/HEAD/setup.md
