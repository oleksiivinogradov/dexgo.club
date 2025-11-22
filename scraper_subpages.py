import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import json
import os

# List of subpages to scrape
SUBPAGES = [
    '/en/spacepioneers',
    '/en/trailblazer',
    '/en/toptokers',
    '/en/сyberwarriors',
    '/en/robots',
    '/en/gameplay',
    '/en/cities',
    '/en/routes',
    '/en/nft-marketplace'
]

BASE_URL = 'https://www.dexgo.club'
OUTPUT_DIR = 'scraped_subpages'
IMAGES_DIR = 'src/assets/scraped'

# Create output directory if it doesn't exist
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)

def scrape_page(url_path):
    """Scrape a single page and return structured data"""
    full_url = urljoin(BASE_URL, url_path)
    print(f"\nScraping: {full_url}")
    
    try:
        response = requests.get(full_url, timeout=30)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Error fetching {full_url}: {e}")
        return None
    
    soup = BeautifulSoup(response.content, 'html.parser')
    
    data = {
        'url': full_url,
        'path': url_path,
        'texts': [],
        'images': [],
        'links': []
    }
    
    # Extract text content
    for element in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'button', 'li']):
        text = element.get_text(strip=True)
        if text:
            data["texts"].append({
                "tag": element.name,
                "text": text,
                "parent_class": element.parent.get('class')
            })
    
    # Extract images
    for img in soup.find_all('img'):
        src = img.get('src')
        if src:
            full_img_url = urljoin(BASE_URL, src)
            filename = os.path.basename(urlparse(full_img_url).path)
            
            # Download image
            try:
                img_response = requests.get(full_img_url, timeout=30)
                img_response.raise_for_status()
                
                # Save with unique filename
                local_path = os.path.join(IMAGES_DIR, filename)
                counter = 1
                base_name, ext = os.path.splitext(filename)
                while os.path.exists(local_path):
                    filename = f"{base_name}_{counter}{ext}"
                    local_path = os.path.join(IMAGES_DIR, filename)
                    counter += 1
                
                with open(local_path, 'wb') as f:
                    f.write(img_response.content)
                
                data["images"].append({
                    "original_src": src,
                    "full_url": full_img_url,
                    "local_path": local_path,
                    "alt": img.get('alt', '')
                })
                print(f"  ✓ Downloaded: {filename}")
            except Exception as e:
                print(f"  ✗ Failed to download {full_img_url}: {e}")
    
    # Extract links
    for link in soup.find_all('a'):
        href = link.get('href')
        text = link.get_text(strip=True)
        if href:
            data["links"].append({
                "type": "link",
                "text": text,
                "href": href
            })
    
    # Extract buttons
    for button in soup.find_all('button'):
        text = button.get_text(strip=True)
        data["links"].append({
            "type": "button",
            "text": text
        })
    
    return data

def main():
    """Main scraping function"""
    all_data = {}
    
    for page_path in SUBPAGES:
        # Create safe filename from path
        safe_name = page_path.replace('/en/', '').replace('/', '_')
        
        # Scrape the page
        page_data = scrape_page(page_path)
        
        if page_data:
            # Save individual page data
            output_file = os.path.join(OUTPUT_DIR, f'{safe_name}.json')
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(page_data, f, indent=2, ensure_ascii=False)
            
            all_data[safe_name] = page_data
            print(f"✓ Saved data to {output_file}")
        else:
            print(f"✗ Failed to scrape {page_path}")
    
    # Save combined data
    combined_file = os.path.join(OUTPUT_DIR, 'all_subpages.json')
    with open(combined_file, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, indent=2, ensure_ascii=False)
    
    print(f"\n✓ All data saved to {OUTPUT_DIR}/")
    print(f"✓ Images saved to {IMAGES_DIR}/")
    print(f"\nScraped {len(all_data)} pages successfully!")

if __name__ == '__main__':
    main()
