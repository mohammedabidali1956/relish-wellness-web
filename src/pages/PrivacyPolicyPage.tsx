import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PRIVACY_EMAIL } from "@/lib/privacyConfig";

// TODO(privacy): Confirm the controller identity, privacy contact, enquiry handling, retention practices, third-party script behavior, and applicable visitor rights before publication.
const PrivacyPolicyPage = () => {
  const canonicalUrl = "https://www.drhamidphysio.in/privacy-policy";

  return (
    <div id="privacy-policy-page" className="min-h-screen bg-[#faf6ed] px-4 py-12 sm:py-16">
      <Helmet>
        <title>Privacy Policy | Dr Hamid’s Physio and Pain Clinic</title>
        <meta name="description" content="Draft privacy information for Dr Hamid’s Physio and Pain Clinic, Manikonda, Hyderabad." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Privacy Policy | Dr Hamid’s Physio and Pain Clinic" />
        <meta property="og:description" content="Draft privacy information for the clinic website and its contact options." />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <article className="prose prose-slate mx-auto max-w-4xl rounded-2xl border border-[#e5dec9] bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-12">
        <p className="not-prose rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
          Draft for clinic review. Confirm the open items below before treating this page as the clinic’s final privacy notice.
        </p>
        <h1>Privacy Policy</h1>
        <p><strong>Draft prepared:</strong> <time dateTime="2026-10-25">October 25, 2026</time></p>
        <p>
          This draft describes what is visible in the website code reviewed for Dr Hamid’s Physio and Pain Clinic, Manikonda, Hyderabad, Telangana, India. It does not confirm the clinic’s off-site data-handling practices, hosting-provider settings, or the behavior of third-party services.
        </p>

        <h2>Information entered in website forms</h2>
        <p>
          The appointment form asks for a name and phone number and offers an optional message. The callback form asks for a name and phone number. In the reviewed code, submitting either form opens WhatsApp with a prefilled message; it does not send the form fields to a clinic website form endpoint. The message reaches the clinic only if the visitor reviews and sends it in WhatsApp.
        </p>
        <p>
          If you choose to send a WhatsApp message, WhatsApp/Meta and the clinic may process the information under their own services and practices. The clinic’s handling, access, and retention of WhatsApp messages have not been confirmed for this draft. Do not include sensitive health details unless you are comfortable sending them through that external messaging service.
        </p>

        <h2>Third-party services visible in the website code</h2>
        <ul>
          <li>Google Maps is embedded on the home and contact pages. Loading the map may send technical information, such as an IP address and browser request data, to Google.</li>
          <li>Google Fonts are requested from Google Fonts when the site loads its selected typefaces.</li>
          <li>WhatsApp links and prefilled message forms open WhatsApp outside this website when selected.</li>
          <li>The site loads <code>https://cdn.gpteng.co/gptengineer.js</code>. Its current behavior and any data it may access or transmit have not been verified and require review before this draft is finalized.</li>
        </ul>
        <p>
          These providers operate under their own policies and settings. This draft does not make claims about their cookies, retention, processing locations, or use of information.
        </p>

        <h2>Analytics, advertising, cookies, and browser storage</h2>
        <p>
          A source-code search of the active application and project configuration did not find an implementation of Google Analytics, Google Tag Manager, Meta Pixel, Google Ads conversion tracking, Vercel Analytics, or Cloudflare Analytics. It also did not find active-route use of <code>localStorage</code> or <code>sessionStorage</code>. The source does contain a sidebar UI component that can write a first-party <code>sidebar:state</code> cookie if mounted; the reviewed application routes do not import that component. This code review does not confirm the live hosting dashboard, provider behavior, browser storage used by embedded services, or future deployment configuration.
        </p>
        <p>
          No cookie-consent tool was found in the reviewed application source. The clinic should verify the deployed site and the third-party script and embeds, then add any disclosures or consent controls required for its actual configuration and applicable law.
        </p>

        <h2>Retention and privacy requests</h2>
        <p>
          The clinic’s retention periods and deletion practices for WhatsApp enquiries, appointment details, and other communications have not been confirmed. This policy does not promise a retention period or that information is used only for a particular purpose. Please ask the clinic before sending information if you need details about how it will be handled.
        </p>
        <p>
          Privacy contact: <strong>{PRIVACY_EMAIL}</strong>. Replace this placeholder with a monitored clinic-approved contact before publication. The contact is not yet configured as a working email link.
        </p>

        <h2>Open items for clinic review</h2>
        <ul>
          <li>Confirm the legal data controller or operating entity and its approved privacy contact.</li>
          <li>Confirm retention, access, deletion, and any other handling of WhatsApp messages and appointment enquiries.</li>
          <li>Review the purpose and behavior of the GPTEngineer script and confirm hosting-provider logging and dashboard integrations.</li>
          <li>Verify cookies and other storage used by Google Maps, Google Fonts, WhatsApp links, and any deployed third-party scripts.</li>
          <li>Confirm the applicable privacy rights, complaint route, and response process for visitors in relevant jurisdictions.</li>
          <li>Confirm whether this site is intended for children and whether any additional protections apply.</li>
        </ul>

        <h2>Changes and related information</h2>
        <p>
          This draft should be updated after the clinic confirms the open items and whenever the site’s data flows materially change. Read the <Link to="/terms-and-conditions">Terms &amp; Conditions</Link> or <Link to="/contact">contact the clinic</Link>.
        </p>
      </article>
    </div>
  );
};

export default PrivacyPolicyPage;
