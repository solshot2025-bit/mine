import AlertBanner from '../AlertBanner';

export default function AlertBannerExample() {
  return (
    <div className="space-y-4">
      <AlertBanner 
        type="warning"
        title="Important Notice"
        message="Turbonet and Broadband Sim Cards are not eligible for this offer"
        details={[
          "Please do not place orders for the same number at the same time interval. One will be rejected and no refund will be provided.",
          "Data bundle delivery is not instant. Some numbers may receive data faster while others take some time."
        ]}
      />
      <AlertBanner 
        type="info"
        title="STRICT POLICY: NO SOCIAL MEDIA ADVERTISING"
        message="We do NOT allow social media advertisements of our services. If we find this page or our services advertised on your social media accounts, your account will be PERMANENTLY DELETED from our system without warning."
      />
    </div>
  );
}
