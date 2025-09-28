import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

function Contact() {
  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

export default Contact