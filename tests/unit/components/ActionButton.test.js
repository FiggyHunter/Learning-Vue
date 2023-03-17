import { render, screen } from '@testing-library/vue';
import ActionButton from '@/components/ActionButton.vue';

describe('ActionButton', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'Sign In',
        type: 'primary',
      },
    });

    const button = screen.getByRole('button', { name: /sign in/i });
    expect(button).toBeInTheDocument();
  });

  it('Applies one of several styles to button', () => {
    render(ActionButton, {
      props: {
        text: 'Sign In',
        type: 'primary',
      },
    });
    const button = screen.getByRole('button', { name: /sign in/i });
    expect(button).toHaveClass('primary');
  });
});
