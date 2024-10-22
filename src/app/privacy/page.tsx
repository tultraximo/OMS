import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container p-4 md:p-8 mx-auto xl:px-0">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>
        Your privacy is important to us. This privacy statement explains the
        personal data we process, how we process it, and for what purposes.
      </p>
      <h2 className="text-xl font-bold mt-4">Information We Collect</h2>
      <p>
        We collect information to provide better services to all our users. The
        types of information we collect include...
      </p>
      <h2 className="text-xl font-bold mt-4">How We Use Information</h2>
      <p>
        We use the information we collect for the following purposes: to provide
        our services, to maintain & improve our services, to develop new
        services, and to protect our users.
      </p>
      <h2 className="text-xl font-bold mt-4">Information We Share</h2>
      <p>
        We do not share personal information with companies, organizations, or
        individuals outside of our company except in the following cases...
      </p>
      <h2 className="text-xl font-bold mt-4">Your Privacy Controls</h2>
      <p>
        You have certain controls over your privacy. You can adjust your privacy
        settings to control what we collect and how it is used.
      </p>
      <h2 className="text-xl font-bold mt-4">Changes to This Policy</h2>
      <p>
        Our Privacy Policy may change from time to time. We will post any
        privacy policy changes on this page.
      </p>
      <p className="mt-4">
        If you have any questions about this Privacy Policy, please contact us.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
