import { getPage } from '@/lib/getPage'

import Header from './components/section/Header'
import HeroSection from './components/section/HeroSection'
import ClientLogosSection from './components/section/ClientLogosSection'
import SatisfactionSection from './components/section/SatisfactionSection'
import KPIVsTimeSection from './components/section/KPIVsTimeSection'
import PlaylistSection from './components/section/PlaylistSection'
import PriorityTableSection from './components/section/PriorityTableSection'
import MarketingOpportunitiesSection from './components/section/MarketingOpportunitiesSection'
import MarketingPlanSection from './components/section/MarketingPlanSection'
import TeamSection from './components/section/TeamSection'
import PerformanceCreativeSection from './components/section/PerformanceCreativeSection'
import { getFooter } from '@/lib/getFooter'
import FooterSection from './components/section/FooterSection'

export default async function Home() {
  const pageData = await getPage()
  const footerData = await getFooter()
  
  return (
    <>
      <Header data={pageData.header} />

      <HeroSection data={pageData.hero} />

      <ClientLogosSection
        data={pageData.clientLogos}
      />

      <SatisfactionSection
        data={pageData.satisfaction}
      />
      
      <PerformanceCreativeSection
        data={pageData.performanceCreative}
      />

      <KPIVsTimeSection
        data={pageData.kpivstime}
      />

      <PlaylistSection
        data={pageData.playlistSection}
      />

      <PriorityTableSection
        data={pageData.priorityTable}
      />

      <MarketingOpportunitiesSection
        data={pageData.marketingOpportunities}
      />

      <MarketingPlanSection
        data={pageData.marketingPlan}
      />

      <TeamSection
        data={pageData.team}
      />

      <FooterSection 
        data={footerData}
      />
    </>
  )
}