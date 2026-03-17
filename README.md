<div align="center">

<!-- Animated Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,50:16213e,100:0f3460&height=220&section=header&text=💰%20LenDen&fontSize=80&fontColor=e94560&fontAlignY=35&desc=Your%20Smart%20Financial%20Partner&descSize=22&descAlignY=55&descColor=ffffff&animation=fadeIn" width="100%" />

<!-- Animated Typing SVG — each line is short enough to never clip -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=E94560&center=true&vCenter=true&repeat=true&width=480&height=45&lines=Track+Debts+Smartly+with+AI;Save+Smarter+with+Gullack;Community+Chit+Fund+Investing;Voice-First+Financial+Partner;Multi-Lingual+Indian+Fintech;AI-Powered+Money+Management" alt="Typing SVG" />
</a>

<br/>
<br/>

<!-- Project Logo -->
<img src="public/logo.jpg" alt="LenDen Logo" width="140" style="border-radius: 20px;" />

<br/>

<!-- Quick Badges -->
<p>
  <img src="https://img.shields.io/badge/version-0.1.0-e94560?style=for-the-badge&labelColor=1a1a2e" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-0f3460?style=for-the-badge&labelColor=1a1a2e" alt="License" />
  <img src="https://img.shields.io/badge/PRs-welcome-16213e?style=for-the-badge&labelColor=1a1a2e" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/made%20with-❤️-e94560?style=for-the-badge&labelColor=1a1a2e" alt="Made with Love" />
</p>

<p>
  <strong>A comprehensive fintech application empowering Indian users with intuitive debt tracking, smart savings, community investments, and AI-powered financial advice — all accessible through voice in multiple Indian languages.</strong>
</p>

<br/>

