import type { JSX } from "react";
import DialogBase from "..";
import type { LucideProps } from "lucide-react";
import { Mail, Globe, Instagram, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { toast } from "sonner";

interface DialogFooterProps {
  link: {
    label: string;
    url?: string;
  };
}

export default function DialogFooter({ link }: DialogFooterProps) {
  return (
    <DialogBase
      trigger={<li className="text-sm hover:underline cursor-pointer mb-2">{link.label}</li>}
      title={link.label}
      description=""
    >
      {getDialogContent(link.label)}
    </DialogBase>
  );
}

function getDialogContent(label: string) {
  const contentMap: Record<string, JSX.Element> = {
    contato: <DialogContentContact />,
    ajuda: <DialogContentHelp />,
    documentação: <DialogContentDocs />,
  };

  return contentMap[label.toLowerCase()] || null;
}

export function DialogContentContact() {
  return (
    <div className="p-4 space-y-4">
      <p className="text-sm text-gray-600">
        Fale conosco pelos canais abaixo e responderemos o mais rápido possível.
      </p>
      <Separator />
      <div className="space-y-2">
        <EmailCopyItem email="contato.raventech@gmail.com" />
        <ContactItem
          icon={Phone}
          label="WhatsApp"
          value="+55 85 98933-8909"
          href="https://wa.me/5585989338909?text=Olá,%20queria%20saber%20melhor%20sobre%20os%20produtos%20e%20serviços%20da%20Raven."
        />
        <ContactItem
          icon={Instagram}
          label="Instagram"
          value="@raventechsolutions"
          href="https://instagram.com/raventechsolutions"
        />
        <ContactItem
          icon={Globe}
          label="Nosso site"
          value="www.raventech.com.br/"
          href="https://raventech.com.br/"
        />
      </div>
    </div>
  );
}

function EmailCopyItem({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copiado para a área de transferência!");

    setTimeout(() => setCopied(false), 2000); // Reseta o estado após 2s
  };

  return (
    <div
      onClick={copyToClipboard}
      className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition cursor-pointer"
    >
      {copied ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <Mail className="w-5 h-5 text-gray-600" />
      )}
      <div>
        <p className="text-sm font-medium">Email</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
    </div>
  );
}
export function DialogContentHelp() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">Central de Ajuda</h2>
      <p className="text-sm text-gray-600">Precisa de suporte? Acesse nossos canais de ajuda.</p>
      <Separator />
      <Button
        variant="outline"
        className="w-full"
        onClick={() => window.open("https://raventech.com.br/ajuda", "_blank")}
      >
        Acessar Central de Ajuda
      </Button>
    </div>
  );
}

export function DialogContentDocs() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">Documentação</h2>
      <p className="text-sm text-gray-600">
        Consulte nossa documentação para aprender mais sobre a plataforma.
      </p>
      <Separator />
      <Button
        variant="outline"
        className="w-full"
        onClick={() => window.open("https://raventech.com.br/docs", "_blank")}
      >
        Acessar Documentação
      </Button>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition"
    >
      <Icon className="w-5 h-5 text-gray-600" />
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-gray-500">{value}</p>
      </div>
    </a>
  );
}
