'use client';

import PageHeader from '@/components/PageHeader';
import { 
  User, Calendar, ShoppingBag, Heart, Settings, LogOut, 
  Edit3, ChevronRight, MapPin, Moon, Sun, Globe, Check, Shield
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { useRouter } from 'next/navigation';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ta', label: 'தமிழ்',   flag: '🇮🇳' },
  { code: 'hi', label: 'हिंदी',   flag: '🇮🇳' },
] as const;

export default function ProfilePage() {
  const { t, theme, setTheme, language, setLanguage, user, setUser } = useApp();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <PageHeader title={t('nav.profile')} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ── Left Column: User Card ── */}
          <div className="lg:col-span-1 space-y-5">
            {/* Avatar */}
            <div className="modern-card p-8 text-center flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary-dark p-1 mb-5 shadow-xl shadow-primary/20">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-primary font-black text-3xl">
                  JD
                </div>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">John Doe</h1>
              <p className="text-slate-400 text-sm font-medium mt-1 mb-6">Premium Traveler · Joined 2024</p>
              <div className="w-full space-y-3">
                <button className="w-full py-3 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary-dark transition-all">
                  <Edit3 size={18} />
                  {t('profile.edit')}
                </button>
                <button
                  onClick={() => router.push('/login')}
                  className="w-full py-3 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-rose-500 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-rose-50 transition-all"
                >
                  <LogOut size={18} />
                  {t('profile.logout')}
                </button>
              </div>
            </div>

            {/* ── Dark Mode Toggle ── */}
            <div className="modern-card p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {theme === 'dark' ? <Moon size={20} className="text-primary" /> : <Sun size={20} className="text-amber-500" />}
                  <div>
                    <p className="font-bold text-slate-800 dark:text-white text-sm">{t('profile.dark_mode')}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{theme === 'dark' ? 'Dark Mode On' : 'Light Mode On'}</p>
                  </div>
                </div>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={`relative w-13 h-7 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-primary' : 'bg-slate-200'}`}
                  style={{ width: 52, height: 28 }}
                >
                  <span
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
                  />
                </button>
              </div>
            </div>

            {/* ── Language Selector ── */}
            <div className="modern-card p-5">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={20} className="text-primary" />
                <p className="font-bold text-slate-800 dark:text-white text-sm">{t('profile.language')}</p>
              </div>
              <div className="space-y-2">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all font-bold text-sm
                      ${language === lang.code
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{lang.flag}</span>
                      {lang.label}
                    </span>
                    {language === lang.code && <Check size={16} />}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Role Switcher (For testing dashboards) ── */}
            <div className="modern-card p-5">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={20} className="text-primary" />
                <p className="font-bold text-slate-800 dark:text-white text-sm">Switch Role</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(['traveler', 'merchant', 'guide', 'admin'] as const).map(role => (
                  <button
                    key={role}
                    onClick={() => user && setUser({ ...user, role })}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border
                      ${user?.role === role
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-100 dark:border-slate-700 hover:border-primary'
                      }`}
                  >
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Bookings */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500 dark:text-slate-400"><Calendar size={20} /></div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t('profile.bookings')}</h2>
              </div>
              <div className="space-y-4">
                {[
                  { hotel: 'Hotel Sea View', loc: 'Beach Road · Mar 20-22, 2024', status: 'Confirmed', price: '₹7,000' },
                  { hotel: 'Sunrise Bay Resort', loc: 'Coastal Rd · Apr 5-7, 2024', status: 'Pending', price: '₹9,000' },
                ].map((b, i) => (
                  <div key={i} className="modern-card p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=120" className="w-full h-full object-cover" alt="" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{b.hotel}</p>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-1"><MapPin size={10} />{b.loc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest ${b.status === 'Confirmed' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>
                        {b.status}
                      </span>
                      <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">{b.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketplace Orders */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500 dark:text-slate-400"><ShoppingBag size={20} /></div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Marketplace Orders</h2>
              </div>
              <div className="modern-card p-8 text-center border-dashed">
                <p className="text-slate-400 font-medium">No active orders.</p>
                <button onClick={() => router.push('/marketplace')} className="mt-3 text-primary font-bold inline-flex items-center gap-1 hover:underline text-sm">
                  Visit Marketplace <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* Saved Places */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500 dark:text-slate-400"><Heart size={20} /></div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t('profile.saved')}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="modern-card overflow-hidden group cursor-pointer">
                  <div className="h-36 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                    <div className="absolute top-3 right-3 p-1.5 bg-white/90 rounded-xl text-rose-500"><Heart size={14} fill="currentColor" /></div>
                  </div>
                  <div className="p-4">
                    <p className="font-bold text-slate-900 dark:text-white">Vivekananda Rock</p>
                    <p className="text-xs text-slate-400 mt-1">Saved Feb 12, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Settings */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500 dark:text-slate-400"><Settings size={20} /></div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Account Settings</h2>
              </div>
              <div className="modern-card divide-y divide-slate-50 dark:divide-slate-800">
                {['Notification Preferences', 'Privacy & Safety', 'Help & Support', 'About KumariOne'].map(item => (
                  <div key={item} className="flex items-center justify-between px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer group transition-colors">
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white">{item}</span>
                    <ChevronRight size={16} className="text-slate-300 dark:text-slate-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
