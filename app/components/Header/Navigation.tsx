'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Navigation() {
  const t = useTranslations();
  
  return (
    <nav className="bg-gradient-to-r from-[#E63946] via-[#f8c4c8]/30 to-[#1a1b26] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
          {/* <Image 
              src="/images/logo.png" 
              alt="Apiroq"
              width={32}
              height={32}
              style={{ height: 'auto' }}
              priority
            /> */}

          <span className="text-white text-xl font-semibold">{t('Name.apiroq')}</span>
          </Link>

          

          {/* Navigation links 
          <div className="hidden md:flex items-center space-x-8">
            {/* Datori dropdown
            <div className="relative group">
              <button className="text-gray-300 hover:text-white flex items-center gap-1">
                {t('nav.computers')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute left-0 mt-2 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden -translate-x-1/4">
                  <div className="grid grid-cols-2">
                    <Link href="/gatavie-datori" className="p-6 hover:bg-gray-50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{t('header.ready_configs')}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {t('header.ready_configs_desc')}
                          </p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link href="/konfigurators" className="p-6 hover:bg-gray-50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{t('header.configurator')}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {t('header.configurator_desc')}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/peripherals" className="text-gray-300 hover:text-white">
              {t('nav.peripherals')}
            </Link>
            <Link href="/help" className="text-gray-300 hover:text-white">
              {t('nav.help')}
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white">
              {t('nav.about')}
            </Link>
          </div>  */}

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            {/* <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}