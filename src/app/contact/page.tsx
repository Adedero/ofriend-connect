import ContactDetails from "@/components/contact/contact-details";
import ContactForm from "@/components/contact/contact-form";
import ContactHeader from "@/components/contact/header";
import CTA from "@/components/global/cta";

export default function Contact() {
  return (
    <div>
      <ContactHeader />

      <section className="flex-center px-5 py-5">
        <div className="grid lg:grid-cols-5 bg-background shadow p-2.5 border border-muted rounded-lg w-full lg:max-w-[80%] xl:max-w-[70%] -translate-y-10">
          <div className="lg:col-span-2">
            <ContactDetails />
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <div className="my-10">
        <div className="bg-[url(/img/contact/contact-decor-1.png)] bg-cover bg-no-repeat h-120" />
      </div>

      <div className="my-20 px-5 lg:px-20">
        <CTA />
      </div>
    </div>
  );
}
