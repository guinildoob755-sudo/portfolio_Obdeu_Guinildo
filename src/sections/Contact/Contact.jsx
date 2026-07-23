import { motion } from "framer-motion";

const contacts = [
  { label: "Email", value: "guinildoo@gmail.com", url: "mailto:guinildoo@gmail.com" },
  { label: "LinkedIn", value: "guinildo-obdeu", url: "https://www.linkedin.com/in/guinildo-obdeu-b93248356" },
  { label: "GitHub", value: "guinildoob755-sudo", url: "https://github.com/guinildoob755-sudo" },
];

export default function Contact() {
  return (
    <section
      id="Contact"
      className="min-h-screen flex items-center justify-center px-8 py-20 bg-gradient-to-r from-[#171717] to-[#3a1f00]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full"
      >
        {/* Label */}
        <motion.div className="font-mono text-xs tracking-[0.25em] text-[#FF8C00] uppercase mb-3">
          // 05 — Contact
        </motion.div>

        <h2 className="text-4xl md:text-5xl text-[#F5F5F5] dark:text-[#F5F5F5] mb-8 tracking-tight">
          Let's work together
        </h2>

        <p className="text-lg text-[#F5F5F5] dark:text-[#F5F5F5] leading-relaxed mb-10">
          I'm actively looking for an{" "}
          <strong className="text-[#F5F5F5] dark:text-[#F5F5F5]">
            alternance starting September 2026
          </strong>
          . If you're building something interesting, I'd love to hear about it.
        </p>

        {/* Contact links */}
        <div className="flex flex-col gap-3">
          {contacts.map((c) => (
            <motion.a
              key={c.label}
              href={c.url}
              target={c.url.startsWith("http") ? "_blank" : undefined}
              rel={c.url.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="
                flex items-center gap-5
                px-6 py-4
                bg-[#F0F0F0] dark:bg-[#171717]
                border border-[#FF8C00]/30
                hover:border-[#FFD000]
                transition-colors duration-300
              "
            >
              <span className="font-mono text-xs tracking-[0.1em] uppercase text-[#FF8C00] w-20 shrink-0">
                {c.label}
              </span>
              <span className="text-[#1A1A1A] dark:text-[#F5F5F5] text-sm">
                {c.value}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-[#FF8C00]/40 to-transparent" />
      </motion.div>
    </section>
  );
}