import emailjs from '@emailjs/browser'

const PUBLIC_KEY = 'TIXtjCPnwtGwqkRsR'
const SERVICE_ID = 'service_a6u6dl8'
const TEMPLATE_ID = 'template_7w5dvaq'

let initialized = false

export function initEmailJS() {
  if (!initialized) {
    emailjs.init(PUBLIC_KEY)
    initialized = true
  }
}

export function sendContactForm(form) {
  initEmailJS()
  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
}
