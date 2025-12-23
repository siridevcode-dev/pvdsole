import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

const Hero = () => {
    const { t, i18n } = useTranslation();
    const [showVideo, setShowVideo] = useState(false);
    const isLao = i18n.language === 'la';

    return (
        <section className="hero-section">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(/images/hero-bg.jpg)`
                }}
            />
            <div className="gradient-overlay" />

            <div className="relative z-10 container-custom text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        {t('hero.title')}
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-secondary-400">
                        {t('hero.subtitle')}
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
                        {t('hero.description')}
                    </p>

                    {/* Watch Video Button */}
                    <button
                        onClick={() => setShowVideo(true)}
                        className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full transition-all group"
                    >
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaPlay className="text-secondary-500 text-sm ml-0.5" />
                        </div>
                        <span className="text-white font-medium">
                            {isLao ? 'ເບິ່ງວີດີໂອ' : 'Watch our video'}
                        </span>
                    </button>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-white/50 rounded-full" />
                </div>
            </motion.div>

            {/* Video Modal */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setShowVideo(false)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-2xl hover:text-secondary-400 transition-colors z-10"
                            onClick={() => setShowVideo(false)}
                        >
                            <FaTimes />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="w-full max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden">
                                {/* Replace with actual YouTube/Vimeo embed */}
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/QnfRnPg-wnw?autoplay=1"
                                    title="PVD Company Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
