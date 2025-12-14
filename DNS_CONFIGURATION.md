# DNS Configuration for www.dexgo.club

## Current Setup: www.dexgo.club as Primary Domain

Since you're using `www.dexgo.club`, here's the EXACT DNS configuration you need:

---

## 🔧 DNS Records to Add at Your Domain Registrar

### For www.dexgo.club (Primary)
```
Type: CNAME
Name: www
Value: oleksiivinogradov.github.io
TTL: 3600 (or Auto)
```

### For dexgo.club (Redirect to www)
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

---

## 📋 Step-by-Step DNS Configuration

### 1. Log in to Your Domain Registrar
(Where you purchased dexgo.club - could be Namecheap, GoDaddy, Cloudflare, etc.)

### 2. Find DNS Settings
Look for:
- "DNS Management"
- "DNS Settings"
- "Manage DNS"
- "Advanced DNS"

### 3. Add the CNAME Record
```
Type: CNAME
Host/Name: www
Points to/Value: oleksiivinogradov.github.io
```
**Important**: Do NOT include `https://` or trailing dots

### 4. Add the A Records (for apex domain)
Add all 4 A records:
```
Host: @ (or blank)
Value: 185.199.108.153

Host: @
Value: 185.199.109.153

Host: @
Value: 185.199.110.153

Host: @
Value: 185.199.111.153
```

### 5. Save Changes
Click "Save" or "Apply Changes"

---

## ⏱️ Wait for DNS Propagation

- **Minimum**: 5-10 minutes
- **Typical**: 1-2 hours
- **Maximum**: 48 hours

### Check DNS Propagation
Use these tools:
- https://dnschecker.org
- Command: `dig www.dexgo.club`
- Command: `nslookup www.dexgo.club`

---

## ✅ Verify in GitHub

1. Go to: https://github.com/oleksiivinogradov/dexgo.club/settings/pages
2. Under "Custom domain", it should show: `www.dexgo.club`
3. Wait for the green checkmark ✓
4. Enable "Enforce HTTPS"

---

## 🔄 Alternative: Use dexgo.club (without www)

If you prefer `dexgo.club` instead of `www.dexgo.club`:

1. Change CNAME file back to `dexgo.club`
2. Only use the 4 A records (no CNAME record needed)
3. In GitHub Pages settings, enter: `dexgo.club`

---

## 🆘 Troubleshooting

### "DNS record could not be retrieved"
- **Cause**: DNS records not yet added or not propagated
- **Solution**: Add the CNAME record for `www` and wait 10-30 minutes

### "Domain is improperly configured"
- **Cause**: Wrong DNS configuration
- **Solution**: Make sure CNAME points to `oleksiivinogradov.github.io` (not the full URL)

### Both dexgo.club and www.dexgo.club should work
- **Setup**: Use both A records AND CNAME record as shown above
- **Result**: Both URLs will work, with one redirecting to the other

---

## 📝 Summary

**For www.dexgo.club to work:**
1. ✅ CNAME file updated to `www.dexgo.club`
2. ⏳ Add CNAME DNS record: `www` → `oleksiivinogradov.github.io`
3. ⏳ Add 4 A records for apex domain
4. ⏳ Wait for DNS propagation (10-30 minutes typically)
5. ⏳ Verify in GitHub Pages settings

**Next Step**: Add the DNS records at your domain registrar!
