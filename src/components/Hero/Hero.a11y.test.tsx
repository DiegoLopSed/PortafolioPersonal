import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { axe } from 'vitest-axe';
import { Hero } from './Hero';

describe('Hero accesibilidad', () => {
  it('no tiene violaciones de accesibilidad', async () => {
    const { container } = render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
