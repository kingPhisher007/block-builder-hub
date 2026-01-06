import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Ruler, Truck } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import heroImage from '@/assets/hero-blocks.jpg';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom section-padding">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-primary-foreground mb-6 animate-slide-up">
              Premium Quality Blocks for a Solid Foundation
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-slide-up delay-100">
              Built to last. Delivered to your site. Trusted by builders across Cape Coast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
              <Link 
                to="/products" 
                className="btn-primary inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                View Our Blocks
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="https://wa.me/233249210019?text=Hello!%20I%20would%20like%20to%20get%20a%20quote%20for%20concrete%20blocks."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center justify-center"
              >
                Get a Quote on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Who We Are Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-foreground mb-6">Who We Are</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Family-owned and operated in Cape Coast, <strong className="text-foreground">MONT RICHCON</strong> has been 
              supplying builders with durable, reliable concrete blocks for years. We are committed to quality 
              materials and precise manufacturing for every project, big or small.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-grey section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quality you can trust, service you can rely on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Shield}
              title="Strength-Guaranteed Mix"
              description="Our precise concrete mix ensures every block meets the highest strength standards for structural integrity."
            />
            <FeatureCard 
              icon={Ruler}
              title="Accurate Sizing"
              description="Consistent dimensions across every batch means faster construction and perfect alignment every time."
            />
            <FeatureCard 
              icon={Truck}
              title="Reliable On-Site Delivery"
              description="We deliver directly to your construction site across Cape Coast and surrounding areas."
            />
          </div>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-hero">
            <h3 className="heading-md text-primary-foreground mb-4">
              Trusted by Local Builders & Contractors
            </h3>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-6">
              Join the growing number of construction professionals who rely on MONT RICHCON for their building material needs.
            </p>
            <Link 
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
