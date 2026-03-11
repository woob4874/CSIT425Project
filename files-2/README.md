# TaskFlow — Task Management Platform

> Built with React · Node.js · PostgreSQL · Auth0

---

## 📁 Project Structure

```
task-platform/
├── frontend/          # React + Vite app
├── backend/           # Node.js + Express API
├── .github/
│   └── workflows/     # GitHub Actions CI/CD
├── .gitignore         # Keeps secrets out of Git
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_ORG/task-platform.git
cd task-platform
```

### 2. Set Up Backend Environment

```bash
cd backend

# Copy the example file — this creates YOUR local .env
cp .env.example .env
```

Now open `backend/.env` in your editor and fill in the real values.
See the **Service Setup** section below for where to get each value.

### 3. Set Up Frontend Environment

```bash
cd ../frontend

# Copy the example file
cp .env.example .env
```

Open `frontend/.env` and fill in values to match your backend.

### 4. Install Dependencies & Run

```bash
# Backend
cd backend
npm install
npm run dev       # runs on http://localhost:5000

# Frontend (new terminal)
cd frontend
npm install
npm run dev       # runs on http://localhost:3000
```

---

## 🔑 Service Setup (Free Tiers)

### Auth0 (Authentication)
1. Go to [auth0.com](https://auth0.com) → Sign up free
2. Create Application → **Single Page Web Applications**
3. In Settings, copy **Domain** and **Client ID** → paste into both `.env` files
4. Set **Allowed Callback URLs**: `http://localhost:3000/callback`
5. Set **Allowed Logout URLs**: `http://localhost:3000`
6. Create an **API** in Auth0 → copy the Identifier → that's your `AUTH0_AUDIENCE`

### Neon (Database)
1. Go to [neon.tech](https://neon.tech) → Sign up free
2. Create a project → copy the **Connection String**
3. Paste it as `DATABASE_URL` in `backend/.env`

### Hugging Face (AI Feature)
1. Go to [huggingface.co](https://huggingface.co) → Sign up free
2. Settings → Access Tokens → New Token (read)
3. Paste as `HUGGINGFACE_API_KEY` in `backend/.env`

### Google Cloud Storage (File Attachments) — *optional*
1. [console.cloud.google.com](https://console.cloud.google.com) → Free Trial
2. Create a bucket → note the bucket name
3. IAM → Service Accounts → Create → download JSON key
4. Place the JSON file in `backend/` and set `GOOGLE_APPLICATION_CREDENTIALS=./your-key.json`
5. Add the JSON filename to `backend/.gitignore`!

---

## 🔒 GitHub Secrets (for CI/CD & Vercel/Netlify)

For GitHub Actions to work and for hosting deploys, you need to add secrets to GitHub:

1. Go to your repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** for each of these:

| Secret Name | Where to get it |
|---|---|
| `DATABASE_URL` | Neon dashboard |
| `AUTH0_DOMAIN` | Auth0 → Application Settings |
| `AUTH0_CLIENT_ID` | Auth0 → Application Settings |
| `AUTH0_CLIENT_SECRET` | Auth0 → Application Settings |
| `AUTH0_AUDIENCE` | Auth0 → APIs → Identifier |
| `JWT_SECRET` | Generate: `openssl rand -base64 32` |
| `VITE_API_URL` | Your deployed backend URL |
| `HUGGINGFACE_API_KEY` | Hugging Face → Access Tokens |

> ⚠️ **Never paste real secrets into code.** GitHub Secrets are encrypted and injected at build time.

---

## 🌿 Branching Strategy

```
main          ← production-ready code only
develop       ← integration branch
feature/*     ← individual features (e.g. feature/task-creation)
fix/*         ← bug fixes
```

**Workflow:**
1. Branch off `develop`: `git checkout -b feature/your-feature`
2. Commit your work with clear messages
3. Push and open a **Pull Request** into `develop`
4. Get a teammate to review before merging
5. `develop` → `main` when ready to deploy

---

## 📋 Team Members & Feature Ownership

| Feature | Owner |
|---|---|
| Auth & User Profiles | TBD |
| Task Creation & Management | TBD |
| Progress Tracking & Dashboards | TBD |
| Search & Filtering | TBD |
| UI/UX & Responsive Design | TBD |
| Database & Security | TBD |
| AI Feature Integration | TBD |

---

## 🛠️ Tech Stack

| Layer | Technology | Free Hosting |
|---|---|---|
| Frontend | React + Vite | Netlify / Vercel |
| Backend | Node.js + Express | Railway / Render |
| Database | PostgreSQL | Neon |
| Auth | Auth0 | Auth0 Free Tier |
| Storage | Google Cloud Storage | GCS Free Trial |
| AI | Hugging Face Inference API | HF Free Tier |
| CI/CD | GitHub Actions | GitHub Free |

---

## ❓ Common Issues

**"Missing environment variable" error on startup**
→ Make sure you ran `cp .env.example .env` and filled in all values.

**Auth0 redirect loop**
→ Double-check the Callback URL in Auth0 matches exactly: `http://localhost:3000/callback`

**Database connection refused**
→ Check your `DATABASE_URL` includes `?sslmode=require` at the end (required by Neon).
