import React from 'react';
import { motion } from 'motion/react';
import { experiencesData, educationData, certificationsData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2 h-2 rounded-full bg-[#22d472] dark:bg-[#22d472] light:bg-[#16a34a]" />
          <span className="font-mono text-xs tracking-wider text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase font-semibold">
            CAREER &amp; CREDENTIALS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 tracking-[-0.04em]">
          Experience &amp; Education<span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]">.</span>
        </h2>
        <p className="text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 text-sm sm:text-base mt-2 max-w-xl font-normal">
          Hands-on DevOps engineering experience, software engineering academic background, and industry credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Left Column: Work Experience & Education */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-xs sm:text-sm font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase tracking-wider flex items-center gap-2 font-bold">
              <Briefcase className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
              Professional Experience
            </h3>

            {experiencesData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glow-card p-6 sm:p-7 rounded-2xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 space-y-4 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">{exp.role}</h4>
                    <div className="text-sm font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold mt-0.5">{exp.company}</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500">
                    <span className="flex items-center gap-1.5 bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-100 px-2.5 py-1 rounded-lg border border-[#212121] dark:border-[#212121] light:border-slate-200 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-100 px-2.5 py-1 rounded-lg border border-[#212121] dark:border-[#212121] light:border-slate-200 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Bullet Points */}
                <div className="space-y-2.5 pt-1">
                  {exp.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <span className="font-mono text-sm text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] mt-0.5 font-bold">&gt;</span>
                      <p className="text-sm sm:text-base text-[#f2f2f2]/90 dark:text-[#f2f2f2]/90 light:text-slate-700 leading-relaxed font-normal">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Skills */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#212121] dark:border-[#212121] light:border-slate-100">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-[#16a34a]/10 border border-[#22d472]/20 dark:border-[#22d472]/20 light:border-[#16a34a]/20 px-2.5 py-1 rounded-md font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-xs sm:text-sm font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase tracking-wider flex items-center gap-2 font-bold">
              <GraduationCap className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
              Academic Background
            </h3>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 space-y-3.5 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900">{edu.degree}</h4>
                    <p className="text-sm sm:text-base text-[#6b6b6b] dark:text-[#9e9e9e] light:text-slate-600 font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] bg-[#22d472]/10 dark:bg-[#22d472]/10 light:bg-[#16a34a]/10 px-3 py-1 rounded-lg border border-[#22d472]/20 dark:border-[#22d472]/20 light:border-[#16a34a]/20 self-start sm:self-auto font-bold">
                    {edu.period}
                  </div>
                </div>

                {edu.grade && (
                  <div className="inline-block font-mono text-xs sm:text-sm text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-bold">
                    Academic Standing: {edu.grade}
                  </div>
                )}

                <div>
                  <span className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 block mb-2 font-semibold tracking-wider">
                    CORE COURSEWORK:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 px-2.5 py-1 rounded-md font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Verified Certifications & DevSecOps Credentials */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xs sm:text-sm font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] uppercase tracking-wider flex items-center gap-2 font-bold">
            <Award className="w-4 h-4 text-[#22d472] dark:text-[#22d472] light:text-[#16a34a]" />
            Verified Industry Certifications
          </h3>

          <div className="space-y-3.5">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glow-card p-5 sm:p-5.5 rounded-2xl bg-[#121212] dark:bg-[#121212] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 space-y-3 shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-100 border border-[#212121] dark:border-[#212121] light:border-slate-200 flex items-center justify-center text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-900 leading-snug">{cert.title}</h4>
                    <div className="text-xs font-mono text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-semibold mt-0.5">{cert.issuer}</div>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-slate-50 border border-[#212121] dark:border-[#212121] light:border-slate-200 space-y-1 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500">
                    <span>Credential ID:</span>
                    <span className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-bold">{cert.credentialId}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500">
                    <span>Issue Date:</span>
                    <span className="text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 font-medium">{cert.issueDate}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-500 block mb-1.5 font-medium">
                    Topics Mastered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topics.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-[#f2f2f2] dark:text-[#f2f2f2] light:text-slate-800 bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-100 px-2 py-0.5 rounded-md border border-[#212121] dark:border-[#212121] light:border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick verification callout box */}
          <div className="p-4.5 rounded-2xl bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white border border-[#212121] dark:border-[#212121] light:border-slate-200 space-y-2 font-mono text-xs sm:text-sm shadow-sm">
            <div className="text-[#22d472] dark:text-[#22d472] light:text-[#16a34a] font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Credentials Verified &amp; Active
            </div>
            <p className="text-[#6b6b6b] dark:text-[#8e8e8e] light:text-slate-600 leading-relaxed font-normal">
              Trained in security scanning (Nmap/Kali), CI/CD pipeline architectural security, and GitHub branch protection policies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
