import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FadeIn } from '../components/Shared';
import { Shield, Lock, FileText, UserCheck, Video, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const policies = [
    {
      icon: Lock,
      title: "1. Sigilo Ético e Confidencialidade",
      content: "O princípio fundamental e indispensável da psicoterapia é a confiança. Tudo o que é dito, discutido e trabalhado em sessão é protegido por rigoroso sigilo profissional. As informações clínicas tratadas durante nossos encontros seguem estritamente as diretrizes do Código de Ética Profissional do Psicólogo, garantindo a proteção da sua intimidade e privacidade."
    },
    {
      icon: UserCheck,
      title: "2. Coleta e Uso de Dados",
      content: "Os dados coletados (como nome, telefone e informações fornecidas durante o contato via WhatsApp) são utilizados exclusivamente para fins de agendamento, comunicação direta e prestação do serviço de psicologia clínica. Durante as sessões, informações sensíveis sobre sua saúde mental, história de vida e emoções são colhidas unicamente com a finalidade de conduzir o seu processo terapêutico."
    },
    {
      icon: Video,
      title: "3. Privacidade no Atendimento Online",
      content: "As sessões de psicoterapia online são realizadas por meio de plataformas de videochamada seguras, que contam com criptografia ponta a ponta. É expressamente proibida a gravação (em áudio ou vídeo) das sessões por qualquer uma das partes, a fim de preservar o sigilo. Recomenda-se fortemente que, durante a sessão, o paciente esteja em um ambiente privativo, seguro, onde não possa ser interrompido ou ouvido por terceiros, preferencialmente utilizando fones de ouvido."
    },
    {
      icon: FileText,
      title: "4. Armazenamento de Prontuários Clínicos",
      content: "Para o acompanhamento do caso, é obrigatório a manutenção de registros documentais (prontuários clínicos). Estes documentos são armazenados em ambiente seguro, restrito e confidencial, protegidos contra acessos não autorizados. Conforme determinação do Conselho Federal de Psicologia (Resolução CFP nº 01/2009), estes registros devem ser guardados pelo período mínimo de 5 (cinco) anos. Após este prazo, podem ser destruídos de forma segura."
    },
    {
      icon: Shield,
      title: "5. Compartilhamento de Informações",
      content: "Suas informações jamais serão vendidas, cedidas ou compartilhadas com terceiros para fins comerciais. A quebra do sigilo profissional é uma medida de exceção, que só ocorre em situações extremas previstas e autorizadas pela legislação e pelo Código de Ética (por exemplo, em situações de grave risco à integridade física do paciente ou de terceiros), sendo repassadas apenas as informações estritamente necessárias à autoridade ou responsável pertinente."
    },
    {
      icon: Info,
      title: "6. Direitos do Titular dos Dados (LGPD)",
      content: "Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar acesso aos seus dados cadastrais e corrigir informações desatualizadas. Vale ressaltar que a eliminação de dados presentes em prontuários clínicos antes do prazo legal exigido pelo Conselho Federal de Psicologia (5 anos) não é permitida por norma superior específica da área da saúde."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Política de Privacidade e Termos de Uso | Patrícia Gavazza</title>
        <meta name="description" content="Leia nossa política de privacidade e entenda como seus dados e o sigilo das suas sessões de terapia online são protegidos rigorosamente." />
        <link rel="canonical" href="https://www.patriciagavazza.com.br/privacidade" />
      </Helmet>
      <main className="pt-32 pb-24 px-4 sm:px-6 md:px-12 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb / Back Navigation */}
        <FadeIn className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-medium text-brand-olive-dark/70 hover:text-brand-pink-dark transition-colors"
          >
            &larr; Voltar para a página inicial
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1} className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pink-light/20 border border-brand-pink-light/30 text-brand-pink-dark text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
            Termos & Condições
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-brown mb-5 leading-tight">
            Política de Privacidade <br className="hidden sm:block" /> e Sigilo Profissional
          </h1>
          <p className="text-base sm:text-lg text-brand-olive-dark/80 font-light max-w-2xl leading-relaxed">
            Esta política descreve como Patrícia Gavazza (CRP 05/40905) trata, protege e resguarda os seus dados e as informações abordadas em seu espaço de escuta clínica.
          </p>
        </FadeIn>

        {/* Content Modules */}
        <div className="space-y-6 sm:space-y-8">
          {policies.map((policy, idx) => {
            const Icon = policy.icon;
            return (
              <FadeIn key={idx} delay={0.15 + (idx * 0.05)}>
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-lavender/40 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-beige/50 flex-shrink-0 flex items-center justify-center text-brand-brown">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-serif text-brand-brown mb-3">
                        {policy.title}
                      </h2>
                      <p className="text-brand-olive-dark/85 leading-relaxed text-sm sm:text-base font-light">
                        {policy.content}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Contact/Conclusion */}
        <FadeIn delay={0.4} className="mt-12 sm:mt-16 p-8 rounded-3xl bg-brand-beige border border-brand-lavender/30 text-center">
          <h3 className="text-xl sm:text-2xl font-serif text-brand-brown mb-3">
            Dúvidas sobre o tratamento de seus dados?
          </h3>
          <p className="text-brand-olive-dark/80 text-sm sm:text-base mb-6 max-w-lg mx-auto">
            Sinta-se à vontade para entrar em contato. A transparência é parte fundamental da construção do vínculo e do espaço terapêutico.
          </p>
          <a 
            href="https://wa.me/5521997089664?text=Ol%C3%A1%20Patr%C3%ADcia%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20pol%C3%ADtica%20de%20privacidade." 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-olive-dark text-white rounded-md font-medium text-sm hover:bg-brand-pink-dark transition-colors shadow-lg"
          >
            Falar pelo WhatsApp
          </a>
        </FadeIn>
        
        {/* Update timestamp */}
        <FadeIn delay={0.5} className="mt-8 text-center">
          <p className="text-xs text-brand-olive-dark/50">
            Última atualização: Agosto de {new Date().getFullYear()}
          </p>
        </FadeIn>

      </div>
    </main>
    </>
  );
};
