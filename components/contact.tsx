"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

const WHATSAPP_NUMBER = "254718601976"; // 👈 replace with your real number

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const text = `
*New Cleaning Request - Nairobi Homes Mobile Cleaners*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
🧼 Service: ${form.service}

💬 Message:
${form.message}
    `;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Contact Nairobi Homes Mobile Cleaners
          </h1>

          <p className="mt-4 text-muted-foreground">
            Book a cleaning service or request a free quote. We respond fast on WhatsApp.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="rounded-3xl border bg-background p-6 shadow-sm">
              <h2 className="text-xl font-bold">Get in Touch</h2>

              <div className="mt-6 space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" />
                  <span>+254 718 601 976</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <span>shibiramcdonald8@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" />
                  <span>Nairobi, Kenya</span>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="text-primary" />
                  <span>Fast WhatsApp Response (24/7)</span>
                </div>
              </div>
            </div>

            {/* WHY CONTACT */}
            <div className="rounded-3xl border bg-secondary/10 p-6">
              <h3 className="text-lg font-bold">
                Why Book With Us?
              </h3>

              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>✔ Fast same-day cleaning services</li>
                <li>✔ Affordable pricing</li>
                <li>✔ Professional trained cleaners</li>
                <li>✔ Home, office & commercial cleaning</li>
              </ul>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border bg-background p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-bold">
              Request a Cleaning Service
            </h2>

            <div className="space-y-5">
              {/* NAME */}
              <div>
                <Label>Name</Label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </div>

              {/* PHONE */}
              <div>
                <Label>Phone Number</Label>
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="07XXXXXXXX"
                />
              </div>

              {/* SERVICE */}
              <div>
                <Label>Service Needed</Label>
                <Input
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  placeholder="e.g Sofa cleaning, Carpet cleaning"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <Label>Message</Label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your cleaning needs..."
                  rows={5}
                />
              </div>

              {/* BUTTON */}
              <Button
                type="button"
                onClick={sendToWhatsApp}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send via WhatsApp
                <Send className="ml-2 size-5" />
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By sending, you will be redirected to WhatsApp chat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;