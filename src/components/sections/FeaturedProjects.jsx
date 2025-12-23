'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaHome, FaRoad, FaBuilding, FaLeaf, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const projectStats = [
    { icon: <FaHome />, count: '5', labelEn: 'MAJOR PROJECTS', labelLa: 'ໂຄງການໃຫຍ່', subEn: 'Completed in Lao PDR', subLa: 'ສຳເລັດໃນ ສປປ ລາວ', color: 'bg-blue-500' },
    { icon: <FaUsers />, count: '3,360+', labelEn: 'FAMILIES RESETTLED', labelLa: 'ຄອບຄົວຍົກຍ້າຍ', subEn: 'Supported & relocated', subLa: 'ສະໜັບສະໜູນ ແລະ ຍົກຍ້າຍ', color: 'bg-secondary-500' },
    { icon: <FaBuilding />, count: '50+', labelEn: 'VILLAGES DEVELOPED', labelLa: 'ບ້ານພັດທະນາ', subEn: 'New communities built', subLa: 'ຊຸມຊົນໃໝ່ທີ່ສ້າງຂຶ້ນ', color: 'bg-orange-500' },
    { icon: <FaRoad />, count: '150+', labelEn: 'KM INFRASTRUCTURE', labelLa: 'ກມ ພື້ນຖານໂຄງລ່າງ', subEn: 'Roads & utilities', subLa: 'ຖະໜົນ ແລະ ສາທາລະນູປະໂພກ', color: 'bg-green-500' },
];

const mapProjects = [
    { id: 'nn2', top: '40%', left: '53%', nameEn: 'Nam Ngiep 2 (NN2)', nameLa: 'ນ້ຳງຽບ 2 (NN2)', households: '1,053 HHs' },
    { id: 'xhpp', top: '35%', left: '20%', nameEn: 'Xayaburi HPP (XHPP)', nameLa: 'ໄຊຍະບູລີ (XHPP)', households: '663 HHs' },
    { id: 'lphpp', top: '20%', left: '30%', nameEn: 'Luang Prabang HPP (LPHPP)', nameLa: 'ຫຼວງພະບາງ (LPHPP)', households: '1,593 HHs' },
];

const FeaturedProjects = () => {
    const { t, i18n } = useTranslation();
    const isLao = i18n.language === 'la';
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section className="relative min-h-[80vh] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/projects-bg.jpg"
                    alt="Projects Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 to-primary-800/20" />
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="container-custom relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            {isLao ? 'ໂຄງການຂອງພວກເຮົາ' : 'OUR PROJECTS'}
                        </h2>

                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                            {isLao
                                ? 'PVD ໄດ້ປະສົບຜົນສຳເລັດໃນການຈັດຕັ້ງປະຕິບັດໂຄງການຄຸ້ມຄອງສິ່ງແວດລ້ອມ ແລະ ແຜນປະຕິບັດການຍົກຍ້າຍຈັດສັນໃນ ສປປ ລາວ, ສ້າງຊຸມຊົນໃໝ່ ແລະ ປັບປຸງຊີວິດການເປັນຢູ່ຂອງຫຼາຍພັນຄອບຄົວ.'
                                : 'PVD has successfully implemented Environment Management Programs and Resettlement Action Plans across Lao PDR, creating new communities and improving livelihoods for thousands of families.'
                            }
                        </p>

                        {/* Investment Structure Label */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
                                <FaLeaf className="text-white/70" />
                            </div>
                            <span className="text-white/70 uppercase tracking-wider text-sm">
                                {isLao ? 'ໂຄງສ້າງໂຄງການ' : 'PROJECT STRUCTURE'}
                            </span>
                        </div>

                        {/* Project Stats */}
                        <div className="space-y-6">
                            {projectStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white text-xl`}>
                                        {stat.icon}
                                    </div>
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-4xl font-bold text-white">{stat.count}</span>
                                        <div>
                                            <p className="text-secondary-400 font-semibold text-sm">{isLao ? stat.labelLa : stat.labelEn}</p>
                                            <p className="text-white/50 text-xs">{isLao ? stat.subLa : stat.subEn}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* View Projects Link */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-10"
                        >
                            <Link href="/projects" className="btn btn-secondary">
                                {t('projects.viewAll')}
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Laos Map Image */}
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Map Image */}
                            <img
                                src="/images/laos-map-new.png"
                                alt="Laos Map"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />

                            {/* Project Location Markers - Clickable */}
                            {mapProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="absolute"
                                    style={{ top: project.top, left: project.left }}
                                    onMouseEnter={() => setHoveredProject(project.id)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <Link href={`/projects/${project.id}`} className="block relative group">
                                        {/* Orange circle with pin - matching gallery style */}
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-transform group-hover:scale-125 shadow-xl">
                                            <FaMapMarkerAlt className="text-primary-900 text-xl" />
                                        </div>
                                        {/* Ripple effect */}
                                        <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-30" />

                                        {/* Tooltip on hover */}
                                        {hoveredProject === project.id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute left-12 top-0 bg-white rounded-lg px-4 py-2 shadow-lg whitespace-nowrap z-50"
                                            >
                                                <p className="text-primary-800 font-medium text-sm">
                                                    {isLao ? project.nameLa : project.nameEn}
                                                </p>
                                                <p className="text-secondary-600 font-semibold text-xs">{project.households}</p>
                                                <p className="text-xs text-primary-600">{isLao ? 'ກົດເພື່ອເບິ່ງລາຍລະອຽດ' : 'Click for details'}</p>
                                            </motion.div>
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute left-4 bottom-8 flex items-center gap-2 text-white/50 text-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="w-px h-12 bg-white/30" />
                    <span className="rotate-[-90deg] origin-left whitespace-nowrap">SCROLL DOWN</span>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
