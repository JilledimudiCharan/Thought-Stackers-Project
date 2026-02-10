let selectedGoal = null;  
const goalCustomizations = {
    business: {
        healthExplanation: "Your service website has a clean foundation, but it's not set up to generate leads consistently. Business buyers need immediate clarity on three things: what you do, how you're different, and why they should contact you today. Right now, these aren't obvious enough, which means you're losing potential clients to competitors who communicate more directly.",
        growthSuggestions: [
            {
                title: "Add a 'Results' or 'Case Studies' section to prove your track record",
                description: "Business buyers want proof before they commit. Show specific results you've delivered for other clients with numbers: '  Increased sales by 40%' or 'Reduced costs by $50K annually.' This transforms skepticism into interest and can double your consultation requests."
            },
            {
                title: "Offer a free consultation or audit as your primary CTA",
                description: "Service businesses thrive on low-risk first steps. Offering a free consultation removes purchase anxiety and gets prospects talking to you. Once they're on a call, your close rate increases dramatically compared to cold outreach."
            },
            {
                title: "Build authority through educational content",
                description: "Create blog posts or guides that solve specific problems your target clients face. This positions you as an expert, improves your search rankings, and provides shareable content that attracts inbound leads passively while you focus on billable work."
            }
        ]
    },
    portfolio: {
        healthExplanation: "Your portfolio has visual appeal, but it's not optimized to convert website visitors into clients. The key problem is that potential clients can't quickly assess if you're the right fit for their project. You need to make it effortless for them to see your best work, understand your process, and reach out to start a conversation.",
        growthSuggestions: [
            {
                title: "Feature your 3 best projects prominently with before/after comparisons",
                description: "Don't make visitors hunt for your best work. Put your top 3 projects front and center with clear before/after results. This immediately demonstrates your capabilities and gives visitors confidence in your  skills. Hidden portfolios get 60% fewer inquiries."
            },
            {
                title: "Add a clear project inquiry form for each work sample",
                description: "When someone likes a specific project, they should be able to request something similar immediately. Add 'Interested in similar work?' buttons next to each portfolio piece to capture interest while motivation is highest."
            },
            {
                title: "Include a brief process overview showing how you work",
                description: "Clients want to know what working with you looks like. A simple 4-step process (Discovery → Design → Revisions → Delivery) reduces uncertainty and makes hiring you feel less risky. This alone can increase project inquiries by 25%."
            }
        ]
    },
    blog: {
        healthExplanation: "Your blog has valuable content, but you're not maximizing reader retention and growth. The core issue is that readers consume your content and then leave without becoming subscribers or regular visitors. You're working hard to create content but not building an audience that grows over time.",
        growthSuggestions: [
            {
                title: "Add an email signup form offering a content upgrade or exclusive guide",
                description: "Readers who enjoyed one article will likely enjoy more, but they'll forget about you without a subscription. Offer a free PDF guide or bonus content in exchange for email addresses. This turns one-time visitors into a growing audience you can reach repeatedly."
            },
            {
                title: "Include social sharing buttons and 'Click to Tweet' snippets",
                description: "Make it effortless for readers to share your best insights. Add one-click sharing for Twitter, LinkedIn, and Facebook. When readers share, you get free exposure to their networks, multiplying your reach without additional content creation."
            },
            {
                title: "Create a content series that encourages binge reading",
                description: "Instead of standalone posts, create series like '5-Part Marketing Masterclass.' This increases time on site, reduces bounce rate, and makes readers return for the next installment. Series content gets 3x more engaged readers than individual posts."
            }
        ]
    },
    ecommerce: {
        healthExplanation: "Your e-commerce site needs urgent attention to reduce   cart abandonment and increase completed purchases. Online shoppers are cautious—they need constant reassurance that they're making a safe, smart purchase. Right now, your site creates too much friction and doubt, causing shoppers to abandon their carts and buy from competitors instead.",
        growthSuggestions: [
            {
                title: "Display trust badges and security seals prominently near checkout",
                description: "Online shoppers fear credit card fraud and scams. Showing SSL certificates, payment security badges (Visa, PayPal, etc.), and money-back guarantees near your 'Buy Now' button reduces purchase anxiety by 50% and can increase completed transactions by 20-35%."
            },
            {
                title: "Add a persistent shopping cart icon showing item count and total",
                description: "Shoppers forget what they've added to their cart if it's not visible. A cart icon in your header that always shows item count and total price keeps purchases top-of-mind and increases checkout completion by 15-25%."
            },
            {
                title: "Implement  product reviews and ratings on every product page",
                description: "93% of shoppers read reviews before buying. Products with reviews convert 200-300% better than products without them. Start collecting reviews from every purchase and display them prominently—this is the most powerful trust signal in e-commerce."
            }
        ]
    }
};

