import ContactForm from "../../components/Contacts/ContactForm";
import ContactMap from "../../components/Contacts/ContactMap";
import Container from "../../components/Container";

export default function Contact() {
  return (
    <div className="-mt-10">
      <div className="bg_contact-img h-64">
        <Container>
          <h1 className="text-2xl text-white pt-12 mb-5">تماس با ما</h1>
          <hr className={"bg-red-500"} />
          <p className=" text-white my-5">
            ما منتظر شنیدن از شما هستیم! برای هرگونه سوال، پیشنهاد یا درخواست
            پشتیبانی، از طریق راه‌های ارتباطی با ما در تماس باشید.
          </p>
        </Container>
      </div>
      <ContactMap />
      <Container>
        <div className="my-10">
          <h2 className="text-2xl pt-10">ارسال پیام به ما</h2>
          <p className="text-base my-3">
            برای پیگیری سفارش خود و یا طرح سوال، فرم زیر را تکمیل کنید.
          </p>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
