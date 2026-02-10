# 🌐 Website Growth Analyzer

**A real-time website analysis tool that provides actionable business growth recommendations.**

## ⚡ What It Does

- **Fetches actual websites** from the internet (not fake/pre-programmed data)
- **Analyzes HTML structure**: CTAs, meta tags, headings, load speed
- **Calculates scores**: UX, SEO, Performance, Content (0-100)
- **Generates tailored tips** based on business type (Business/Portfolio/Blog/E-commerce)
- **6 unique tab designs** for better user engagement

---

## 🚀 Quick Start

### 1. Install Python Dependencies
```bash
pip install -r requirements.txt
```

### 2. Start Backend Server
```bash
python app.py
```
✅ You should see: `Server running on http://localhost:5000`

### 3. Start Frontend Server (New Terminal)
```bash
python -m http.server 8000
```

### 4. Open in Browser
- Navigate to: `http://localhost:8000`
- Select business goal (Business/Portfolio/Blog/E-commerce)
- Enter any website URL (e.g., `https://www.google.com`)
- Click **"Analyze Website"**
- View results in 6 professionally designed tabs

---

## ✨ Key Features

### 🔍 Real Website Analysis
- **Load Time Measurement**: Actual page speed testing
- **CTA Detection**: Finds call-to-action buttons/links
- **SEO Audit**: Meta description, H1 tags, favicon, viewport
- **SSL Check**: HTTPS verification
- **Open Graph Tags**: Social media optimization check
- **Content Analysis**: Heading structure, text length

### 🎨 6 Unique Tab Designs
1. **Overall Health** → Circular progress bars (visual impact)
2. **Top Issues** → Red warning cards (urgency)
3. **Quick Wins** → Cyan timeline (action checklist)
4. **SEO & Content** → Gradient cards (technical)
5. **Trust Signals** → Badge grid (audit view)
6. **Growth Tips** → Dot timeline (roadmap)

### 🎯 Goal-Based Recommendations
- **Business**: Lead capture forms, testimonials, contact CTAs
- **Portfolio**: Case studies, hire buttons, client testimonials
- **Blog**: Newsletter signup, internal linking, social sharing
- **E-commerce**: Checkout optimization, trust badges, cart recovery

---

## 📁 Project Structure

| File | Purpose |
|------|---------|
| `index.html` | Frontend structure with 6 tab sections |
| `style.css` | Navy/charcoal theme + unique tab designs |
| `script.js` | Frontend logic (API calls, tab switching, display) |
| `app.py` | **Backend API** (fetches & analyzes websites) |
| `requirements.txt` | Python dependencies |
| `favicon.svg` | Custom growth chart icon |

---

## 🔧 Troubleshooting

**❌ "Backend not running" error?**
- Ensure Flask server is started: `python app.py`
- Check it's running on port 5000
- Both servers (frontend + backend) must run simultaneously

**❌ No results showing?**
- Open browser console (F12) to check for errors
- Verify backend terminal shows the request
- Try a simple URL like `https://www.google.com` first

**❌ Port already in use?**
- Frontend: Use different port → `python -m http.server 9000`
- Backend: Edit `app.py` line 369 → change `port=5000` to `port=5001`

---

## 🎨 Color Scheme

**Professional Dark Theme:**
- **Primary Background**: Navy (#1a2332) & Charcoal (#2c3e50)
- **Accent Color**: Cyan (#00d4ff) - CTAs, highlights
- **Text**: White (#ffffff) - High contrast
- **Warning**: Red (#ff4757) - Critical issues
- **Success**: Green (#44bd32) - Trust signals

---

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Python 3.x + Flask
- **HTML Parser**: BeautifulSoup4
- **HTTP Client**: Requests library
- **Icons**: Font Awesome CDN

---

## 📊 How Analysis Works

```
1. User enters URL → Frontend sends to Backend
2. Backend fetches website using Requests
3. BeautifulSoup parses HTML
4. Backend checks: meta tags, headings, CTAs, SSL, images, load time
5. Backend calculates scores + generates recommendations
6. Backend returns JSON to Frontend
7. Frontend displays in 6 unique tab designs
```

**All analysis is REAL - no fake or pre-programmed data!**

---

## 🎓 For Evaluation/Demo

1. Open both terminals (backend + frontend)
2. Navigate to `localhost:8000` in browser
3. Select **"Business"** goal
4. Analyze `https://www.google.com`
5. Show all 6 tabs with unique designs
6. Switch to **"Portfolio"** goal → Notice Growth Tips change!

**This demonstrates the tool's intelligence - it adapts recommendations based on business type!**

---

## 👥 Credits

**Thought Stackers | SMVEC**

**Website Growth Analyzer** - Helping businesses convert more visitors into customers through data-driven insights.
