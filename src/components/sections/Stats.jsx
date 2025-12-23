import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const StatItem = ({ number, label, delay }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (isVisible) {
            const duration = 2000;
            const steps = 60;
            const increment = number / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    setCount(number);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }
    }, [isVisible, number]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center justify-center text-center"
        >
            <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">{count.toLocaleString()}+</div>
            <div className="text-gray-500 font-medium text-sm md:text-base">{label}</div>
        </motion.div>
    );
};

const Stats = () => {
    const { t } = useTranslation();

    const stats = [
        { number: 20, label: t('stats.years') },
        { number: 5, label: t('stats.projects') },
        { number: 50, label: t('stats.villages') },
        { number: 3360, label: t('stats.families') },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        {stats.map((stat, index) => (
                            <div key={index} className="w-full md:w-1/4 p-6 md:p-0">
                                <StatItem number={stat.number} label={stat.label} delay={index * 0.1} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
