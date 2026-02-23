// Pi Energy Footer - Include on all pages
(function() {
    const footerHTML = `
    <footer style="background: #0f1d2f; color: white; padding: 3rem 2rem 2rem; border-top: 1px solid #1a2942;">
        <div style="max-width: 1200px; margin: 0 auto;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 3rem; margin-bottom: 2rem;">
                <div>
                    <h4 style="color: #00d9ff; margin-bottom: 1rem; font-size: 1.2rem;">Program</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <a href="https://app.principleinnovation.tech" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; line-height: 2;">Check Eligibility</a>
                        <a href="/#how-it-works" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; line-height: 2;">How It Works</a>
                    </div>
                </div>
                
                <div>
                    <h4 style="color: #00d9ff; margin-bottom: 1rem; font-size: 1.2rem;">Disclosures</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <a href="/pricing_disclosure.html" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; line-height: 2;">Pricing Disclosure</a>
                        <a href="/privacy_policy.html" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; line-height: 2;">Privacy Policy</a>
                    </div>
                </div>
                
                <div>
                    <h4 style="color: #00d9ff; margin-bottom: 1rem; font-size: 1.2rem;">Support</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <a href="/contact.html" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; line-height: 2;">Contact Us</a>
                        <a href="#" onclick="document.getElementById('pi-chat-button')?.click(); return false;" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; line-height: 2;">AI Concierge</a>
                    </div>
                </div>
                
                <div>
                    <h4 style="color: #00d9ff; margin-bottom: 1rem; font-size: 1.2rem;">Company</h4>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <a href="/about_us.html" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; line-height: 2;">About Us</a>
                        <a href="/careers.html" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; line-height: 2;">Careers</a>
                    </div>
                </div>
            </div>
            
            <div style="max-width: 1200px; margin: 2rem auto 0; padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center; color: rgba(255, 255, 255, 0.6);">
                <p style="margin: 0;">&copy; Pi Ops Pty Ltd ABN 85 685 996 114 trading as Principle and Innovation (Pi). All rights reserved 2026.</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;">Service area: Gold Coast to Brisbane (Energex network). SAA-accredited installers. Eligibility criteria apply.</p>
            </div>
        </div>
    </footer>
    
    <style>
        footer a:hover {
            color: #00d9ff !important;
        }
    </style>
    `;

    // Insert footer when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        });
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
})();
