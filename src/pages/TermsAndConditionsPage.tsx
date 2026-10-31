import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PRIVACY_EMAIL } from "@/lib/privacyConfig";

// TODO(legal): Confirm the operating entity, applicable legal terms, and appointment, fee, cancellation, refund, and home-visit conditions before approval. Do not add unverified policies or legal clauses.
const TermsAndConditionsPage = () => {
  const canonicalUrl = "https://www.drhamidphysio.in/terms-and-conditions";
  const privacyEmailUrl = `mailto:${PRIVACY_EMAIL}`;

  return (
    <div id="terms-and-conditions-page" className="min-h-screen bg-[#faf6ed] px-4 py-12 sm:py-16">
      <Helmet>
        <title>Terms &amp; Conditions | Dr Hamid’s Physio and PAIN Clinic</title>
        <meta name="description" content="website terms for Dr Hamid’s Physio and PAIN Clinic, including health information, WhatsApp enquiries, and service availability." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Terms &amp; Conditions | Dr Hamid’s Physio and PAIN Clinic" />
        <meta property="og:description" content="terms for using the clinic website and contacting the clinic, pending confirmation of service and legal details." />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <article className="prose prose-slate mx-auto max-w-4xl rounded-2xl border border-[#e5dec9] bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">

        <h1>
          Terms &amp; Conditions
        </h1>
        <p>
          <strong>Last updated:</strong>{" "}
          <time dateTime="2026-10-25">25 October 2026</time>
        </p>
        <p>
          These terms concern use of the website presenting information and contact options for Dr Hamid’s Physio and Pain Clinic in Manikonda, Hyderabad, Telangana, India. The clinic’s registered or operating legal identity has not been confirmed.
        </p>

        <h2 id="website-information">
          Website information and health topics
        </h2>
        <p>
          Website pages and articles provide general information about physiotherapy and health topics. They are not a diagnosis, individual medical advice, or a treatment plan. A clinician must assess an individual’s symptoms and circumstances before making care decisions. Do not delay urgent medical attention because of information on this website.
        </p>
        <p>
          Treatment suitability, response, and recovery vary by person. The website does not promise a treatment result or recovery timeline. Follow the advice of your treating clinician and seek urgent local medical care for severe, sudden, or concerning symptoms.
        </p>

        <h2 id="appointments-and-messages">
          Appointments and messages
        </h2>
        <p>
          The appointment and callback forms place the details you enter into a pre-filled WhatsApp link. Opening that link does not send a message to the clinic; review it and press Send in WhatsApp if you wish to submit the enquiry. Sending an enquiry does not itself confirm an appointment. Contact the clinic to confirm availability and booking details.
        </p>
        <p>
          The website does not specify a response time or guarantee that a requested appointment will be available. See the{" "}
          <Link to="/privacy-policy">
            Privacy Policy 
          </Link>{" "}
          for information about the WhatsApp handoff and unresolved privacy details.
        </p>

        <h2 id="service-availability">
          Services and home visits
        </h2>
        <p>
          The website describes home visits as generally targeted within an approximate 15 km radius of Manikonda. This is not an exact road-distance promise or a guarantee of service in every area. Actual availability depends on the patient’s address and must be confirmed with the clinic before making arrangements.
        </p>
        <p>
          The website currently lists a consultation fee of ₹300 and physiotherapy treatment from ₹500, with total treatment cost varying by treatment. Confirm current charges directly with the clinic before booking. The website does not specify advance-payment requirements, cancellation or rescheduling deadlines, refund rules, or home-visit charges; ask the clinic to confirm any terms that apply before arranging a visit or making a payment.
        </p>

        <h2 id="third-party-services">
          Third-party services and links
        </h2>
        <p>
          The website embeds Google Maps and links to external services, including WhatsApp, Google Business Profile, Practo, and social media services. Google Fonts are also requested to display the site’s typefaces. These services are operated by their providers and may have separate terms and privacy practices. Review the provider’s information when using its service. This  does not describe every external provider’s availability or data practices.
        </p>

        <h2 id="website-use-and-content">
          Website use and content
        </h2>
        <p>
          Use the website lawfully and do not attempt to disrupt its operation, bypass security controls, or misuse its forms or contact options. Website content and materials may be protected by rights belonging to the clinic or other rights holders. Obtain permission from the relevant rights holder before copying, republishing, or commercially using protected material.
        </p>

        <h2 id="availability-and-updates">
          Availability and updates
        </h2>
        <p>
          Website information, clinic hours, listed services, contact options, and third-party links may change or become unavailable. Confirm current service and appointment details with the clinic before relying on them.
        </p>

        <h2 id="contact">
          Contact
        </h2>
        <p>
          For clinic enquiries, use the{" "}
          <Link to="/contact">
            contact page
          </Link>{" "}
          or call{" "}
          <a
            href="tel:+917601026596"
            className="font-medium text-relish-700 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-relish-500"
          >
            +91 76010 26596
          </a>
          . For privacy questions, visit the{" "}
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          or email{" "}
          <a
            href={privacyEmailUrl}
            className="font-medium text-relish-700 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-relish-500"
          >
            {PRIVACY_EMAIL}
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default TermsAndConditionsPage;
