import { Phone, MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';

const businessHours = [
  { day: 'Monday - Friday', hours: '6:00 AM – 6:00 PM' },
  { day: 'Saturday', hours: '6:00 AM – 4:00 PM' },
  { day: 'Sunday', hours: '1:00 PM – 5:00 PM' },
];

const ContactPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-primary-foreground mb-4">Get in Touch</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            We're here to help with all your construction needs
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h2 className="heading-md text-foreground mb-8">Contact Information</h2>

              <div className="space-y-6">
                {/* Phone */}
                <a 
                  href="tel:+233243256913"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Phone</h3>
                    <p className="text-primary text-lg font-semibold">024 325 6913</p>
                    <p className="text-muted-foreground text-sm mt-1">Click to call</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/233249210019?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20concrete%20blocks."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover group"
                >
                  <div className="w-14 h-14 bg-whatsapp/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-whatsapp/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-whatsapp" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">WhatsApp</h3>
                    <p className="text-whatsapp text-lg font-semibold">024 921 0019</p>
                    <p className="text-muted-foreground text-sm mt-1">Click to chat instantly</p>
                  </div>
                </a>

                {/* Alternative WhatsApp */}
                <a 
                  href="https://wa.me/233243256916?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20concrete%20blocks."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover group"
                >
                  <div className="w-14 h-14 bg-whatsapp/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-whatsapp/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-whatsapp" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Alternative WhatsApp</h3>
                    <p className="text-whatsapp text-lg font-semibold">024 325 6916</p>
                    <p className="text-muted-foreground text-sm mt-1">Click to chat</p>
                  </div>
                </a>

                {/* Address */}
                <a 
                  href="https://maps.google.com/?q=5.179599198138507,-1.3079564600090339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border shadow-card card-hover group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Yayaakwano Jukwa Road, Cape Coast</p>
                    <p className="text-primary text-sm mt-2 flex items-center gap-1">
                      Open in Google Maps <ExternalLink className="w-3 h-3" />
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="heading-md text-foreground mb-8">Business Hours</h2>

              <div className="bg-muted rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-display font-bold text-lg text-foreground">Opening Hours</h3>
                </div>

                <div className="space-y-4">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{item.day}</span>
                      <span className="text-muted-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mt-6 italic">
                  * Hours may vary on public holidays. Please call ahead to confirm.
                </p>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.7!2d-1.3079564600090339!3d5.179599198138507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTAnNDYuNiJOIDHCsDE4JzI4LjYiVw!5e0!3m2!1sen!2sgh!4v1600000000000!5m2!1sen!2sgh"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MONT RICHCON Location"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-grey section-padding">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-hero">
            <h3 className="heading-md text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-6">
              Contact us today for a quote. We're ready to deliver quality blocks to your construction site.
            </p>
            <a 
              href="https://wa.me/233249210019?text=Hello!%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20construction%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <MessageCircle className="w-5 h-5" />
              Get a Quote Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