<!-- Quick Navigation -->
[Features](#-features) •
[Tech Stack](#-tech-stack) •
[Screenshots](#-application-gallery) •
[Getting Started](#-getting-started) •
[Architecture](#-architecture) •
[i18n](#-internationalization) •
[Contributors](#-contributors)

</div>

---

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 📹 Prototype Demo

<div align="center">

[![Watch the Prototype Video](https://img.shields.io/badge/▶%20Watch%20Prototype%20Demo-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=1a1a2e)](public/prototype.mp4)

*Click above to watch LenDen in action — see the complete user flow from onboarding to financial management.*

</div>

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## ✨ Features

<!-- Animated Feature Ecosystem Map -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=12&height=2&section=header" width="100%"/>

<br/>

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'primaryColor': '#e94560', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#0f3460', 'lineColor': '#16213e', 'secondaryColor': '#16213e', 'tertiaryColor': '#1a1a2e', 'fontFamily': 'Fira Code', 'fontSize': '14px'}}}%%
flowchart TB
    subgraph CORE["🏠 LenDen Ecosystem"]
        direction TB
        HOME["🏠 Smart Dashboard\n━━━━━━━━━━━━━\nBalance • Stats • Budget\nTransactions • Quick Actions"]
    end

    subgraph FINANCE["💎 Financial Modules"]
        direction LR
        UD["💰 Udhaari\n━━━━━━━━━━━\n• Debt Ledger\n• Priority Tracking\n• AI Clearance Tips\n• Gamification"]
        GU["🐷 Gullack\n━━━━━━━━━━━\n• Savings Overview\n• Goal Tracking\n• AI Saving Tips\n• Coin Animation"]
        CO["🤝 Community\n━━━━━━━━━━━\n• Chit Fund Schemes\n• Quick Udhaari\n• Multi-Provider\n• EMI Calculator"]
        SA["🧠 Salah\n━━━━━━━━━━━\n• Health Score\n• Expert Advisors\n• Loan Marketplace\n• AI Recommendations"]
    end

    subgraph INFRA["⚡ Infrastructure Layer"]
        direction LR
        VO["🎤 Voice Engine\nMultilingual NLP"]
        I18["🌐 i18n Layer\n6 Indian Languages"]
        AI["🤖 AI Engine\nSmart Suggestions"]
        SEC["🔒 Security\n2FA + Biometrics"]
    end

    CORE --> FINANCE
    FINANCE --> INFRA

    style CORE fill:#e94560,stroke:#e94560,color:#fff
    style FINANCE fill:#0f3460,stroke:#0f3460,color:#fff
    style INFRA fill:#16213e,stroke:#16213e,color:#fff
    style HOME fill:#1a1a2e,stroke:#e94560,color:#fff
    style UD fill:#1a1a2e,stroke:#e94560,color:#fff
    style GU fill:#1a1a2e,stroke:#e94560,color:#fff
    style CO fill:#1a1a2e,stroke:#e94560,color:#fff
    style SA fill:#1a1a2e,stroke:#e94560,color:#fff
    style VO fill:#1a1a2e,stroke:#16213e,color:#fff
    style I18 fill:#1a1a2e,stroke:#16213e,color:#fff
    style AI fill:#1a1a2e,stroke:#16213e,color:#fff
    style SEC fill:#1a1a2e,stroke:#16213e,color:#fff
```

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!-- ═══════════════════════════════════════════════════ -->
<!-- 💰 UDHAARI MODULE -->
<!-- ═══════════════════════════════════════════════════ -->

<div align="center">
<table>
<tr>
<td align="center">

### <img src="https://img.shields.io/badge/-MODULE%2001-e94560?style=for-the-badge&labelColor=1a1a2e" />

</td>
</tr>
</table>
</div>

### 💰 Udhaari — Intelligent Debt Tracking

> *"Your personal debt ledger, reimagined with AI and gamification."*

<div align="center">

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'primaryColor': '#e94560', 'fontFamily': 'Fira Code'}}}%%
flowchart LR
    A["📝 Add Debt\nLend or Borrow"] --> B["🏷️ Set Priority\n🔴 High 🟡 Med 🟢 Low"]
    B --> C["📅 Track Due Date\nVisual Countdown"]
    C --> D["🤖 AI Suggests\nClearance Order"]
    D --> E["✅ Clear Debt\n🎮 Earn Rewards"]
    E --> F["📊 Level Up!\nProgress Journey"]

    style A fill:#1a1a2e,stroke:#e94560,color:#fff
    style B fill:#1a1a2e,stroke:#e94560,color:#fff
    style C fill:#1a1a2e,stroke:#0f3460,color:#fff
    style D fill:#1a1a2e,stroke:#0f3460,color:#fff
    style E fill:#1a1a2e,stroke:#16213e,color:#fff
    style F fill:#e94560,stroke:#e94560,color:#fff
```

</div>

<table>
<tr>
<td width="50%">

#### 📊 Smart Ledger
Track every lending and borrowing transaction with **intelligent priority levels**:
- 🔴 **High Priority** — Due soon, affects local credit
- 🟡 **Medium Priority** — Standard timeline debts
- 🟢 **Low Priority** — Flexible repayment

#### 📅 Due Date Intelligence
Visual countdown indicators that change color as deadlines approach, with automated **push notifications** for upcoming payments.

</td>
<td width="50%">

#### 🤖 AI-Powered Clearance
The AI engine analyzes your debts and recommends the optimal clearance order:
> *"Clear your ₹800 debt with Local Kirana first — it's due soon and affects your local credit score!"*

#### 🎮 Gamification Engine
- 🏆 **Debt Clearing Journey** with progress visualization
- ⭐ **Level System** — Progress from Level 1 to Financial Freedom
- 🎯 **Milestones** — Celebrate each debt cleared with animations
- 📊 **40% Progress Bar** with coin-style indicators

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!-- ═══════════════════════════════════════════════════ -->
<!-- 🐷 GULLACK MODULE -->
<!-- ═══════════════════════════════════════════════════ -->

<div align="center">
<table>
<tr>
<td align="center">

### <img src="https://img.shields.io/badge/-MODULE%2002-0f3460?style=for-the-badge&labelColor=1a1a2e" />

</td>
</tr>
</table>
</div>

### 🐷 Gullack — Smart Savings Management

> *"Watch your digital piggy bank grow coin by coin, guided by AI."*

<div align="center">

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'primaryColor': '#0f3460', 'fontFamily': 'Fira Code'}}}%%
flowchart LR
    A["💵 Set Goal\nEmergency • Phone\nFestival • Custom"] --> B["💰 Add Money\nManual or Auto"]
    B --> C["📈 Track Growth\n+₹2,500/month"]
    C --> D["💡 AI Tips\nSave ₹400/month"]
    D --> E["🐷 Watch Fill\nCoin Animation"]
    E --> F["🎉 Goal Hit!\n₹50,000 Reached"]

    style A fill:#1a1a2e,stroke:#0f3460,color:#fff
    style B fill:#1a1a2e,stroke:#0f3460,color:#fff
    style C fill:#1a1a2e,stroke:#16213e,color:#fff
    style D fill:#1a1a2e,stroke:#16213e,color:#fff
    style E fill:#1a1a2e,stroke:#e94560,color:#fff
    style F fill:#0f3460,stroke:#0f3460,color:#fff
```

</div>

<table>
<tr>
<td width="50%">

#### 💸 Total Savings Dashboard
Real-time overview showing **₹30,700 saved** with:
- 📈 Monthly growth tracking (**+₹2,500** trend)
- 🎯 Goal-wise breakdown with deadlines
- 📊 Visual progress bars per goal

#### 🎯 Active Savings Goals
```
🛡️ Emergency Fund    ₹15,000 / ₹50,000  ▓▓▓▓▓▓░░░░░░░ 30%
📱 New Phone         ₹8,500  / ₹25,000  ▓▓▓▓░░░░░░░░░ 34%
🎊 Festival Shopping ₹7,200  / ₹10,000  ▓▓▓▓▓▓▓▓▓░░░░ 72%
```

</td>
<td width="50%">

#### 💡 AI Saving Tips
Personalized suggestions that actually save money:
> *"Buy a monthly bus pass for ₹800 instead of daily tickets. You'll save ₹400 every month!"*

#### 🐷 Animated Piggy Bank
A delightful visual experience as your savings grow:
```
🐷 Your Gullack is Growing!
🪙🪙🪙🪙🪙🪙⚪⚪⚪⚪  60% Full
Keep saving to see it fill up with coins!
```
Each coin lights up golden as you hit **10% milestones**, creating a satisfying sense of progress.

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!-- ═══════════════════════════════════════════════════ -->
<!-- 🤝 COMMUNITY MODULE -->
<!-- ═══════════════════════════════════════════════════ -->

<div align="center">
<table>
<tr>
<td align="center">

### <img src="https://img.shields.io/badge/-MODULE%2003-16213e?style=for-the-badge&labelColor=1a1a2e" />

</td>
</tr>
</table>
</div>

### 🤝 Community — Chit Funds & Quick Loans

> *"Collective financial power, digitized and made transparent for everyone."*

<div align="center">

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'primaryColor': '#16213e', 'fontFamily': 'Fira Code'}}}%%
flowchart TB
    subgraph CHIT["📋 Chit Fund Schemes"]
        direction LR
        C6["6 Months\n₹1,000/mo"] --- C9["9 Months\n₹1,500/mo"] --- C12["12 Months\n₹2,000/mo"]
        C18["18 Months\n₹2,500/mo"] --- C24["24 Months\n₹3,000/mo"]
    end

    subgraph LOAN["⚡ Quick Udhaari Engine"]
        direction LR
        L1["🎚️ Adjust Amount\nSlider Control"] --> L2["📊 Calculate\nInterest Rate"]
        L2 --> L3["⏱️ Pick Tenure\n3/6/9/12 months"]
        L3 --> L4["💰 See Total\nReal-time EMI"]
    end

    subgraph PROV["🏦 Loan Providers"]
        direction LR
        P1["PaySense\n🟢 85% Match\nFin"]
        P2["HDFC Bank\n🟡 65% Match\nBank"]
        P3["Bajaj Finance\n🟢 78% Match\nNBFC"]
    end

    CHIT --> LOAN
    LOAN --> PROV

    style CHIT fill:#0f3460,stroke:#0f3460,color:#fff
    style LOAN fill:#16213e,stroke:#16213e,color:#fff
    style PROV fill:#1a1a2e,stroke:#1a1a2e,color:#fff
    style C6 fill:#1a1a2e,stroke:#e94560,color:#fff
    style C9 fill:#1a1a2e,stroke:#e94560,color:#fff
    style C12 fill:#1a1a2e,stroke:#e94560,color:#fff
    style C18 fill:#1a1a2e,stroke:#e94560,color:#fff
    style C24 fill:#1a1a2e,stroke:#e94560,color:#fff
    style L1 fill:#1a1a2e,stroke:#0f3460,color:#fff
    style L2 fill:#1a1a2e,stroke:#0f3460,color:#fff
    style L3 fill:#1a1a2e,stroke:#0f3460,color:#fff
    style L4 fill:#1a1a2e,stroke:#0f3460,color:#fff
    style P1 fill:#1a1a2e,stroke:#16213e,color:#fff
    style P2 fill:#1a1a2e,stroke:#16213e,color:#fff
    style P3 fill:#1a1a2e,stroke:#16213e,color:#fff
```

</div>

<table>
<tr>
<td width="50%">

#### 📋 Chit Fund Schemes
Choose from **5 investment cycles** tailored to Indian community finance:

| Scheme | Monthly | Total | Duration |
|--------|---------|-------|----------|
| 🥉 Starter | ₹1,000 | ₹6,000 | 6 months |
| 🥈 Standard | ₹1,500 | ₹13,500 | 9 months |
| 🥇 Premium | ₹2,000 | ₹24,000 | 12 months |
| 💎 Gold | ₹2,500 | ₹45,000 | 18 months |
| 👑 Diamond | ₹3,000 | ₹72,000 | 24 months |

Each scheme includes detailed **benefits, rules, eligibility**, and interactive modals.

</td>
<td width="50%">

#### ⚡ Quick Udhaari (Instant Loans)
Micro-loan engine with real-time calculations:
- 🎚️ **Adjustable Slider** — Drag to set loan amount
- 📊 **Live Interest** — Rates computed instantly
- ⏱️ **Flexible Tenure** — 3, 6, 9, or 12 months
- 🧮 **Total Preview** — See exact repayment amount

#### 🏦 Multi-Provider Marketplace
| Provider | Type | Max Loan | Interest | Speed |
|----------|------|----------|----------|-------|
| PaySense | Fintech | ₹5L | 16-36% | 24hrs |
| HDFC | Bank | ₹40L | 10.5-21% | 3-7d |
| Bajaj | NBFC | ₹25L | 13-30% | 2-4hrs |

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!-- ═══════════════════════════════════════════════════ -->
<!-- 🧠 SALAH MODULE -->
<!-- ═══════════════════════════════════════════════════ -->

<div align="center">
<table>
<tr>
<td align="center">

### <img src="https://img.shields.io/badge/-MODULE%2004-e94560?style=for-the-badge&labelColor=1a1a2e" />

</td>
</tr>
</table>
</div>

### 🧠 Salah — Expert Financial Advice & AI Recommendations

> *"Certified experts and AI intelligence, both at your fingertips."*

<div align="center">

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'primaryColor': '#e94560', 'fontFamily': 'Fira Code'}}}%%
flowchart TB
    subgraph SCORE["📊 Financial Health Engine"]
        direction LR
        S1["🔍 Analyze Debts\n& Savings"] --> S2["📈 Calculate Score\n720 / 850"]
        S2 --> S3["🏷️ Rate: GOOD\n🟢 Above Average"]
        S3 --> S4["💡 Improvement\nSuggestions"]
    end

    subgraph EXPERT["👨‍💼 Expert Advisory Network"]
        direction LR
        E1["🎓 CA Rajesh Kumar\n⭐ 4.8 • Tax Planning\n🟢 Available"]
        E2["💼 Priya Mehta\n⭐ 4.6 • Investments\n🔴 Busy"]
        E3["🏆 Dr. Amit Sharma\n⭐ 4.9 • Debt Mgmt\n🟢 Available"]
    end

    subgraph AIENG["🤖 AI Recommendation Engine"]
        direction LR
        A1["⚡ URGENT\nClear ₹800\nKirana Debt"]
        A2["📈 INVEST\nStart ₹500/mo\nELSS SIP"]
        A3["🛡️ PROTECT\nBuild ₹1L\nEmergency Fund"]
    end

    SCORE --> EXPERT
    SCORE --> AIENG

    style SCORE fill:#0f3460,stroke:#0f3460,color:#fff
    style EXPERT fill:#16213e,stroke:#16213e,color:#fff
    style AIENG fill:#1a1a2e,stroke:#e94560,color:#fff
    style S1 fill:#1a1a2e,stroke:#0f3460,color:#fff
    style S2 fill:#1a1a2e,stroke:#0f3460,color:#fff
    style S3 fill:#1a1a2e,stroke:#0f3460,color:#fff
    style S4 fill:#1a1a2e,stroke:#0f3460,color:#fff
    style E1 fill:#1a1a2e,stroke:#16213e,color:#fff
    style E2 fill:#1a1a2e,stroke:#16213e,color:#fff
    style E3 fill:#1a1a2e,stroke:#16213e,color:#fff
    style A1 fill:#e94560,stroke:#e94560,color:#fff
    style A2 fill:#0f3460,stroke:#0f3460,color:#fff
    style A3 fill:#16213e,stroke:#16213e,color:#fff
```

</div>

<table>
<tr>
<td width="50%">

#### 📊 Financial Health Score
Your credit-worthiness at a glance:
```
Score: 720 / 850          Rating: 🟢 GOOD
████████████████████░░░░   84.7%

💡 Keep clearing debts to reach 750+
   for better loan rates!
```

#### 👨‍💼 Expert Advisory Network
Connect with **certified financial professionals**:
- 🎓 **Chartered Accountants** — Tax planning experts
- 💼 **Financial Advisors** — Investment strategists
- 🏆 **Debt Specialists** — Debt management pros
- 💬 **Chat** or 📞 **Call** — Instant consultation
- ⭐ **Ratings** + years of experience per advisor

</td>
<td width="50%">

#### 🤖 AI Recommendation Tiers

> **⚡ IMMEDIATE ACTION**
> *Clear your high-priority ₹800 debt with Local Kirana to improve local credit standing*

> **📈 INVESTMENT TIP**
> *Start a SIP of ₹500/month in ELSS funds for tax savings and long-term growth*

> **🛡️ GOAL PLANNING**
> *Create a dedicated emergency fund goal of ₹1 lakh for better financial security*

#### 🏦 Loan Details Modal
One-click deep dive into any loan provider:
- 📊 Eligibility score with match percentage
- 💹 Interest rate breakdown
- ⏱️ Processing time estimates
- ✅ Feature comparison badges
- 🔗 Direct apply on provider website

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!-- ═══════════════════════════════════════════════════ -->
<!-- 🎤 VOICE ENGINE MODULE -->
<!-- ═══════════════════════════════════════════════════ -->

<div align="center">
<table>
<tr>
<td align="center">

### <img src="https://img.shields.io/badge/-MODULE%2005-0f3460?style=for-the-badge&labelColor=1a1a2e" />

</td>
</tr>
</table>
</div>

### 🎤 Voice-First Financial Input

> *"Speak naturally in your mother tongue — LenDen understands."*

<div align="center">

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'primaryColor': '#0f3460', 'fontFamily': 'Fira Code'}}}%%
sequenceDiagram
    participant U as 🗣️ User
    participant V as 🎤 Voice Engine
    participant N as 🧠 NLP Processor
    participant A as 📱 LenDen App

    U->>V: "मैंने चाय पर 20 रुपये खर्च किए"
    activate V
    V->>N: Raw audio transcript
    activate N
    Note over N: Stage 1: Understanding words...
    N->>N: Stage 2: Analyzing transaction...
    N->>A: Stage 3: Adding to account...
    deactivate N
    activate A
    A-->>U: ✅ Added: ☕ Tea — ₹20 (Food)
    deactivate A
    deactivate V
    Note over U,A: 🎉 Transaction logged in 3 seconds!
```

</div>

<table>
<tr>
<td width="50%">

#### 🗣️ Multilingual Voice Commands
Speak naturally in **Hindi, English,** or any supported language:

```
🗣️ "मैंने चाय पर 20 रुपये खर्च किए"
   → ☕ Tea Expense • ₹20 • Food

🗣️ "I spent 50 rupees on auto rickshaw"
   → 🛺 Auto Rickshaw • ₹50 • Transport

🗣️ "ऑटो में 45 रुपये दिए"
   → 🛺 Auto Rickshaw • ₹45 • Transport

🗣️ "Add 500 rupees grocery expense"
   → 🛒 Grocery • ₹500 • Food

🗣️ "राहुल को 200 रुपये उधार दिए"
   → 💰 Lent to Rahul • ₹200 • Udhaari

🗣️ "Received 15000 salary"
   → 💵 Salary Credit • ₹15,000 • Income
```

</td>
<td width="50%">

#### 🧠 3-Stage NLP Processing Pipeline
```
🔵 Stage 1 ━━━━━━━━━━━━━━━━━━ Understanding
   Speech-to-text in detected language

🟡 Stage 2 ━━━━━━━━━━━━━━━━━━ Analyzing
   Extract: Amount • Category • Type

🟢 Stage 3 ━━━━━━━━━━━━━━━━━━ Recording
   Auto-create transaction entry
```

#### 🔊 Voice Biometrics Security
- 🎤 **Voice Recognition Training** — Unique voiceprint
- 🔒 **Secure Authentication** — Unlock with your voice
- 🛡️ **Anti-Spoofing** — Liveness detection built-in

#### 💡 Smart Suggestion Chips
Pre-built voice command templates appear as tappable chips, making it easy for first-time users.

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!-- ═══════════════════════════════════════════════════ -->
<!-- ⚙️ SETTINGS MODULE -->
<!-- ═══════════════════════════════════════════════════ -->

<div align="center">
<table>
<tr>
<td align="center">

### <img src="https://img.shields.io/badge/-MODULE%2006-16213e?style=for-the-badge&labelColor=1a1a2e" />

</td>
</tr>
</table>
</div>

### ⚙️ Settings & Security Hub

<div align="center">

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'primaryColor': '#16213e', 'fontFamily': 'Fira Code'}}}%%
mindmap
  root((⚙️ Settings))
    👤 Profile
      Verification Badges
      Account Details
      Edit Information
    🔗 Linked Accounts
      🏦 SBI Bank
      💳 Google Pay
      💰 Paytm Wallet
    🌐 Language & Voice
      6 Indian Languages
      Voice Training
      Dialect Selection
    🔒 Security
      Two-Factor Auth
      Voice Biometrics
      PIN / Biometric Lock
      Privacy Controls
    🔔 Notifications
      Transaction Alerts
      Payment Reminders
      Savings Updates
      Expert Tips
