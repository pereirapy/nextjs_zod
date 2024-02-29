import Button from '@/components/button';
import LabelWithInput from '@/components/label-with-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ContactAgentSchema, contactAgentSchema } from './schema';
import { useState } from 'react';

const ContactAgent = () => {
  const [showSendOk, setShowSendOk] = useState(false);

  const form = useForm<ContactAgentSchema>({
    resolver: zodResolver(contactAgentSchema),
    mode: 'onChange',
  });

  const handleContact = (formData: ContactAgentSchema) => {
    console.log({ formData });
    setShowSendOk(true);
  };
  return (
    <div className="box-border p-4 border border-gray-300 bg-gray-200">
      <h1 className="text-xl text-center">Contact Agent</h1>
      <form onSubmit={form.handleSubmit(handleContact)}>
        <LabelWithInput
          control={form.control}
          name="fullName"
          label="Full Name *"
          placeHolder="Please write your Full Name"
        />
        <LabelWithInput
          control={form.control}
          name="email"
          type="email"
          label="Email *"
          placeHolder="Please write your Email"
        />
        <LabelWithInput
          control={form.control}
          name="phoneNumber"
          label="Phone Number *"
          placeHolder="Please write your Phone Number"
        />
        <LabelWithInput
          control={form.control}
          name="comments"
          type="textArea"
          label="Comments *"
          placeHolder="Please write your Comments"
        />
        {showSendOk && (
          <p className="text-green-600">Message sent successfully</p>
        )}
        <div className="text-center mt-4">
          <Button type="submit">Contact Now</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactAgent;
