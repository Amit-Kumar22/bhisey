import React from 'react';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';

interface SavingsRow { label: string; value: string; highlight?: boolean }
export interface CostSavingsTableProps { 
  heading?: string;
  subheading?: string;
  rows?: SavingsRow[];
  id?: string;
  className?: string;
}

/**
 * CostSavingsTable – styled two-column list replicating screenshot layout.
 * Last row highlighted with subtle green background (customizable via highlight flag).
 */
export const CostSavingsTable: React.FC<CostSavingsTableProps> = ({
  heading = 'Lower Cost of Ownership. No-compromise Quality.',
  subheading,
  rows = [
    { label: "Lower engineers' fully loaded cost", value: '15-25% overall project savings' },
    { label: 'On-demand allocation of specialized resources', value: '10-30% overall project savings' },
    { label: 'Low churn and rapid replacement', value: '5-10% overall project savings' },
    { label: 'Cost-effective US-based UX experts', value: '40-50% below typical US rates' },
    { label: 'Bottom Line Cost Savings', value: 'Up to 40% Total Project Cost of Ownership', highlight: true }
  ],
  id = 'cost-savings',
  className = ''
}) => {
  return (
    <Section id={id} className={className + ' bg-white'} spacing="xl">
      <Container>
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-charcoal md:text-4xl">{heading}</h2>
          {subheading && <p className="text-base text-charcoal-light md:text-lg">{subheading}</p>}
        </div>
        <div className="space-y-3">
          {rows.map(r => (
            <div
              key={r.label}
              className={`grid grid-cols-1 items-center rounded-md border border-accent-100 bg-white px-6 py-4 text-sm shadow-sm md:grid-cols-2 md:text-base ${r.highlight ? 'bg-emerald-50/60 font-semibold' : ''}`}
            >
              <div className="pr-4 text-charcoal">{r.label}</div>
              <div className="mt-2 border-t border-accent-100 pt-2 text-charcoal-light md:mt-0 md:border-t-0 md:pt-0 md:text-right">{r.value}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CostSavingsTable;
