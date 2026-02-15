# EmailJS template — example for the Contact form

Copy this into EmailJS's **Template** editor. The Contact page in this project passes the following template variables:

- `from_name` — visitor name
- `from_email` — visitor email
- `message` — visitor message

Recommended template settings

- Template name: **Portfolio Contact Form**
- Subject: `New message from {{from_name}} — Portfolio Contact`
- Service: your created EmailJS service

---

## HTML template example

```html
<h2>New message from {{from_name}}</h2>
<p><strong>Email:</strong> {{from_email}}</p>
<hr />
<p><strong>Message</strong></p>
<p>{{message}}</p>
```

## Plain text example

```
New message from {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

## Notes
- The client sends: `{ from_name, from_email, message }` so use the same variable names in the EmailJS template.
- Use the `.env.example` or `.env.local.example` to provide keys locally (do not commit secrets).

---