const goalButtons = document.querySelectorAll('.goal-btn');
const urlInputSection = document.getElementById('urlInputSection');
const analyzeBtn = document.getElementById('analyzeBtn');
const websiteUrlInput = document.getElementById('websiteUrl');
const errorMsg = document.getElementById('errorMsg');
const resultsSection = document.getElementById('results');
const loading = document.getElementById('loading');
const resultsContent = document.getElementById('resultsContent');

goalButtons.forEach(button => {
    button.addEventListener('click', () => {
        goalButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedGoal = button.getAttribute('data-goal');

        websiteUrlInput.value = '';
        errorMsg.textContent = '';
        errorMsg.style = '';
        resultsSection.classList.add('hidden');
        resultsContent.classList.add('hidden');

        urlInputSection.classList.remove('hidden');
        urlInputSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(tabName) {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    const clickedTab = document.querySelector(`[data-tab="${tabName}"]`);
    const targetContent = document.getElementById(`tab-${tabName}`);

    if (clickedTab && targetContent) {
        clickedTab.classList.add('active');
        targetContent.classList.add('active');
    }
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        switchTab(tabName);
    });
});

function isValidURL(url) {
    const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    return urlPattern.test(url);
}

function displayProfessionalAnalysis(data) {
    const customization = selectedGoal ? goalCustomizations[selectedGoal] : null;

    document.getElementById('overallScore').textContent = data.overallScore;

    updateCircularProgress('uxCirclePath', 'uxScore', data.scores.ux, 25);
    updateCircularProgress('seoCirclePath', 'seoScore', data.scores.seo, 25);
    updateCircularProgress('perfCirclePath', 'perfScore', data.scores.performance, 25);
    updateCircularProgress('contentCirclePath', 'contentScore', data.scores.content, 25);

    const healthExplanation = customization?.healthExplanation || data.healthExplanation;
    document.getElementById('healthExplanation').textContent = healthExplanation;

    const leavingReasonsContainer = document.getElementById('leavingReasons');
    leavingReasonsContainer.innerHTML = '';
    data.leavingReasons.forEach(reason => {
        const reasonDiv = document.createElement('div');
        reasonDiv.className = 'leaving-item';
        reasonDiv.innerHTML = `
            <div class="leaving-problem">❌ ${reason.problem}</div>
            <div class="leaving-why"><strong>Why:</strong> ${reason.why}</div>
            <div class="leaving-impact"><strong>Impact:</strong> ${reason.impact}</div>
        `;
        leavingReasonsContainer.appendChild(reasonDiv);
    });

    const quickWinsContainer = document.getElementById('quickWinsList');
    quickWinsContainer.innerHTML = '';
    data.quickWins.forEach(win => {
        const winDiv = document.createElement('div');
        winDiv.className = 'quickwin-item';
        winDiv.innerHTML = `
            <div class="quickwin-fix">⚡ ${win.fix}</div>
            <div class="quickwin-how"><strong>How:</strong> ${win.how}</div>
            <div class="quickwin-impact"><strong>Impact:</strong> ${win.impact}</div>
        `;
        quickWinsContainer.appendChild(winDiv);
    });

    const seoContainer = document.getElementById('seoContent');
    seoContainer.innerHTML = '';
    data.seoContent.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'seo-card';
        itemDiv.innerHTML = `
            <h4>🔍 ${item.title}</h4>
            <p><strong>Issue:</strong> ${item.description}</p>
            <p><strong>Fix:</strong> ${item.suggestion}</p>
        `;
        seoContainer.appendChild(itemDiv);
    });

    const trustContainer = document.getElementById('trustAnalysis');
    trustContainer.innerHTML = `
        <div class="trust-overview">${data.trustAnalysis.overview}</div>
        <div class="trust-grid" id="trustGrid"></div>
        <div class="trust-impact">
            <strong>Impact:</strong> ${data.trustAnalysis.impactExplanation}
        </div>
    `;

    const trustGrid = document.getElementById('trustGrid');
    data.trustAnalysis.signals.forEach(signal => {
        const signalDiv = document.createElement('div');
        signalDiv.className = 'trust-item';
        signalDiv.innerHTML = `
            <div class="trust-status">${signal.status}</div>
            <div class="trust-detail">
                <h5>${signal.title}</h5>
                <p>${signal.detail}</p>
            </div>
        `;
        trustGrid.appendChild(signalDiv);
    });

    const growthSuggestions = customization?.growthSuggestions || data.growthSuggestions;
    const growthContainer = document.getElementById('growthSuggestions');
    growthContainer.innerHTML = '';
    growthSuggestions.forEach(suggestion => {
        const suggDiv = document.createElement('div');
        suggDiv.className = 'growth-item';
        suggDiv.innerHTML = `
            <h4>💡 ${suggestion.title}</h4>
            <p>${suggestion.description}</p>
        `;
        growthContainer.appendChild(suggDiv);
    });
}

