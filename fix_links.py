import glob
import os

html_files = glob.glob('d:/SentsbySara/sentbysara_project/v2/*.html')

replacements = {
    # Header Icons
    '<button aria-label="Cart" class="icon-btn">': '<button aria-label="Cart" class="icon-btn" onclick="window.location.href=\'cart.html\'">',
    '<button aria-label="Account" class="icon-btn">': '<button aria-label="Account" class="icon-btn" onclick="window.location.href=\'#\'">',
    '<button aria-label="Wishlist" class="icon-btn">': '<button aria-label="Wishlist" class="icon-btn" onclick="window.location.href=\'#\'">',
    
    # Header Nav
    '<a href="#">CONTACT US</a>': '<a href="contact.html">CONTACT US</a>',
    '<a href="your-story.html">OUR STORY</a>': '<a href="our-story.html">OUR STORY</a>',
    
    # Footer - Shop
    '<a href="#">Slim Body Candles</a>': '<a href="shop.html">Slim Body Candles</a>',
    '<a href="#">Curvy Body Candles</a>': '<a href="shop.html">Curvy Body Candles</a>',
    '<a href="#">Plus Size Body Candles</a>': '<a href="shop.html">Plus Size Body Candles</a>',
    '<a href="#">Custom Body Candles</a>': '<a href="shop.html">Custom Body Candles</a>',
    
    # Footer - About
    '<a href="#">Our Story</a>': '<a href="our-story.html">Our Story</a>',
    '<a href="#">Sustainability</a>': '<a href="our-story.html">Sustainability</a>',
    '<a href="#">Candle Care</a>': '<a href="our-story.html">Candle Care</a>',
    
    # Footer - Gifting
    '<a href="#">Your Story</a>': '<a href="your-story.html">Your Story</a>',
    '<a href="#">Customisation</a>': '<a href="contact.html">Customisation</a>',
    '<a href="#">Corporate Gifting</a>': '<a href="contact.html">Corporate Gifting</a>',
    
    # Footer - Customer Service
    '<a href="#">Contact Us</a>': '<a href="contact.html">Contact Us</a>',
    '<a href="#">Shipping & Returns</a>': '<a href="contact.html">Shipping & Returns</a>',
    '<a href="#">Terms & Conditions</a>': '<a href="contact.html">Terms & Conditions</a>',
    '<a href="#">Privacy Policy</a>': '<a href="contact.html">Privacy Policy</a>',
    '<a href="#">FAQ\'s</a>': '<a href="contact.html">FAQ\'s</a>',

    # Social icons
    '<a href="#" aria-label="Instagram">': '<a href="https://instagram.com" target="_blank" aria-label="Instagram">',
    '<a href="#" aria-label="Facebook">': '<a href="https://facebook.com" target="_blank" aria-label="Facebook">',
    '<a href="#" aria-label="TikTok">': '<a href="https://tiktok.com" target="_blank" aria-label="TikTok">',
    '<a href="#" aria-label="Pinterest">': '<a href="https://pinterest.com" target="_blank" aria-label="Pinterest">',
}

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old_str, new_str in replacements.items():
        content = content.replace(old_str, new_str)
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Updated all links across all HTML files!")
