"use client";

import { useEffect, useRef, useState } from "react";

const audiences = [
  ["Professores e treinadores", "Para quem quer renovar as aulas, organizar melhor cada sessão e aplicar atividades com segurança."],
  ["Escolinhas e projetos sociais", "Para quem trabalha com grupos diferentes e precisa de dinâmicas práticas, inclusivas e fáceis de adaptar."],
  ["Quem quer mais engajamento", "Para prender a atenção dos atletas, aumentar a participação e manter a motivação do início ao fim."],
  ["Quem busca treinos melhores", "Para criar sessões mais dinâmicas e produtivas sem perder horas planejando novas atividades."],
];

const bonuses = [
  ["Aquecimentos Prontos", "Exercícios rápidos para começar com organização, intensidade e preparação física.", "/images/bonus-1-aquecimentos.png", "R$27,00"],
  ["Certificados de Craque", "Modelos para reconhecer a dedicação, evolução e participação dos atletas.", "/images/bonus-2-certificados.png", "R$17,00"],
  ["Organização de Treinos", "Estruture sessões eficientes e mantenha a equipe motivada do início ao fim.", "/images/bonus-3-organizacao.png", "R$23,00"],
  ["Agilidade e Velocidade", "Desenvolva explosão, coordenação e mudança de direção com exercícios completos.", "/images/bonus-4-agilidade.png", "R$20,00"],
];

const completeItems = [
  "+250 Dinâmicas de Futebol",
  "Biblioteca de Treinos por Objetivo",
  "Desafios Semanais",
  "Acesso vitalício",
  "Suporte por e-mail",
  "Todos os bônus inclusos",
];

const basicExcludedItems = completeItems.slice(1);

const receivedSlides = [
  ["/images/receive-dynamics.png", "Exemplo das mais de 250 dinâmicas de futebol"],
  ["/images/receive-warmups.png", "Bônus de aquecimentos prontos"],
  ["/images/receive-certificates.png", "Bônus de certificados de craque"],
  ["/images/receive-vip-library.png", "Biblioteca exclusiva com 60 treinos VIP"],
  ["/images/receive-weekly-challenges.png", "Desafios semanais para os atletas"],
];

const faqs = [
  ["Como recebo o material?", "Você receberá acesso imediatamente após a confirmação da compra."],
  ["As dinâmicas servem para qualquer idade?", "Sim. O material pode ser adaptado para diferentes faixas etárias e níveis."],
  ["Posso aplicar mesmo sendo iniciante?", "Sim. As atividades foram organizadas para facilitar a aplicação."],
  ["O Plano Completo vale mais a pena?", "Sim. Ele reúne toda a Área VIP, bônus exclusivos e ferramentas para organizar seus treinos."],
  ["O material é digital?", "Sim. O acesso é totalmente online."],
  ["As atividades já estão organizadas?", "Sim. Todo o conteúdo foi separado para facilitar o planejamento dos treinos."],
];