function updateCircularProgress(pathId, scoreId, value, maxValue) {
    const percentage = (value / maxValue) * 100;
    const circle = document.getElementById(pathId);
    const scoreText = document.getElementById(scoreId);

    const radius = 40;
    const circumference = 2 * Math.PI * radius; 
    const offset = circumference - (percentage / 100) * circumference;

    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);

    let currentValue = 0;
    const increment = value / 50; 
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= value) {
            currentValue = value;
            clearInterval(timer);
        }
        scoreText.textContent = Math.round(currentValue);
    }, 30);
}

function analyzeWebsite() {
    const url = websiteUrlInput.value.trim();

    if (!url) {
        errorMsg.textContent = 'Please enter a website URL.';
        return;
    }

    if (!isValidURL(url)) {
        errorMsg.textContent = 'Please enter a valid URL (e.g., https://example.com).';
        return;
    }

    errorMsg.textContent = '';
    analyzeBtn.disabled = true;
    analyzeBtn.textContent = 'Analyzing...';

    resultsSection.classList.remove('hidden');
    loading.classList.remove('hidden');
    resultsContent.classList.add('hidden');

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url, goal: selectedGoal })
    })
        .then(response => response.json())
        .then(data => {
            loading.classList.add('hidden');

            if (data.error) {
                resultsSection.classList.add('hidden');
                errorMsg.textContent = `❌ Could not analyze website: ${data.error}. Please check the URL and try again.`;
                errorMsg.style.color = '#ff6b6b';
                errorMsg.style.padding = '15px';
                errorMsg.style.background = 'rgba(255, 107, 107, 0.1)';
                errorMsg.style.borderRadius = '10px';
                errorMsg.style.border = '2px solid #ff6b6b';
                analyzeBtn.disabled = false;
                analyzeBtn.textContent = 'Analyze Website';
                return;
            }

            resultsContent.classList.remove('hidden');

            displayProfessionalAnalysis(data);

            analyzeBtn.disabled = false;
            analyzeBtn.textContent = 'Analyze Website';
        })
        .catch(error => {
            console.error('Error:', error);
            loading.classList.add('hidden');
            resultsSection.classList.add('hidden');
            errorMsg.textContent = '❌ Backend not running! Start Flask server: python app.py';
            errorMsg.style.color = '#ff6b6b';
            errorMsg.style.padding = '15px';
            errorMsg.style.background = 'rgba(255, 107, 107, 0.1)';
            errorMsg.style.borderRadius = '10px';
            errorMsg.style.border = '2px solid #ff6b6b';
            analyzeBtn.disabled = false;
            analyzeBtn.textContent = 'Analyze Website';
        });
}

analyzeBtn.addEventListener('click', analyzeWebsite);

websiteUrlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        analyzeWebsite();
    }
});

websiteUrlInput.addEventListener('input', () => {
    errorMsg.textContent = '';
});
