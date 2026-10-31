import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PRIVACY_EMAIL } from "@/lib/privacyConfig";

// TODO(privacy): Confirm consent/legal-basis requirements for the intended audiences and any applicable cookie consent before publishing GA4. Also confirm enquiry handling, retention/deletion, children's information safeguards, and applicable rights/complaint process.
const PrivacyPolicyPage = () => {
  const canonicalUrl = "https://www.drhamidphysio.in/privacy-policy";
  const privacyEmailUrl = `mailto:${PRIVACY_EMAIL}`;

  return (
    <div id="privacy-policy-page" className="min-h-screen bg-[#faf6ed] px-4 py-12 sm:py-16">
      <Helmet>
        <title>Privacy Policy | Dr Hamid’s Physio and PAIN Clinic</title>
        <meta name="description" content="privacy notice for Dr Hamid’s Physio and PAIN Clinic, covering website enquiries, WhatsApp links, maps, fonts, and third-party services." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Privacy Policy | Dr Hamid’s Physio and PAIN Clinic" />
        <meta property="og:description" content="privacy notice for the clinic website and its contact options, pending confirmation of some operational details." />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <article className="prose prose-slate mx-auto max-w-4xl rounded-2xl border border-[#e5dec9] bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">

        <h1>
          Privacy Policy
        </h1>
        <p>
          <strong>Last updated:</strong>{" "}
          <time dateTime="2026-10-25">25 October 2026</time>
        </p>
        <p>
          This notice concerns use of the website for Dr Hamid’s Physio and Pain Clinic in Manikonda, Hyderabad, Telangana, India. It describes website features visible in the reviewed project. It does not confirm every practice of the clinic, its hosting provider, or external services.
        </p>

        <h2 id="information-in-forms">
          Information entered in website forms
        </h2>
        <p>
          The appointment form asks for your name and phone number and allows an optional message. The callback form asks for your name and phone number. Information typed into the optional message field may include health details, so please avoid entering sensitive information unless you are comfortable sharing it through the WhatsApp handoff described below.
        </p>

        <h2 id="whatsapp-enquiries">
          Appointment and callback enquiries
        </h2>
        <p>
          In the reviewed application form handlers, submitting either form opens a WhatsApp link with the entered details in a pre-filled message. Those handlers do not submit the fields to a clinic-hosted form endpoint. The information is included in the link used to open WhatsApp; opening the link does not send a message to the clinic. You must review and press Send in WhatsApp for the clinic to receive the enquiry. WhatsApp and the clinic may then handle the message under their respective practices.
        </p>
        <p>
          The forms are presented for appointment and callback enquiries. The clinic has not confirmed how enquiries are handled after receipt, who may access them, or how long they are kept. No retention period or deletion promise is made.
        </p>

        <h2 id="third-party-services">
          Third-party services
        </h2>
        <ul>
          <li>
            Google Maps is embedded on the home and contact pages. Loading an embedded map makes a request to Google; the information processed by Google has not been independently verified for this notice.
          </li>
          <li>
            The site requests Google Fonts stylesheets for its typefaces. Google’s processing and logging for those requests have not been independently verified.
          </li>
          <li>
            WhatsApp is opened through links, including links containing pre-filled enquiry text. The site also links to external services such as Practo and Google Business Profile.
          </li>
          <li>
            The shared website HTML loads{" "}
            <code>https://cdn.gpteng.co/gptengineer.js</code>. The current script could not be retrieved for static review, and it was not executed. Its purpose, browser access, and any additional data it may access or transmit remain unknown.
          </li>
        </ul>
        <p>
          These providers operate their own services and publish their own privacy information. This does not make claims about their cookies, retention, processing locations, or use of information. Following an external link takes you to that provider’s service.
        </p>

        <h2 id="cookies-analytics">
          Cookies, analytics, and technical information
        </h2>
        <p>
          When a GA4 Measurement ID is configured for the production build and the site is opened on the clinic’s production domain, the website loads Google Analytics 4 using Google’s gtag.js. It sends an initial page view and records page changes detected through Google Analytics Enhanced Measurement browser-history tracking. It may use cookies or similar identifiers and Google may process technical information such as page and device data under its own terms. Development and preview hosts, and builds without a Measurement ID, do not initialize this implementation. No Google Tag Manager, Meta Pixel, Google Ads conversion tracking, Vercel Analytics, or Cloudflare Analytics implementation was identified in the application source.
        </p>
        <p>
          The website sends only the event names appointment_whatsapp_click, callback_whatsapp_click, and phone_call_click for the corresponding actions, with no event parameters. Form field values and prefilled WhatsApp links are not sent as custom event data. Automatic outbound-click and form-interaction measurement are intended to remain disabled in the GA4 web data stream. No cookie or analytics consent tool was identified in the application source; consent requirements and the appropriate legal basis must be reviewed before production analytics is enabled. The deployed GA4 configuration and actual Google processing have not been independently verified.
        </p>

        <h2 id="security-retention">
          Sharing, security, and retention
        </h2>
        <p>
          The clinic has not confirmed its arrangements for access to, sharing of, securing, retaining, or deleting enquiries after they arrive through WhatsApp or other contact channels. This does not promise a particular security measure, retention period, deletion process, or use limited to a particular purpose. Please contact the clinic before sending information if you need these details.
        </p>

        <h2 id="children-information">
          Information about children
        </h2>
        <p>
          The clinic has not yet confirmed the intended audience or any additional arrangements for enquiries involving children’s information.
        </p>

        <h2 id="privacy-contact">
          Privacy questions and requests
        </h2>
        <p>
          For privacy questions or requests, email the clinic at{" "}
          <a
            href={privacyEmailUrl}
            className="font-medium text-relish-700 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-relish-500"
          >
            {PRIVACY_EMAIL}
          </a>
          . The clinic has not confirmed a separate privacy officer or response timeline. Any applicable rights and complaint process should be confirmed with the clinic or qualified legal counsel.
        </p>

        <h2 id="policy-updates">
          Changes to this notice
        </h2>
        <p>
          This notice should be reviewed when website features or the clinic’s information-handling practices change. Read the{" "}
          <Link to="/terms-and-conditions">
            Terms &amp; Conditions
          </Link>{" "}
          or{" "}
          <Link to="/contact">
            contact the clinic
          </Link>
          .
        </p>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
