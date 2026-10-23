# 🚀 Landing Page Viral - Crescimento no Instagram

Landing page ultra moderna, responsiva (mobile-first) e de alta conversão inspirada nas páginas virais de engenharia reversa do Instagram.

## 🎯 Destaques do Projeto
- **Design Dark Premium & Glassmorphism:** Cores neon, degradê oficial do Instagram, tipografia refinada.
- **Painel Interativo de Métricas do Instagram:** Tabs dinâmicas (7d, 14d, 28d) com curva de entrega gráfica simulando contas reais com mais de 14M de alcance.
- **Mecânica Secreta de Conversão (Pop-up Exclusivo):**
  - O visitante clica em qualquer botão de ação ("QUERO SABER O MÉTODO AGORA").
  - Dispara efeito de confetes e abre um modal confidencial de alta conversão.
  - Avisa que o método sairá em breve e direciona para seguir seu Instagram e ativar notificações nos Stories para não perder a vaga.
- **Notificações Sociais (Social Proof Toasts):** Pop-ups automáticos no canto da tela informando novos membros entrando na lista VIP.
- **Sticky CTA Mobile:** Barra fixada na parte inferior no celular para garantir cliques mesmo ao rolar a página.

---

## ⚙️ Como Personalizar o seu Perfil (em 5 segundos)
Abra o arquivo [`config.js`](file:///c:/Laboratorio_de_imagens/viral-site/config.js) e altere:
```javascript
const SITE_CONFIG = {
  instagramHandle: '@seu_perfil', // Seu @ oficial
  instagramUrl: 'https://instagram.com/seu_perfil', // Link direto pro seu perfil
  // ...
};
```

---

## 🌐 Como Publicar no Vercel (.vercel.app)

Abra o terminal dentro desta pasta (`c:\Laboratorio_de_imagens\viral-site`) e execute:

```bash
npx vercel
```

1. Na primeira vez, faça o login no navegador que abrir.
2. Pressione **Enter** para confirmar as perguntas padrão (Set up and deploy? **Y**, Which scope? **seu usuário**, Link to existing? **N**, Project name? **Enter**).
3. Pronto! Em 5 segundos você recebe seu link:
   👉 `https://seu-projeto.vercel.app`
