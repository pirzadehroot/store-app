import { Metadata } from "next";
import ContactForm from "../../components/Contacts/ContactForm";
import ContactMap from "../../components/Contacts/ContactMap";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "صفحه تماس با ما",
};

export default function Contact() {
  return (
    <div>
      <div className="bg_contact-img h-64">
        <div className="container mx-auto max-sm:text-center">
          <h1 className="text-2xl text-white pt-12 mb-5">تماس با ما</h1>
          <hr className={"bg-red-500"} />
          <p className=" text-white my-5">
            ما منتظر شنیدن از شما هستیم! برای هرگونه سوال، پیشنهاد یا درخواست
            پشتیبانی، از طریق راه‌های ارتباطی با ما در تماس باشید.
          </p>
        </div>
      </div>
      <ContactMap />
      <div className="container mx-auto">
        <div className="my-10 space-y-4 max-sm:text-center">
          <h2 className="text-2xl pt-10">ارسال پیام به ما</h2>
          <p className="">
            برای پیگیری سفارش خود و یا طرح سوال، فرم زیر را تکمیل کنید.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