export default function Home() {
  const [modal, setModal] = useState(false);
  const [basicOfferConfirmed, setBasicOfferConfirmed] = useState(false);
  const [receivedSlide, setReceivedSlide] = useState(0);
  const modalScrollPosition = useRef(0);

  const openBasicOffer = () => {
    modalScrollPosition.current = window.scrollY;
    setModal(true);
  };

  const closeBasicOffer = () => {
    setModal(false);
    setBasicOfferConfirmed(true);
    window.requestAnimationFrame(() => window.scrollTo({ top: modalScrollPosition.current, behavior: "instant" }));
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && closeBasicOffer();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    const timer = window.setInterval(
      () => setReceivedSlide(current => (current + 1) % receivedSlides.length),
      3000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="hero" id="inicio">
        <div className="pitch-lines" />
        <div className="hero-grid wrap">
          <div className="hero-copy">
            <h1><span>+250</span> Dinâmicas de Futebol Prontas</h1>
            <p>Treinos prontos, organizados e mais motivadores para seus atletas.</p>
            <div className="hero-visual">
              <div className="image-shell"><img src="/images/hero-complete-material.png" alt="Material completo com mais de 250 dinâmicas e bônus para treinos de futebol" /></div>
            </div>
            <a className="button primary" href="#oferta">Quero melhorar meus treinos agora <b>→</b></a>
            <div className="hero-trust"><span>✓ Acesso imediato</span><span>✓ 100% digital</span><span>✓ Compra segura</span></div>
          </div>
        </div>
      </section>

      <section className="section showcase">
        <div className="wrap">
          <div className="section-head"><span className="kicker">VEJA POR DENTRO</span><h2>Tudo organizado. Tudo pronto.</h2><p>Conteúdo visual e direto para você consultar no celular, tablet ou computador.</p></div>
          <div className="showcase-image"><img src="/images/kids-football-training.png" alt="Crianças participando de um treino organizado de futebol" /></div>
          <div className="feature-pills">{["+250 Dinâmicas", "Área VIP", "Treinos por Objetivo"].map(x => <span key={x}>✓ {x}</span>)}</div>
        </div>
      </section>

      <section className="section receive-section" aria-labelledby="receive-title">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">CONHEÇA O CONTEÚDO</span>
            <h2 id="receive-title">O que você vai receber</h2>
            <p>Veja por dentro tudo o que estará disponível para transformar seus treinos.</p>
          </div>
          <div className="receive-carousel" aria-roledescription="carrossel" aria-label="Conteúdos incluídos no material">
            <div className="receive-stage" aria-live="polite">
              {receivedSlides.map(([src, alt], index) => (
                <img
                  className={index === receivedSlide ? "active" : ""}
                  src={src}
                  alt={alt}
                  key={src}
                  aria-hidden={index !== receivedSlide}
                />
              ))}
            </div>
            <div className="receive-dots" aria-label="Selecionar imagem">
              {receivedSlides.map(([, alt], index) => (
                <button
                  className={index === receivedSlide ? "active" : ""}
                  type="button"
                  key={alt}
                  onClick={() => setReceivedSlide(index)}
                  aria-label={`Ver imagem ${index + 1}: ${alt}`}
                  aria-current={index === receivedSlide ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section light" id="para-quem">
        <div className="wrap">
          <div className="section-head audience-head"><h2>Para quem é esse material?</h2></div>
          <div className="audience-grid">{audiences.map(([title,text]) => <article className="audience-card" key={title}><span className="icon-box">✓</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="section bonuses" id="bonus">
        <div className="wrap">
          <div className="section-head"><span className="kicker gold">MAIS VALOR PARA O SEU TREINO</span><h2>Bônus Especiais Inclusos</h2><p>Quatro materiais extras para deixar sua preparação ainda mais completa.</p></div>
          <div className="bonus-grid">{bonuses.map(([title,text,image,price], i) => <article className="bonus-card" key={title}><div className="bonus-image"><img src={image} alt={`Bônus ${i + 1}: ${title}`} /></div><div className="bonus-body"><div className="bonus-number">BÔNUS {i + 1}</div><h3>{title}</h3><p>{text}</p><div className="bonus-price"><span>De <s>{price}</s></span><strong>GRÁTIS</strong></div></div></article>)}</div>
        </div>
      </section>

      <section className="section pricing" id="oferta">
        <div className="wrap">
          <div className="section-head"><span className="kicker">ESCOLHA SEU ACESSO</span><h2>Comece a transformar seus treinos</h2><p>Pagamento único. Acesso imediato ao material digital.</p></div>
          <div className="plans">
            <article className="plan basic"><div className="plan-top"><span>Plano Básico</span><p>O essencial para renovar suas atividades.</p></div><div className="price"><small>Pagamento único</small><strong><sup>R$</sup>10<span>,00</span></strong></div><ul><li>✓ <span>+250 Dinâmicas de Futebol</span></li>{basicExcludedItems.map(x=><li className="excluded" key={x}>× <span>{x}</span></li>)}</ul>{basicOfferConfirmed ? <a className="button outline" href="https://go.perfectpay.com.br/PPU38CQEILQ">Quero o Plano Básico</a> : <button className="button outline" onClick={openBasicOffer}>Quero o Plano Básico</button>}</article>
            <article className="plan complete"><div className="popular">★ MAIS VENDIDO</div><div className="plan-top"><span>Plano Completo</span><p>A experiência completa para o seu melhor treino.</p></div><div className="plan-product-image"><img src="/images/vip-complete-mockup.png" alt="Mockup do conteúdo completo com mais de 250 dinâmicas e Área VIP" /></div><div className="price"><small>De <s>R$87,00</s> por apenas</small><strong><sup>R$</sup>27<span>,00</span></strong></div><ul>{completeItems.map(x=><li key={x}>✓ <span>{x}</span></li>)}</ul><div className="plan-trust-banner"><img src="/images/secure-email-banner.png" alt="Compra segura, satisfação garantida, dados protegidos e acesso por e-mail" /></div><a className="button primary" href="https://go.perfectpay.com.br/PPU38CQEILN">Quero o Plano Completo <b>→</b></a><small className="secure">🔒 Compra 100% segura</small></article>
          </div>
        </div>
      </section>

      <section className="section guarantee"><div className="wrap guarantee-grid"><div className="guarantee-image"><img src="/images/guarantee-7-days.png" alt="Satisfação garantida por 7 dias" /></div><div><span className="kicker gold">RISCO ZERO</span><h2>Garantia de satisfação</h2><p>Você tem 7 dias para conhecer o material com tranquilidade e solicitar suporte caso não fique satisfeito.</p></div></div></section>

      <section className="section faq"><div className="wrap narrow"><div className="section-head"><span className="kicker">DÚVIDAS FREQUENTES</span><h2>Antes de entrar em campo</h2></div><div className="accordion">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <footer><div className="pitch-lines"/><div className="wrap footer-content"><span className="footer-ball">⚽</span><h2>Comece hoje a transformar seus treinos</h2><p>Pare de repetir sempre os mesmos exercícios. Tenha +250 dinâmicas organizadas, bônus exclusivos e uma Área VIP completa para planejar treinos mais divertidos e eficientes.</p><a className="button primary" href="#oferta">Quero minhas dinâmicas agora <b>→</b></a><div className="footer-bottom"><span>© 2026 TreinoPro</span><span>Material digital • Acesso imediato</span></div></div></footer>

      {modal && <div className="modal-backdrop" role="presentation" onMouseDown={closeBasicOffer}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" aria-label="Fechar" onClick={closeBasicOffer}>×</button><h2 id="modal-title">Libere o Plano Completo<br/>por apenas R$ 17,00</h2><p><strong>Por mais R$ 7,00</strong>, você recebe tudo o que está na oferta completa.</p><div className="modal-product"><img src="/images/vip-complete-mockup.png" alt="Plano Completo TreinoPro" /></div><div className="modal-items">{completeItems.map(x=><span key={x}>✓ {x}</span>)}</div><div className="modal-price">R$ 17,00</div><small className="modal-upgrade">Upgrade único antes de finalizar seu acesso.</small><a className="button primary" href="https://go.perfectpay.com.br/PPU38CQEILO">SIM! QUERO LIBERAR TUDO POR R$ 17,00 →</a><button className="modal-no" type="button" onClick={closeBasicOffer}>Não, obrigado. Quero apenas o Plano Básico por R$ 10,00</button></div></div>}
    </main>
  );
}
