import { useState, type FormEvent } from 'react';
import './ContactForm.scss';

export interface ContactFormProps {
  /** Variante compacta para el footer */
  compact?: boolean;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Formulario de contacto compatible con Netlify Forms.
 *
 * Para activar en Netlify:
 * 1. Despliega el sitio en Netlify
 * 2. El atributo data-netlify="true" registra el formulario automáticamente
 * 3. Los envíos aparecen en el panel de Netlify > Forms
 *
 * Alternativa Formspree: cambia el action a tu endpoint de Formspree
 * y elimina los atributos data-netlify.
 */
export function ContactForm({ compact = false }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form__success" role="status">
        <h3>¡Mensaje enviado!</h3>
        <p>Gracias por contactarme. Te responderé lo antes posible.</p>
        <button
          type="button"
          className="btn btn--secondary btn--sm"
          onClick={() => setStatus('idle')}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      className={`contact-form ${compact ? 'contact-form--compact' : ''}`}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="contact-form__honeypot" aria-hidden="true">
        <label>
          No llenar: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className={compact ? 'contact-form__row' : ''}>
        <div className="form-group">
          <label htmlFor="contact-name">Nombre *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <span id="name-error" className="form-error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">Email *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <span id="email-error" className="form-error" role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      {!compact && (
        <div className="form-group">
          <label htmlFor="contact-subject">Asunto</label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            autoComplete="off"
          />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="contact-message">Mensaje *</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          rows={compact ? 3 : 5}
        />
        {errors.message && (
          <span id="message-error" className="form-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      {status === 'error' && (
        <p className="contact-form__error" role="alert">
          Hubo un error al enviar el mensaje. Intenta de nuevo o escríbeme directamente por
          email.
        </p>
      )}

      <button
        type="submit"
        className="btn btn--primary"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
