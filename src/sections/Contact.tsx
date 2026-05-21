import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mpqndwoy");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-8 md:px-24 lg:px-40 text-center scroll-mt-24">
        <div className="max-w-2xl mx-auto bg-slate-800/50 border border-cyan-400/30 p-10 rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Merci ! ✨</h2>
          <p className="text-slate-300">
            Votre message a bien été envoyé. Je reviendrai vers vous dès que possible.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-8 text-sm text-slate-500 hover:text-cyan-400 underline font-mono transition-colors"
          >
            Envoyer un autre message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-8 md:px-24 lg:px-40 scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center">
          <span className="text-cyan-400 font-mono text-xl mr-3">04.</span>
          Contact
        </h2>
        <div className="h-px bg-slate-700 grow max-w-md"></div>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-slate-400 text-center mb-10 leading-relaxed">
          Je suis toujours à l'écoute de nouveaux projets. 
          Que ce soit pour une question ou une proposition de collaboration, n'hésitez pas !
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="full-name" className="text-slate-300 font-mono text-sm">Prénom & Nom</label>
              <input 
                id="full-name" type="text" name="name" required
                className="bg-slate-800 border border-slate-700 rounded p-3 text-slate-100 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all"
                placeholder="Prénom Nom"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-fuchsia-400 text-xs" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-slate-300 font-mono text-sm">Email</label>
              <input 
                id="email" type="email" name="email" required
                className="bg-slate-800 border border-slate-700 rounded p-3 text-slate-100 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all"
                placeholder="john@example.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-fuchsia-400 text-xs" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-slate-300 font-mono text-sm">Message</label>
            <textarea 
              id="message" name="message" rows={5} required
              className="bg-slate-800 border border-slate-700 rounded p-3 text-slate-100 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all"
              placeholder="Votre message ici..."
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-fuchsia-400 text-xs" />
          </div>

          <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full border border-cyan-400 text-cyan-400 py-4 rounded font-mono hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;