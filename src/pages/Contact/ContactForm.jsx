import { useState, useRef } from 'react';
import Input from '../../components/ui/Input';
import TextArea from '../../components/ui/TextArea';
import Button from '../../components/ui/Button';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const formRef = useRef();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      emailjs
        .sendForm(
          'service_f89prns', 
          'template_zyu3f94', 
          formRef.current, 
          'TqtYTn517cmahHbAt'
        )
        .then(
          () => {
            alert('We will get back to you soon!');
            setFormData({ name: '', email: '', subject: '', message: '' });
          },
          (error) => {
            console.error('Failed to send email:', error);
            alert('Error sending message. Please try again later.');
          }
        );
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <Input
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Subject"
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        error={errors.subject}
      />
      <TextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        error={errors.message}
      />
      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  );
}

export default ContactForm;
