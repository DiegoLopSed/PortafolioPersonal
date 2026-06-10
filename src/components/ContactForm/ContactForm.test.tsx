import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from './ContactForm';

describe('ContactForm', () => {
  it('renderiza campos requeridos con etiquetas', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument();
  });

  it('muestra errores de validación con campos vacíos', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    expect(screen.getByText('El nombre es requerido')).toBeInTheDocument();
    expect(screen.getByText('El email es requerido')).toBeInTheDocument();
    expect(screen.getByText('El mensaje es requerido')).toBeInTheDocument();
  });

  it('valida formato de email', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/nombre/i), 'Diego');
    await user.type(screen.getByLabelText(/email/i), 'email-invalido');
    await user.type(screen.getByLabelText(/mensaje/i), 'Mensaje de prueba largo');
    await user.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    expect(screen.getByText('Ingresa un email válido')).toBeInTheDocument();
  });
});
