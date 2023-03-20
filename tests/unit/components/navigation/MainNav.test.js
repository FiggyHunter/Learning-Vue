import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import MainNav from '@/components/navigation/MainNav.vue';

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav);
    const companyName = screen.getByText('Leo Careers');
    expect(companyName).toBeInTheDocument();
  });

  it('displays menu items for navigation', () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole('listitem');
    console.log(navigationMenuItems);
    const navigationMenuTexts = navigationMenuItems.map((item) => {
      return item.textContent;
    });
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Leo Corp',
      'How we hire',
      'Students',
      'Jobs',
    ]);
  });
});

describe('when the user logs in', () => {
  it('displays user profile picture', async () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
    let userImage = screen.queryByRole('img', {
      name: /User Profile Image/i,
    });
    expect(userImage).not.toBeInTheDocument();

    const loginButton = screen.queryByRole('button', {
      name: /sign in/i,
    });

    await userEvent.click(loginButton);
    userImage = screen.queryByRole('img', {
      name: /User Profile Image/i,
    });
    expect(userImage).toBeInTheDocument();
  });
});
