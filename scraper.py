import requests
from bs4 import BeautifulSoup
import os
import json
from urllib.parse import urljoin, urlparse

BASE_URL = "https://dexgo.club/en"
OUTPUT_DIR = "src/assets/scraped"
DATA_FILE = "scraped_data.json"

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

def scrape():
    print(f"Fetching {BASE_URL}...")
    try:
        response = requests.get(BASE_URL)
        response.raise_for_status()
    except Exception as e:
        print(f"Failed to fetch page: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    
    data = {
        "texts": [],
        "images": [],
        "links": []
    }

    # Extract Text
    # We'll try to grab text by sections or just all visible text
    # A simple approach is to grab all text nodes that are not empty
    # But let's try to be a bit more structured: h1, h2, h3, p, span, div (with text)
    
    for element in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'button', 'li']):
        text = element.get_text(strip=True)
        if text:
            data["texts"].append({
                "tag": element.name,
                "text": text,
                "parent_class": element.parent.get('class')
            })

    # Extract Images
    images = soup.find_all('img')
    for i, img in enumerate(images):
        src = img.get('src')
        if not src:
            continue
            
        full_url = urljoin(BASE_URL, src)
        filename = os.path.basename(urlparse(full_url).path)
        if not filename:
            filename = f"image_{i}.png"
            
        # Handle query parameters in filename
        if '?' in filename:
            filename = filename.split('?')[0]
            
        # Ensure unique filenames
        local_path = os.path.join(OUTPUT_DIR, filename)
        counter = 1
        base_name, ext = os.path.splitext(filename)
        while os.path.exists(local_path):
            filename = f"{base_name}_{counter}{ext}"
            local_path = os.path.join(OUTPUT_DIR, filename)
            counter += 1

        try:
            print(f"Downloading {full_url} to {local_path}...")
            img_data = requests.get(full_url).content
            with open(local_path, 'wb') as f:
                f.write(img_data)
            
            data["images"].append({
                "original_src": src,
                "full_url": full_url,
                "local_path": local_path,
                "alt": img.get('alt', '')
            })
        except Exception as e:
            print(f"Failed to download {full_url}: {e}")

    # Extract Links/Buttons
    for link in soup.find_all('a'):
        href = link.get('href')
        text = link.get_text(strip=True)
        if href:
            data["links"].append({
                "type": "link",
                "text": text,
                "href": href
            })
            
    for btn in soup.find_all('button'):
        text = btn.get_text(strip=True)
        data["links"].append({
            "type": "button",
            "text": text
        })

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"Scraping complete. Data saved to {DATA_FILE}")

if __name__ == "__main__":
    scrape()
