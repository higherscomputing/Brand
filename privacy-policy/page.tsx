import { PageTemplate } from "@/components/page-template"

export default function PrivacyPolicyPage() {
  return (
    <PageTemplate
      title="Privacy Policy"
      description="How we collect, use, and protect your information."
      section="Privacy Policy"
    >
      <div className="prose prose-blue dark:prose-invert max-w-none">
        <p>
          <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
        </p>

        <h2>Introduction</h2>
        <p>
          This Privacy Policy describes how Highers Computing ("we", "our", or "us") collects, uses, and shares your
          personal information when you visit our website, use our services, or otherwise interact with us.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect several types of information from and about users of our website, including:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> This includes information that can be used to identify you, such as
            your name, email address, postal address, phone number, and other identifiers.
          </li>
          <li>
            <strong>Usage Information:</strong> This includes information about how you use our website, such as the
            pages you visit, the time and date of your visits, and the time spent on those pages.
          </li>
          <li>
            <strong>Device Information:</strong> This includes information about the device you use to access our
            website, such as the hardware model, operating system, unique device identifiers, and mobile network
            information.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect for various purposes, including:</p>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To allow you to participate in interactive features of our services</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our services</li>
          <li>To monitor the usage of our services</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>We may share your personal information in the following situations:</p>
        <ul>
          <li>
            <strong>With Service Providers:</strong> We may share your information with service providers to monitor and
            analyze the use of our services, or to contact you.
          </li>
          <li>
            <strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or
            during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of
            our business to another company.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with
            your consent.
          </li>
        </ul>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
        <ul>
          <li>The right to access the personal information we have about you</li>
          <li>The right to request that we correct or update your personal information</li>
          <li>The right to request that we delete your personal information</li>
          <li>The right to object to the processing of your personal information</li>
          <li>The right to request restrictions on how we use your personal information</li>
          <li>The right to data portability</li>
        </ul>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>
          <strong>Email:</strong> privacy@higherscomputing.com
          <br />
          <strong>Address:</strong> 123 Tech Street, Digital City, DC 12345
        </p>
      </div>
    </PageTemplate>
  )
}

