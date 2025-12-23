'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaHardHat, FaBuilding, FaLeaf, FaUsers, FaHandHoldingHeart, FaExchangeAlt, FaWater, FaHome, FaArrowRight } from 'react-icons/fa';

const services = [
    {
        key: 'newSite',
        icon: <FaHome />,
        stat: '50+',
        statLabel: 'Villages',
        image: '/images/new-site-bg.jpg'
    },
    {
        key: 'infrastructure',
        icon: <FaHardHat />,
        stat: '150+',
        statLabel: 'KM Roads',
        image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    },
    {
        key: 'publicBuildings',
        icon: <FaBuilding />,
        stat: '30+',
        statLabel: 'Buildings',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    },
    {
        key: 'emp',
        icon: <FaLeaf />,
        stat: '5,000+',
        statLabel: 'Hectares',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    },
    {
        key: 'riverClearing',
        icon: <FaWater />,
        stat: '200+',
        statLabel: 'KM Cleared',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    },
    {
        key: 'cdp',
        icon: <FaUsers />,
        stat: '3,360+',
        statLabel: 'Families',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    },
    {
        key: 'livelihood',
        icon: <FaHandHoldingHeart />,
        stat: '700+',
        statLabel: 'Trained',
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    },
    {
        key: 'compensation',
        icon: <FaExchangeAlt />,
        stat: '100%',
        statLabel: 'Compliance',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    },
];

const ServicesPreview = () => {
    const { t, i18n } = useTranslation();
    const [activeService, setActiveService] = useState(0);
    const isLao = i18n.language === 'la';

    return (
        <section className="relative min-h-[80vh] overflow-hidden">
            {/* Dynamic Background Images - Smooth Crossfade */}
            {services.map((service, index) => (
                <div
                    key={service.key}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeService === index ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-900/50" />
                </div>
            ))}

            <div className="container-custom relative z-10 py-20">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-white mb-16"
                >
                    {t('services.title')}
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Service Icons */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20" />

                        <div className="space-y-4">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.key}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setActiveService(index)}
                                    className={`flex items-center gap-4 cursor-pointer group transition-all duration-300 ${activeService === index ? 'translate-x-4' : ''}`}
                                >
                                    {/* Icon Circle */}
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-300 ${activeService === index
                                        ? 'bg-secondary-500 text-primary-900 scale-110'
                                        : 'bg-white/10 text-white group-hover:bg-white/20'
                                        }`}>
                                        {service.icon}
                                    </div>

                                    {/* Service Name */}
                                    <span className={`font-medium transition-all duration-300 ${activeService === index
                                        ? 'text-secondary-400 text-lg'
                                        : 'text-white/70 group-hover:text-white'
                                        }`}>
                                        {t(`services.items.${service.key}.title`)}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                            >
                                {/* Service Icon & Title */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-secondary-500 rounded-xl flex items-center justify-center text-primary-900 text-2xl">
                                        {services[activeService].icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">
                                        {t(`services.items.${services[activeService].key}.title`)}
                                    </h3>
                                </div>

                                {/* Statistics */}
                                <div className="mb-6">
                                    <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                                        {isLao ? 'ຈຳນວນ' : 'Statistics'}
                                    </p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-secondary-400">
                                            {services[activeService].stat}
                                        </span>
                                        <span className="text-white/70 text-lg">
                                            {services[activeService].statLabel}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white/80 leading-relaxed mb-6">
                                    {t(`services.items.${services[activeService].key}.desc`)}
                                </p>

                                {/* Read More Link */}
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 text-secondary-400 hover:text-secondary-300 font-medium transition-colors group"
                                >
                                    {isLao ? 'ອ່ານເພີ່ມເຕີມ' : 'READ MORE'}
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
