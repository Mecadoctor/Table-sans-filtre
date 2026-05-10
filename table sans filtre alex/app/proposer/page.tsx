"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLockup } from "@/components/Logo";

export default function ProposerPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    why: ""
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Front-only validation for now
    if (!formData.name || !formData.role || !formData.why) {
      return;
    }
    setSent(true);
    // TODO: Connect to email/CRM later
  }

  if (sent) {
    return (
      <main>
        <div className="border-b border-white/10">
          <div className="container-page flex items-center justify-between py-8">
            <BrandLockup />
            <Link className="btn btn-ghost" href="/">Retour</Link>
          </div>
        </div>
        <div className="container-page py-12">
          <div className="card p-8 text-center max-w-2xl mx-auto">
            <div className="text-2xl font-semibold text-white mb-3">Merci !</div>
            <div className="text-muted mb-6">
              Votre proposition a été reçue. Nous vous contacterons si l'invité est sélectionné.
            </div>
            <Link className="btn btn-primary" href="/">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="border-b border-white/10">
        <div className="container-page flex items-center justify-between py-8">
          <BrandLockup />
          <Link className="btn btn-ghost" href="/">Retour</Link>
        </div>
      </div>
      <div className="container-page py-12">
        <h1 className="text-3xl font-semibold text-white">Proposer un invité</h1>
        <p className="mt-2 text-muted">
          Formulaire simple (front). Branche-le plus tard à un email / CRM.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <form onSubmit={submit} className="card p-6">
            <label className="mb-2 block text-sm font-medium text-white">Nom</label>
            <input 
              className="input" 
              required 
              placeholder="Nom de la personne"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label className="mb-2 mt-5 block text-sm font-medium text-white">Rôle / Organisation</label>
            <input 
              className="input" 
              required 
              placeholder="Ex: CEO — Entreprise"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
            <label className="mb-2 mt-5 block text-sm font-medium text-white">Pourquoi cette personne ?</label>
            <textarea 
              className="input min-h-[140px]" 
              required 
              placeholder="2–5 lignes: impact, histoire, pourquoi elle serait intéressante pour le podcast."
              value={formData.why}
              onChange={(e) => setFormData({ ...formData, why: e.target.value })}
            />
            <button type="submit" className="btn btn-primary mt-6 w-full">
              Envoyer la proposition
            </button>
          </form>
          <div className="card p-6">
            <div className="text-sm font-semibold text-white mb-3">Critères de sélection</div>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2">
                <span className="text-redp mt-1">•</span>
                <span>Impact réel dans la région</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-redp mt-1">•</span>
                <span>Parcours solide avec des leçons à partager</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-redp mt-1">•</span>
                <span>Histoire authentique et utile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-redp mt-1">•</span>
                <span>Ouverture à parler sans filtre</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

