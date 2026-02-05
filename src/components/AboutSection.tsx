// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Shield, Users, Trophy, Lightbulb, Target, Rocket } from 'lucide-react';

// const features = [
//   {
//     icon: Shield,
//     title: 'Cyber Excellence',
//     description: 'Pioneering cybersecurity education with cutting-edge curriculum and industry partnerships.',
//   },
//   {
//     icon: Users,
//     title: 'Expert Faculty',
//     description: 'Learn from industry professionals and academic experts in the field of cyber security.',
//   },
//   {
//     icon: Trophy,
//     title: 'Award Winning',
//     description: 'Recognized for excellence in security research, competitions, and student achievements.',
//   },
//   {
//     icon: Lightbulb,
//     title: 'Innovation Hub',
//     description: 'State-of-the-art labs and research facilities fostering next-generation security solutions.',
//   },
//   {
//     icon: Target,
//     title: 'Industry Ready',
//     description: 'Comprehensive training programs preparing students for real-world cybersecurity challenges.',
//   },
//   {
//     icon: Rocket,
//     title: 'Future Forward',
//     description: 'Embracing emerging technologies and methodologies in the ever-evolving security landscape.',
//   },
// ];

// const AboutSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   return (
//     <section className="relative py-24 sm:py-32 overflow-hidden">
//       <div className="container relative z-10 px-6" ref={ref}>
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16 sm:mb-20"
//         >
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.2 }}
//             className="inline-block font-rajdhani text-primary tracking-widest uppercase text-sm mb-4"
//           >
//             About The Department
//           </motion.span>
          
//           <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold glow-gold mb-6">
//             Cyber Security Department
//           </h2>
          
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
//           />
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="max-w-3xl mx-auto font-rajdhani text-lg sm:text-xl text-foreground/70 leading-relaxed"
//           >
//             The Department of Cyber Security stands at the forefront of digital defense education, 
//             nurturing the next generation of security professionals. With a commitment to excellence, 
//             innovation, and practical learning, we prepare students to tackle the evolving challenges 
//             of the digital world. EPICS 2026 showcases the talent, creativity, and technical prowess 
//             of our exceptional students.
//           </motion.p>
//         </motion.div>



//         {/* Stats Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ delay: 0.8, duration: 0.8 }}
//           className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
//         >
//           {[
//             { value: '500+', label: 'Students' },
//             { value: '8', label: 'Events' },
//             { value: '50+', label: 'Prizes' },
//             { value: '1', label: 'Epic Day' },
//           ].map((stat, index) => (
//             <div
//               key={stat.label}
//               className="text-center p-6 border-glow rounded-xl"
//             >
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ delay: 1 + index * 0.1, type: 'spring' }}
//                 className="block font-orbitron text-3xl sm:text-4xl font-bold text-gradient-gold"
//               >
//                 {stat.value}
//               </motion.span>
//               <span className="font-rajdhani text-sm text-muted-foreground uppercase tracking-wider">
//                 {stat.label}
//               </span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
