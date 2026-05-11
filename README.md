# 🚀 Plataforma Mobile de Estudo Ativo Gamificada (Java SE 11)

> [cite_start]**Prova de Conceito (PoC) desenvolvida para o Projeto Integrador do SENAC EAD** > **Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) / TSI[cite: 2, 4, 7, 9, 14, 17, 20, 23, 26, 29, 44, 46, 48, 51].  
> **Foco:** Preparação estratégica para o concurso de Agente de Tecnologia do Banco do Brasil.

---

## 🔗 Demonstração em Tempo Real
* [cite_start]**Acesse a aplicação (Vercel):** [https://revisao-java-bb.vercel.app/](https://revisao-java-bb.vercel.app/) [cite: 86]

---

## 🎯 Sobre a Prova de Conceito (PoC)
[cite_start]Esta PoC valida a integração tecnológica de uma interface de **Microlearning** otimizada para dispositivos móveis[cite: 69]. [cite_start]O objetivo é transformar o estudo teórico de Java SE 11 em uma experiência prática e interativa[cite: 58].

### Principais Validações Técnicas:
* [cite_start]**Single Page Application (SPA):** Navegação fluida entre 43 slides interativos sem recarregamento de página[cite: 71].
* [cite_start]**Sincronização Multimídia:** Player de áudio fixo executando podcasts educativos de forma síncrona aos slides[cite: 72, 84].
* [cite_start]**Motor de Quiz (Feedback em Tempo Real):** Sistema de 15 questões técnicas com validação *client-side* imediata (Feedback Verde/Vermelho)[cite: 72].
* [cite_start]**Responsividade Mobile-First:** Interface adaptativa validada para Android e iOS via padrões Web modernos[cite: 73, 81].

---

## 🛠️ Stack Tecnológica
[cite_start]A arquitetura foi selecionada para garantir o máximo de performance com o mínimo de consumo de hardware em dispositivos móveis (Redução de Riscos)[cite: 80]:

* [cite_start]**Frontend:** HTML5 Semântico e CSS3 Moderno (Grid e Flexbox)[cite: 77].
* [cite_start]**Lógica:** Vanilla JavaScript ES6 puro (sem frameworks pesados para maior fluidez mobile)[cite: 77, 80].
* [cite_start]**Deploy e CI/CD:** Vercel integrada ao GitHub para automação de ambiente de produção[cite: 78].
* [cite_start]**Versionamento:** Git com fluxo estruturado de commits e colaboração[cite: 76, 86].

---

## 📁 Organização Estruturada (Rubrica de Ambiente)
[cite_start]Conforme as diretrizes do projeto, o repositório segue uma organização profissional de pastas[cite: 25]:

```text
/
├── audio/         # Ativos de áudio (.mp3) dos podcasts e músicas
├── css/           # Estilização modularizada (style.css)
├── js/            # Lógica de negócio e motor do quiz (script.js)
├── index.html     # Ponto de entrada principal da aplicação (SPA)
└── README.md      # Documentação técnica e guia do projeto
