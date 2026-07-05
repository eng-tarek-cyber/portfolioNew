"use client";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionWrapper } from "@/components/ui/motion";
import { motion } from "framer-motion";
import {
  Copy,
  Check,
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function copyText(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* fallback silent */
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);
    const hp = fd.get("_gotcha") as string;
    if (hp) return;

    setLoading(true);

    try {
      const res = await fetch(siteConfig.contact.formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          subject: fd.get("subject") || "Portfolio contact",
          message: fd.get("message"),
          _gotcha: hp || "",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error("fail");
      setSuccess(true);
      form.reset();
    } catch {
      setError(
        "Failed to send message. Please try email or WhatsApp directly."
      );
    } finally {
      setLoading(false);
    }
  }

  const infoItems = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      copyKey: "email",
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phoneDisplay,
      copyValue: siteConfig.phone,
      copyKey: "phone",
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Ready to start your next project? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <MotionWrapper className="lg:col-span-2 space-y-6">
            {infoItems.map(({ icon: Icon, label, value, copyKey, copyValue }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-violet-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {label}
                  </h4>
                  <p className="text-sm text-muted break-all">{value}</p>
                  {copyKey && (
                    <button
                      type="button"
                      onClick={() =>
                        copyText(copyValue || value, copyKey)
                      }
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      {copied === copyKey ? (
                        <>
                          <Check size={12} /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={12} /> Copy
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              {Object.entries(siteConfig.social).map(([key, url]) => (
                <Button
                  key={key}
                  href={url}
                  variant="outline"
                  size="sm"
                  external
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Button>
              ))}
            </div>
          </MotionWrapper>

          <MotionWrapper className="lg:col-span-3" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8"
              noValidate
            >
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
              />

              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 text-sm"
                  role="status"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {error && (
                <div
                  className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/20 text-red-400 text-sm"
                  role="alert"
                >
                  {error}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted focus:outline-none focus:border-violet-500/50 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted focus:outline-none focus:border-violet-500/50 transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                autoComplete="off"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted focus:outline-none focus:border-violet-500/50 transition-colors mb-4"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted focus:outline-none focus:border-violet-500/50 transition-colors mb-6 resize-none"
              />

              <Button type="submit" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
