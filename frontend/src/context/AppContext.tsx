'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ta' | 'hi';
type Theme = 'light' | 'dark';

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.map': 'Map',
    'nav.explore': 'Explore',
    'nav.profile': 'Profile',
    'nav.back': '← Back',
    'dashboard.search': 'Search your smart journey...',
    'menu.explore_map': 'Explore Map',
    'menu.hidden_gems': 'Hidden Gems',
    'menu.hotels': 'Hotels',
    'menu.marketplace': 'Marketplace',
    'menu.voice': 'Voice AI',
    'menu.about': 'About Us',
    'menu.bookings': 'My Bookings',
    'menu.saved': 'Saved Places',
    'map.search': 'Search destinations...',
    'map.from': 'From your location',
    'map.to': 'Destination',
    'map.get_route': 'Get Route',
    'map.categories': 'All,Attractions,Hotels,Restaurants,Hidden Spots',
    'gems.search': 'Search hidden places...',
    'gems.title': 'Hidden Gems',
    'gems.subtitle': 'Discover lesser-known treasures of Kanniyakumari',
    'gems.distance': 'from Kanyakumari',
    'gems.explore': 'Explore',
    'market.search': 'Search products...',
    'market.add_cart': 'Add to Cart',
    'market.title': 'Tribal Marketplace',
    'hotels.search': 'Search hotels...',
    'hotels.book': 'Book Now',
    'hotels.title': 'Book your Stay',
    'profile.dark_mode': 'Dark Mode',
    'profile.language': 'Language',
    'profile.bookings': 'Recent Bookings',
    'profile.saved': 'Saved Places',
    'profile.logout': 'Logout',
    'profile.edit': 'Edit Profile',
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.map': 'வரைபடம்',
    'nav.explore': 'ஆராய்',
    'nav.profile': 'சுயவிவரம்',
    'nav.back': '← திரும்பு',
    'dashboard.search': 'உங்கள் பயணத்தை தேடுங்கள்...',
    'menu.explore_map': 'வரைபடம் ஆராய்',
    'menu.hidden_gems': 'மறைந்த இடங்கள்',
    'menu.hotels': 'விடுதிகள்',
    'menu.marketplace': 'சந்தை',
    'menu.voice': 'குரல் AI',
    'menu.about': 'எங்களை பற்றி',
    'menu.bookings': 'என் பதிவுகள்',
    'menu.saved': 'சேமித்த இடங்கள்',
    'map.search': 'இடங்களை தேடுங்கள்...',
    'map.from': 'உங்கள் இருப்பிடம்',
    'map.to': 'சேருமிடம்',
    'map.get_route': 'வழி காட்டு',
    'map.categories': 'அனைத்தும்,சுற்றுலா,விடுதிகள்,உணவகங்கள்,மறைந்த இடங்கள்',
    'gems.search': 'மறைந்த இடங்களை தேடுங்கள்...',
    'gems.title': 'மறைந்த இடங்கள்',
    'gems.subtitle': 'கன்னியாகுமரியின் அரிய இடங்களை கண்டறியுங்கள்',
    'gems.distance': 'கன்னியாகுமரியிலிருந்து',
    'gems.explore': 'ஆராய்',
    'market.search': 'பொருட்களை தேடுங்கள்...',
    'market.add_cart': 'கூடையில் சேர்',
    'market.title': 'பழங்குடி சந்தை',
    'hotels.search': 'விடுதிகளை தேடுங்கள்...',
    'hotels.book': 'இப்போது பதிவு செய்',
    'hotels.title': 'உங்கள் தங்குமிடம்',
    'profile.dark_mode': 'இரவு பயன்முறை',
    'profile.language': 'மொழி',
    'profile.bookings': 'சமீபத்திய பதிவுகள்',
    'profile.saved': 'சேமித்த இடங்கள்',
    'profile.logout': 'வெளியேறு',
    'profile.edit': 'சுயவிவரம் திருத்து',
  },
  hi: {
    'nav.home': 'होम',
    'nav.map': 'नक्शा',
    'nav.explore': 'खोजें',
    'nav.profile': 'प्रोफ़ाइल',
    'nav.back': '← वापस',
    'dashboard.search': 'अपना सफर खोजें...',
    'menu.explore_map': 'नक्शा खोजें',
    'menu.hidden_gems': 'छुपे रत्न',
    'menu.hotels': 'होटल',
    'menu.marketplace': 'बाज़ार',
    'menu.voice': 'वॉयस AI',
    'menu.about': 'हमारे बारे में',
    'menu.bookings': 'मेरी बुकिंग',
    'menu.saved': 'सहेजे गए स्थान',
    'map.search': 'स्थान खोजें...',
    'map.from': 'आपका स्थान',
    'map.to': 'गंतव्य',
    'map.get_route': 'रूट दिखाएं',
    'map.categories': 'सभी,आकर्षण,होटल,रेस्तरां,छुपे स्थान',
    'gems.search': 'छुपे स्थान खोजें...',
    'gems.title': 'छुपे रत्न',
    'gems.subtitle': 'कन्याकुमारी के अनोखे स्थान खोजें',
    'gems.distance': 'कन्याकुमारी से',
    'gems.explore': 'खोजें',
    'market.search': 'उत्पाद खोजें...',
    'market.add_cart': 'कार्ट में जोड़ें',
    'market.title': 'आदिवासी बाज़ार',
    'hotels.search': 'होटल खोजें...',
    'hotels.book': 'अभी बुक करें',
    'hotels.title': 'अपना ठहराव बुक करें',
    'profile.dark_mode': 'डार्क मोड',
    'profile.language': 'भाषा',
    'profile.bookings': 'हाल की बुकिंग',
    'profile.saved': 'सहेजे गए स्थान',
    'profile.logout': 'लॉग आउट',
    'profile.edit': 'प्रोफ़ाइल संपादित करें',
  },
};

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType>({
  language: 'en',
  setLanguage: () => {},
  theme: 'light',
  setTheme: () => {},
  t: (key) => key,
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const savedLang = (localStorage.getItem('kone_lang') as Language) || 'en';
    const savedTheme = (localStorage.getItem('kone_theme') as Theme) || 'light';
    setLanguageState(savedLang);
    setThemeState(savedTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('kone_theme', theme);
  }, [theme]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('kone_lang', lang);
  };

  const setTheme = (t: Theme) => setThemeState(t);

  const t = (key: string) => translations[language][key] || translations['en'][key] || key;

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
