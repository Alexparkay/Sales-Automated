import Header from './components/Header'
import Hero from './components/Hero'
import CaseStudiesPreview from './components/CaseStudiesPreview'
import WhyWeMakeADifference from './components/WhyWeMakeADifference'
import PeopleLoveWorkingWithUs from './components/PeopleLoveWorkingWithUs'
import WhyWeDiffer from './components/WhyWeDiffer'
import NewPricingSection from './components/NewPricingSection'
import MainCTA from './components/MainCTA'
import FinalCTA from './components/FinalCTA'
import ClientScroll from './components/ClientScroll'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <div id="hero"><Hero /></div>
        
        {/* 2. Client Scroll (brands) */}
        <div id="clients"><ClientScroll /></div>
        
        {/* 3. Case Studies */}
        <div id="work"><CaseStudiesPreview /></div>
        
        {/* 4. Why We Make A Difference (new section matching image) */}
        <div id="why-difference"><WhyWeMakeADifference /></div>
        
        {/* 5. People Love Working With Us */}
        <div id="people-love"><PeopleLoveWorkingWithUs /></div>
        
        {/* 6. Why We Differ (AI Transformation CTA) */}
        <div id="difference"><WhyWeDiffer /></div>
        
        {/* 7. New Pricing Section (Book a Design Sprint or Audit) */}
        <div id="new-pricing"><NewPricingSection /></div>
        
        {/* 8. FAQ (More Information with Alex's profile) */}
        <div id="faq"><FAQ /></div>
        
        {/* 9. Call to Action "Ready to Transform Your Business" */}
        <div id="cta-1"><MainCTA /></div>
        
        <Footer />
      </main>
    </div>
  )
}

export default App;