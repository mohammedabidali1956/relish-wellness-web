import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const TermsAndConditionsPage = () => {
  const canonicalUrl = "https://www.drhamidphysio.in/terms-and-conditions";

  return (
    <main className="min-h-screen bg-[#faf6ed] px-4 py-12 sm:py-16">
      <Helmet>
        <title>Terms &amp; Conditions | Dr Hamid’s Physio and Pain Clinic</title>
        <meta name="description" content="Draft website terms for Dr Hamid’s Physio and Pain Clinic, Manikonda, Hyderabad." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Terms &amp; Conditions | Dr Hamid’s Physio and Pain Clinic" />
        <meta property="og:description" content="Draft terms for using the clinic website and contacting the clinic." />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <article className="prose prose-slate mx-auto max-w-4xl rounded-2xl border border-[#e5dec9] bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
        <p className="not-prose rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
          Draft for clinic review. The clinic’s legal entity, governing-law choice, cancellation/refund terms, and other service conditions have not been confirmed.
        </p>
        <h1>Terms &amp; Conditions</h1>
        <p><strong>Draft prepared:</strong> <time dateTime="2026-10-25">October 25, 2026</time></p>
        <p>
          These draft terms relate to use of the website for Dr Hamid’s Physio and Pain Clinic, Manikonda, Hyderabad, Telangana, India. They are not a substitute for terms approved by the clinic after review of its legal and operational details.
        </p>

        <h2>Website information</h2>
        <p>
          Website pages and articles provide general information about physiotherapy and health topics. They are not a diagnosis, individual medical advice, or a treatment plan. A clinician must assess an individual’s symptoms and circumstances before making care decisions. Do not delay urgent medical attention because of information on this website.
        </p>
        <p>
          Treatment suitability, response, and recovery vary by person. The website does not promise a treatment result or recovery timeline. Follow the advice of your treating clinician and seek urgent local medical care for severe, sudden, or concerning symptoms.
        </p>

        <h2>Appointments and messages</h2>
        <p>
          The website’s appointment and callback forms prepare a message for WhatsApp. Opening a prefilled message does not send it; you must review and send the message in WhatsApp. A website message is not an automatically confirmed appointment. Contact the clinic directly to discuss availability, fees, home-visit arrangements, and any other booking details.
        </p>
        <p>
          Contact options may lead to third-party services, which have their own terms and privacy practices. See the <Link to="/privacy-policy">Privacy Policy draft</Link> for the data flows verified in the website code and items still awaiting confirmation.
        </p>

        <h2>Third-party websites and information</h2>
        <p>
          The site links to external services and resources, including Google Maps, WhatsApp, Practo, and clinical information providers. Those websites are operated by third parties. The clinic does not control their content, availability, policies, or data practices; check the relevant provider’s information before using its service.
        </p>

        <h2>Use of the website</h2>
        <p>
          Use the site lawfully and do not attempt to disrupt its operation, bypass security controls, or misuse its forms or contact options. Website content, branding, and materials may be subject to rights held by the clinic or other owners; obtain permission from the relevant rights holder before reusing protected material.
        </p>

        <h2>Availability and changes</h2>
        <p>
          Website information, clinic hours, listed services, contact options, and third-party links may change. Confirm current details directly with the clinic before relying on them. No uptime, uninterrupted access, or third-party service availability is promised by this draft.
        </p>

        <h2>Open items for clinic review</h2>
        <ul>
          <li>Confirm the business’s legal identity and who is responsible for these terms.</li>
          <li>Have the terms reviewed for applicable consumer, healthcare, privacy, and e-commerce rules.</li>
          <li>Confirm the governing law and dispute-resolution/contact process; none is specified in this draft.</li>
          <li>Confirm appointment cancellation, rescheduling, fee, refund, home-visit, and service-delivery terms before publishing them here.</li>
          <li>Confirm how website content may be reused and who owns any third-party materials displayed on the site.</li>
        </ul>

        <h2>Contact</h2>
        <p>
          For clinic enquiries, use the <Link to="/contact">contact page</Link>. For privacy questions, use the placeholder contact shown in the <Link to="/privacy-policy">Privacy Policy draft</Link> after it has been replaced with a monitored address.
        </p>
      </article>
    </main>
  );
};

export default TermsAndConditionsPage;