```

</div>

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 🛠 Tech Stack

<div align="center">

### Frontend Core
[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### Styling & UI
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radixui&logoColor=white)](https://www.radix-ui.com/)
[![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)

### Animation & Motion
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

### Data & Forms
[![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=recharts&logoColor=white)](https://recharts.org/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)

### Internationalization
[![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)
[![react-i18next](https://img.shields.io/badge/react--i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://react.i18next.com/)

### Routing
[![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)

### Backend
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

### AI & APIs
[![Gemini API](https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Web Speech API](https://img.shields.io/badge/Web_Speech_API-FF6F00?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)](https://razorpay.com/)

### DevOps
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

</div>

<details>
<summary>📦 <strong>Full Dependency Tree (click to expand)</strong></summary>

<br/>

| Category | Package | Version |
|----------|---------|---------|
| **Core** | `react` | ^18.3.1 |
| | `react-dom` | ^18.3.1 |
| | `react-router-dom` | ^7.9.3 |
| **UI Library** | `@radix-ui/*` | Various (20+ primitives) |
| | `class-variance-authority` | ^0.7.1 |
| | `clsx` + `tailwind-merge` | Latest |
| | `cmdk` | ^1.1.1 |
| **Animation** | `gsap` | ^3.13.0 |
| | `framer-motion` | ^12.23.22 |
| **Charts** | `recharts` | ^2.15.2 |
| **Forms** | `react-hook-form` | ^7.64.0 |
| | `@hookform/resolvers` | ^5.2.2 |
| | `zod` | ^4.1.11 |
| **i18n** | `i18next` | ^25.5.3 |
| | `react-i18next` | ^16.0.0 |
| **Other** | `embla-carousel-react` | ^8.6.0 |
| | `input-otp` | ^1.4.2 |
| | `react-day-picker` | ^8.10.1 |
| | `react-resizable-panels` | ^2.1.7 |
| | `sonner` | ^2.0.3 |
| | `vaul` | ^1.1.2 |
| **Build** | `vite` | 6.3.5 |
| | `@vitejs/plugin-react-swc` | ^3.10.2 |

</details>

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 🖼 Application Gallery

<div align="center">

| | | |
|:---:|:---:|:---:|
| <img src="public/homepage.jpg" alt="Homepage" width="250"/><br/>**🏠 Dashboard** | <img src="public/udhaaari%20and%20gullack.jpg" alt="Udhaari and Gullack" width="250"/><br/>**💰 Udhaari & Gullack** | <img src="public/chitfund.jpg" alt="Chit Fund" width="250"/><br/>**🏦 Community Chit Funds** |
| <img src="public/advice.jpg" alt="Expert Advice" width="250"/><br/>**🧠 Salah (Advice)** | <img src="public/profile.jpg" alt="Profile" width="250"/><br/>**👤 User Profile** | <img src="public/logo.jpg" alt="LenDen Logo" width="250"/><br/>**🏷️ Brand Identity** |

</div>

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 🚀 Getting Started

### Prerequisites

<table>
<tr>
<td>

```
✅ Node.js ≥ 16
✅ npm or yarn
✅ Git
```

</td>
</tr>
</table>

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/LenDen.git

# Navigate to the project directory
cd LenDen

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

> 🌐 The app will be available at **`http://localhost:3000`** (configured in `vite.config.ts`)

### Production Build

```bash
# Create optimized production build
npm run build
```

> 📁 Build output is generated in the `build/` directory

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 🏗 Architecture

```
LenDen/
├── 📄 index.html                    # Entry point
├── 📦 package.json                  # Dependencies & scripts
├── ⚙️ vite.config.ts                # Vite build config + aliases
│
├── 📂 src/
│   ├── 🚀 main.tsx                  # App bootstrap
│   ├── 📱 App.tsx                   # Main app (1490 lines, all pages)
│   ├── 🎬 AppGSAP.tsx              # GSAP-animated variant with i18n
│   ├── 🌐 i18n.ts                  # i18next configuration
│   ├── 🎨 index.css                # Global styles + Tailwind
│   │
│   ├── 📂 components/
│   │   ├── 📊 ModernDashboard.tsx   # Financial overview dashboard
│   │   ├── 💰 ModernUdhaariGullack.tsx  # Debt & savings manager
│   │   ├── 🤝 CommunityTab.tsx     # Chit funds & quick loans
│   │   ├── 🧠 ModernSalah.tsx      # Expert advice & loan marketplace
│   │   ├── ⚙️ ModernSettings.tsx    # Settings with linked accounts
│   │   ├── 🎤 ModernVoiceInput.tsx  # Voice transaction input
│   │   ├── 🎓 Onboarding.tsx       # New user onboarding flow
│   │   ├── 👑 ModernPremium.tsx     # Premium features module
│   │   ├── 📐 ModernLayout.tsx      # Responsive app layout
│   │   │
│   │   └── 📂 ui/                   # 49 shadcn/ui components
│   │       ├── button.tsx, card.tsx, dialog.tsx ...
│   │       ├── tabs.tsx, badge.tsx, progress.tsx ...
│   │       └── chart.tsx, carousel.tsx, sidebar.tsx ...
│   │
│   ├── 📂 locales/                  # Translation files
│   │   ├── 🇬🇧 en.json
│   │   └── 🇮🇳 hi.json (+ te, ta, mr, sd)
│   │
│   ├── 📂 styles/                   # Additional stylesheets
│   ├── 📂 mockups/                  # Design mockups
│   └── 📂 guidelines/              # Design guidelines
│
└── 📂 public/                       # Static assets
    ├── 🖼️ homepage.jpg, profile.jpg, etc.
    ├── 📹 prototype.mp4
    └── 🎨 logo.jpg, pfp.png
```

### Component Architecture

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'primaryColor': '#e94560', 'primaryTextColor': '#ffffff', 'primaryBorderColor': '#0f3460', 'lineColor': '#e94560', 'secondaryColor': '#16213e', 'tertiaryColor': '#1a1a2e', 'fontFamily': 'Fira Code'}}}%%
graph TD
    A["main.tsx"] --> B["App.tsx"]
    B --> C["🏠 Home Dashboard"]
    B --> D["💰 Udhaari/Gullack"]
    B --> E["🤝 Community Tab"]
    B --> F["🧠 Salah Advice"]
    B --> G["⚙️ Settings"]

    C --> H["Balance Card"]
    C --> I["Quick Stats"]
    C --> J["Budget Progress"]
    C --> K["Transactions"]

    D --> L["Debt Tracker"]
    D --> M["Savings Goals"]
    D --> N["AI Suggestions"]

    E --> O["Chit Schemes"]
    E --> P["Quick Udhaari Loans"]

    F --> Q["Health Score"]
    F --> R["Expert Advisors"]
    F --> S["Loan Marketplace"]
    F --> T["AI Recommendations"]

    B --> U["🎤 Voice Input Modal"]
    B -.-> V["AppGSAP.tsx — GSAP Variant"]

    style A fill:#e94560,color:#fff
    style B fill:#0f3460,color:#fff
    style C fill:#16213e,color:#fff
    style D fill:#16213e,color:#fff
    style E fill:#16213e,color:#fff
    style F fill:#16213e,color:#fff
    style G fill:#16213e,color:#fff
```

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 🌐 Internationalization

LenDen is built for **India's linguistic diversity** with full i18n support:

<div align="center">

| Language | Flag | Code | Status |
|----------|:----:|:----:|:------:|
| English | 🇬🇧 | `en` | ✅ Complete |
| Hindi (हिंदी) | 🇮🇳 | `hi` | ✅ Complete |
| Telugu (తెలుగు) | 🇮🇳 | `te` | 🔄 In Progress |
| Tamil (தமிழ்) | 🇮🇳 | `ta` | 🔄 In Progress |
| Marathi (मराठी) | 🇮🇳 | `mr` | 🔄 In Progress |
| Sindhi (سنڌي) | 🇮🇳 | `sd` | 🔄 In Progress |

</div>

> 📁 Translation files located in `src/locales/` • Powered by **react-i18next**

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 🎨 Design Philosophy

<div align="center">

| Principle | Implementation |
|-----------|---------------|
| 🎯 **Mobile-First** | Optimized for smartphones with `max-w-md` responsive layout |
| 🎨 **Gradient-Rich UI** | Layered gradients with glassmorphism effects throughout |
| ✨ **Micro-Animations** | GSAP scroll triggers + Framer Motion page transitions |
| ♿ **Accessibility** | Voice-first design for users with limited literacy |
| 🧩 **Component System** | 49 shadcn/ui primitives for consistent design language |
| 🇮🇳 **Culturally Aware** | Indian financial terminology (Udhaari, Gullack, Salah) |

</div>

---

## 📚 Resources

<div align="center">

[![Documentation](https://img.shields.io/badge/📖_Documentation-0f3460?style=for-the-badge)](https://github.com/your-repo/docs)
[![API Reference](https://img.shields.io/badge/🎯_API_Reference-16213e?style=for-the-badge)](https://api.leinden.com)
[![Community](https://img.shields.io/badge/💬_Community_Forum-1a1a2e?style=for-the-badge)](https://forum.leinden.com)
[![Support](https://img.shields.io/badge/🆘_Support_Center-e94560?style=for-the-badge)](https://support.leinden.com)

</div>

---

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 👥 Contributors

<div align="center">

<img src="public/contributors.jpeg" alt="LenDen Team" width="500" style="border-radius: 16px;" />

<br/>
<br/>

| <img src="https://img.shields.io/badge/-Lead_Developer-e94560?style=flat-square" /> | <img src="https://img.shields.io/badge/-Lead_Developer-e94560?style=flat-square" /> | <img src="https://img.shields.io/badge/-QA_Engineer-16213e?style=flat-square" /> | <img src="https://img.shields.io/badge/-Tech_Writer-1a1a2e?style=flat-square" /> |
|:---:|:---:|:---:|:---:|
| **Aaditya Jaiswar** | **Samyak Dandge** | **Shreyash Mane** | **Rutuja Katagi** |
| Core Architecture & Components | Design System & UX | Testing & QA | Documentation & Guides |
| [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)](https://www.github.com/aad1tyaaaaa) [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/aadityaaaaa) | [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)](https://github.com/janesmith) [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/janesmith) | [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)](https://github.com/bobjohnson) [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/bobjohnson) | [![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)](https://github.com/alicebrown) [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/alicebrown) |

</div>

---

## 📄 License

<div align="center">

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<br/>

```
MIT License • Copyright (c) 2025 Aaditya Jaiswar
```

</div>

---

<div align="center">

<!-- Animated Star Badge -->
<a href="https://github.com/your-username/LenDen">
  <img src="https://img.shields.io/badge/⭐_Star_this_repo-e94560?style=for-the-badge&labelColor=1a1a2e" alt="Star" />
</a>
<a href="https://github.com/your-username/LenDen/fork">
  <img src="https://img.shields.io/badge/🍴_Fork_it-0f3460?style=for-the-badge&labelColor=1a1a2e" alt="Fork" />
</a>
<a href="https://github.com/your-username/LenDen/issues">
  <img src="https://img.shields.io/badge/🐛_Report_Bug-16213e?style=for-the-badge&labelColor=1a1a2e" alt="Issues" />
</a>

<br/>
<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,50:16213e,100:0f3460&height=120&section=footer&animation=fadeIn" width="100%" />

<sub>Built with 💖 by the LenDen Team | Making financial management accessible for every Indian</sub>

</div>
