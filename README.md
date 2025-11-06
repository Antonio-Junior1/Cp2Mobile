# 📱 BichoQFala

# 👤 Integrantes

 Carlos Eduardo: RM555223

 Antônio Lino: RM554518

 Caio Carnetti: RM554600

# ✨ Novas Adições (Animações e Transições)

Este projeto foi aprimorado com a inclusão de animações e transições para melhorar a experiência do usuário e a fluidez da navegação:

*   **Animações de Entrada (moti):** As telas principais (`HomeScreen` e `DenunciaScreen`) agora utilizam a biblioteca `moti` para aplicar um efeito de "fade-in" e deslize suave de baixo para cima ao serem carregadas. A duração da animação foi ajustada para **800ms** para garantir uma fluidez ideal.
*   **Efeitos de Transição de Tela:** Foi configurado o `Stack.Navigator` para utilizar o `TransitionPresets.SlideFromRightIOS`, que implementa uma transição de tela onde a nova tela desliza da direita para a esquerda, padrão em aplicativos móveis modernos.

# ⬇️ Instalação

Clone o repositório

\`\`\`bash
git clone https://github.com/antonio-junior1/BichoQFala.git
\`\`\`

Comando: \`cd BichoQFala\`

Instale as dependências

\`\`\`bash
npm install
\`\`\`

Instale dependências específicas do Expo Web (se necessário)

\`\`\`bash
npx expo install react-dom react-native-web @expo/metro-runtime
\`\`\`

# ▶️ Executando o Projeto

Modo desenvolvimento (Expo)

\`\`\`bash
npm start
\`\`\`

Escaneie o QR code com o app Expo Go (dispositivo físico)

Ou pressione i (iOS) / a (Android) para abrir no emulador

APENAS WEB:

\`\`\`bash
npm run web
\`\`\`

# 🛠 Scripts Úteis

| Comando | Descrição |
| :--- | :--- |
| `npm start` | Inicia o servidor Expo |
| `npm run android` | Executa no emulador Android |
| `npm run ios` | Executa no emulador iOS (macOS) |
| `npm run web` | Roda a versão web |
| `npm test` | Executa testes (se houver) |

# ⚠️ Solução de Problemas

**Erro "Missing dependencies"**
Execute novamente:

\`\`\`bash
npx expo install
\`\`\`

**Cache corrompido**

Limpe o cache do Expo:

\`\`\`bash
npx expo start -c
\`\`\`

# 📝 Estrutura do Projeto

BichoQFala/

├── assets/            # Ícones, imagens e fontes

├── components/        # Componentes reutilizáveis

├── screens/           # Telas do app

├── app.json           # Configuração do Expo

└── package.json       # Dependências e scripts

![image bichoqfala](https://github.com/user-attachments/assets/11cd0db5-e983-40de-af53-da0b6137fc2e)
