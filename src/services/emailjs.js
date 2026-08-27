import emailjs from '@emailjs/browser'

const PUBLIC_KEY = 'TIXtjCPnwtGwqkRsR'
const SERVICE_ID = 'service_a6u6dl8'
const TEMPLATE_ID = 'template_7w5dvaq'
const REPLY_TEMPLATE_ID = 'template_lnxc5yq'

let initialized = false

export function initEmailJS() {
  if (!initialized) {
    emailjs.init(PUBLIC_KEY)
    initialized = true
  }
}

function formToObject(form) {
  const data = {}
  if (!form || !form.elements) return data
  for (const el of form.elements) {
    if (el.name && el.value) {
      data[el.name] = el.value
    }
  }
  return data
}

export async function sendContactForm(form) {
  initEmailJS()
  const params = formToObject(form)

  // Enviar notificación al dueño
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, params)

  // Enviar auto-respuesta al remitente
  const replyParams = {
    to_name: params.user_name,
    to_email: params.user_email,
    message: params.message,
  }
  await emailjs.send(SERVICE_ID, REPLY_TEMPLATE_ID, replyParams)
}
