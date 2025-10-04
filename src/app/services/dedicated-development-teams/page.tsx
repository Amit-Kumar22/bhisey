"use client";
import React from 'react';
import HeroDedicatedTeams from '../../../components/services/dedicated-teams/HeroDedicatedTeams';
// Reusable components leveraged to align with existing design system
import { BhiseyDifferenceGrid } from '@/components/reusable/BhiseyDifferenceGrid';
import { CostSavingsTable } from '@/components/reusable/CostSavingsTable';
import { AwardsRecognitionGrid } from '@/components/reusable/AwardsRecognitionGrid';
import { ClientLogoMarquee } from '@/components/reusable/ClientLogoMarquee';
import InnovationRetainControl from '../../../components/services/dedicated-teams/InnovationRetainControl';
import ApproachGrid from '../../../components/services/dedicated-teams/ApproachGrid';
import DomainsGrid from '../../../components/services/dedicated-teams/DomainsGrid';
import TeamCapabilitiesTabs from '../../../components/services/dedicated-teams/TeamCapabilitiesTabs';
import TechnicalExcellenceAreas from '../../../components/services/dedicated-teams/TechnicalExcellenceAreas';
import ValuePropositionSavings from '../../../components/services/dedicated-teams/ValuePropositionSavings';
import ServiceContactSection from '@/components/reusable/ServiceContactSection';
import ProvenSuccessBanner from '@/components/reusable/ProvenSuccessBanner';

export default function DedicatedDevelopmentTeamsPage() {
	return (
		<main className="flex flex-col">
			<HeroDedicatedTeams />
					<BhiseyDifferenceGrid
						title="The Bhisey Difference"
						subtitle="Our software development services are trusted by 450+ industry leaders and growth-stage innovators."
						items={[
							{ title: 'Partner by Design', description: 'Strategic collaboration that aligns with your business outcomes.' },
							{ title: 'Product Driven Engagement', description: 'Delivering measurable value across the full software lifecycle.' },
							{ title: 'People You Can Count On', description: 'Seasoned engineers, proven processes, and stable delivery.' },
							{ title: 'Proven Success', description: '1000+ projects delivered with lasting client impact.' },
							{ title: 'Domain Expertise', description: 'Deep vertical knowledge across regulated and fast-moving industries.' },
							{ title: 'Scalable Talent', description: 'Rapidly expand or refine team composition without disruption.' },
						]}
					/>
							<ClientLogoMarquee
								title="Client Spotlight"
										logos={[
											{ name: 'Accenture', src: '/logo-accenture.png', alt: 'Accenture logo' },
											{ name: 'Acumen', src: '/logo-acumen.png', alt: 'Acumen logo' },
											{ name: 'Alphabet', src: '/logo-alphabet.png', alt: 'Alphabet logo' },
											{ name: 'Astellas', src: '/logo-astellas.png', alt: 'Astellas logo' },
											{ name: 'Boston Red Sox', src: '/logo-boston.png', alt: 'Boston Red Sox logo' },
											{ name: 'Brigham', src: '/logo-brigham.png', alt: 'Brigham logo' },
										]}
								speed="slow"
								pauseOnHover
								className="bg-white pt-0"
							/>
			<InnovationRetainControl />
							<AwardsRecognitionGrid />
			<ApproachGrid />
			<DomainsGrid />
			<TeamCapabilitiesTabs />
			<TechnicalExcellenceAreas />
			<ValuePropositionSavings />
			<CostSavingsTable heading="Lower Cost of Ownership. No-compromise Quality." />
			<ProvenSuccessBanner />
			<ServiceContactSection
				id="contact-dedicated-teams"
				title="Ready to Build Your Team?"
				subtitle="Start a conversation to see how Bhisey Software can help you build a high‑performing, cost‑effective, and truly dedicated development team – on your terms."
			/>
		</main>
	);
}
