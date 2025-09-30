"use client";
import React, { useState } from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

const categories = [
  { key: 'core', label: 'Core Development', groups: [
    { title: 'Frontend Engineers', items: 'React, Angular, Vue.js, Next.js, Svelte, SolidJS, Ember' },
    { title: 'Backend Engineers', items: 'Python, Java, C++, C#, PHP, JavaScript, Golang, SQL, Kotlin, Ruby, Node.js' },
    { title: 'Mobile Developers', items: 'iOS, Android, React Native, Flutter, Kotlin, Xamarin, Java' },
  ]},
  { key: 'specialized', label: 'Specialized Roles', groups: [
    { title: 'AI/ML & Data', items: 'Data Scientists, ML Engineers, Data Engineers, MLOps' },
    { title: 'Cloud & DevOps', items: 'Cloud Architects, DevSecOps, Site Reliability Engineers' },
    { title: 'Product Experience', items: 'UX/UI Designers, Product Managers, Business Analysts' },
  ]},
  { key: 'leadership', label: 'Leadership & Strategy', groups: [
    { title: 'Delivery Management', items: 'Engagement Managers, Delivery Managers, Program Managers' },
    { title: 'Technical Leadership', items: 'Solution Architects, Enterprise Architects, Lead Engineers' },
    { title: 'Quality & Security', items: 'QA Engineers, Automation Engineers, Security Engineers' },
  ]},
];

const TeamCapabilitiesTabs: React.FC = () => {
  const [active, setActive] = useState('core');
  const activeCat = categories.find(c => c.key === active)!;
  return (
    <Section spacing="xl" className="bg-white">
      <Container size="xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">Comprehensive Team Capabilities. 850+ Vetted Experts</h2>
          <p className="mt-4 text-base text-charcoal-light md:text-lg">Every project team is structured to optimize your development objectives and business goals. Our talent pool includes:</p>
        </div>
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {categories.map(c => (
            <button key={c.key} onClick={() => setActive(c.key)} className={`rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent-500 ${active===c.key?'bg-accent-600 text-white shadow':'bg-accent-50 text-charcoal hover:bg-accent-100'}`}>{c.label}</button>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-accent-100 bg-white">
          <div className="grid gap-0 md:grid-cols-3">
            {activeCat.groups.map(g => (
              <div key={g.title} className="border-accent-100 p-8 md:border-r last:border-r-0">
                <h3 className="mb-4 text-center text-base font-semibold text-charcoal md:text-lg">{g.title}</h3>
                <p className="text-center text-sm leading-relaxed text-charcoal-light">{g.items}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
export default TeamCapabilitiesTabs;
