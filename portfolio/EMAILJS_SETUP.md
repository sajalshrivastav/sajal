# EmailJS Setup Guide - Direct Email Sending

## Quick Setup (10 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for free account
3. Verify your email

### Step 2: Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred provider)
4. Connect your Gmail account (ss.official2018@gmail.com)
5. Note the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Contact from {{from_name}} - Portfolio Website
```

**Body:**
```
Hi Sajal,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

Message:
{{message}}

---
Reply directly to this email to respond to {{from_name}}.
```

4. Set **To Email:** `ss.official2018@gmail.com`
5. Set **Reply To:** `{{from_email}}`
6. Save and note the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `user_abc123xyz`)

### Step 5: Update Contact.jsx
Replace these values in `src/components/Contact.jsx`:

```javascript
const serviceID = 'service_abc123' // Your Service ID
const templateID = 'template_xyz789' // Your Template ID  
const publicKey = 'user_abc123xyz' // Your Public Key
```

## Example Configuration:
```javascript
// In Contact.jsx, replace:
const serviceID = 'service_portfolio' // Replace with: service_abc123
const templateID = 'template_contact' // Replace with: template_xyz789
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with: user_abc123xyz
```

## Benefits:
- ✅ **Direct email delivery** to ss.official2018@gmail.com
- ✅ **No email client required** for users
- ✅ **Professional emails** with proper formatting
- ✅ **Reply-to functionality** - you can reply directly
- ✅ **Free tier:** 200 emails/month
- ✅ **Spam protection** included

## Testing:
1. Fill out your contact form
2. Check ss.official2018@gmail.com inbox
3. You should receive a formatted email
4. Reply button will respond to the user's email

## Troubleshooting:
- **Check spam folder** for test emails
- **Verify service connection** in EmailJS dashboard
- **Test template** using EmailJS dashboard
- **Check browser console** for error messages

Once configured, your contact form will send real emails directly to your inbox!