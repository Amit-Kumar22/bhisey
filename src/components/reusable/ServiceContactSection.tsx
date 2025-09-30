"use client";
import React from 'react';
import ContactSection from '@/components/reusable/ContactSection';

/**
 * ServiceContactSection – preconfigured ContactSection variant for the Custom Software Development page.
 * Keeps props override capability while setting default heading/subtitle specific to service context.
 */
export const ServiceContactSection: React.FC<React.ComponentProps<typeof ContactSection>> = (props) => {
  return (
    <ContactSection
      id={props.id || 'contact-custom-software'}
      title={props.title || 'Reach out to Learn More about our Software Development Services'}
      subtitle={
        props.subtitle ||
        'Please provide your contact details and some information about your project, and our Team will respond promptly to see how we can best assist you. To send us an RFP, simply attach the document to the form below.'
      }
      {...props}
    />
  );
};

export default ServiceContactSection;
