# Security Policy

## Supported Versions

Currently supported versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 0.0.x   | :white_check_mark: |

## Security Features

This portfolio implements several security best practices:

### 1. Content Security Policy (CSP)
- Restricts script sources to prevent XSS attacks
- Limits inline script execution
- Controls resource loading origins

### 2. Security Headers
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Enables XSS filtering
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information

### 3. Input Validation
- Email validation with regex patterns
- Input length restrictions
- Input sanitization before processing

### 4. Dependency Management
- Regular dependency updates
- No known vulnerabilities in dependencies
- Minimal dependency footprint

## Reporting a Vulnerability

If you discover a security vulnerability, please:

1. **DO NOT** open a public issue
2. Email: washimshaikh33@gmail.com
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### Response Timeline
- Initial response: Within 48 hours
- Status update: Within 7 days
- Fix deployment: Depends on severity (Critical: 24-48h, High: 1 week, Medium: 2 weeks)

## Security Best Practices for Users

If you're forking or using this code:

1. **Environment Variables**: Never commit `.env` files with sensitive data
2. **API Keys**: Use environment variables for all API keys
3. **Dependencies**: Run `npm audit` regularly
4. **Updates**: Keep dependencies up to date
5. **CSP**: Adjust Content Security Policy for your specific needs
6. **HTTPS**: Always deploy with HTTPS enabled

## Known Limitations

1. **Client-Side Validation**: Form validation is client-side only. For production with backend, add server-side validation.
2. **Rate Limiting**: No rate limiting on contact form. Consider adding if spam becomes an issue.
3. **CSRF Protection**: Not implemented as there's no backend. Add if you integrate a backend API.

## Security Checklist for Deployment

- [ ] Environment variables configured
- [ ] HTTPS enabled
- [ ] Security headers verified
- [ ] Dependencies audited (`npm audit`)
- [ ] CSP policy tested
- [ ] Error logging configured (not console.log in production)
- [ ] Sensitive data removed from code
- [ ] Access logs enabled
- [ ] Backup strategy in place

## Contact

For security concerns: washimshaikh33@gmail.com
