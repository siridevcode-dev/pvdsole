'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const { t } = useTranslation();

    const quickLinks = [
        { key: 'home', path: '/' },
        { key: 'about', path: '/about' },
        { key: 'projects', path: '/projects' },
        { key: 'services', path: '/services' },
        { key: 'gallery', path: '/gallery' },
        { key: 'contact', path: '/contact' },
    ];

    return (
        <footer className="bg-primary-900 text-white">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/images/logo.png" alt="Phornsavarn" className="h-14 w-auto" />
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 hover:text-primary-900 flex items-center justify-center transition-all duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 hover:text-primary-900 flex items-center justify-center transition-all duration-300">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary-500 hover:text-primary-900 flex items-center justify-center transition-all duration-300">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.key}>
                                    <Link href={link.path} className="text-white/70 hover:text-secondary-400 transition-colors text-sm">
                                        {t(`nav.${link.key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">{t('nav.services')}</h4>
                        <ul className="space-y-3">
                            <li className="text-white/70 text-sm">{t('services.items.newSite.title')}</li>
                            <li className="text-white/70 text-sm">{t('services.items.infrastructure.title')}</li>
                            <li className="text-white/70 text-sm">{t('services.items.emp.title')}</li>
                            <li className="text-white/70 text-sm">{t('services.items.cdp.title')}</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">{t('footer.contact')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-secondary-500 mt-1 flex-shrink-0" />
                                <span className="text-white/70 text-sm">{t('contact.office.address')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-secondary-500 flex-shrink-0" />
                                <span className="text-white/70 text-sm">+856 21 XXX XXX</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-secondary-500 flex-shrink-0" />
                                <span className="text-white/70 text-sm">info@pvd-laos.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <p className="text-white/50 text-sm text-center">
                        © {new Date().getFullYear()} {t('footer.company')}. {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
