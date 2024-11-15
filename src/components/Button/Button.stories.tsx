import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentType } from 'react';
import { KindIcon } from '../Icon/FontAwesomeIcon.types';
import { Button as ButtonComponent } from './Button';
import { Icon } from './primitive/Icon';

const meta = {
  title: 'COMPONENTS/Button',
  // render: (args) => <ButtonComponent.Button {...args}></ButtonComponent.Button>,
  tags: ['autodocs'],
  component: ButtonComponent.Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A button is an interactive and visual element within an application or website that allows users to perform actions or navigate with a click or tap. It is designed to draw attention and guide the user to interact with the interface to achieve specific goals, such as submitting a form, starting a search, or making a purchase.',
      },
    },
  },
  subcomponents: { Icon: Icon as ComponentType<unknown> },
  argTypes: {
    kind: {
      options: ['filled', 'outlined', 'dashed', 'text'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'filled' },
      },
    },
    status: {
      options: ['success', 'warning', 'error', 'info', 'default', 'primary', 'invert'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonComponent.Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// type IconButtonArgs = StoryObj<{
//   iconKind?: FontAwesomeIconProps['kind'];
//   iconName: FontAwesomeIconProps['iconName'];
//   size?: SizeType;
//   kind?: KindType;
//   status?: ButtonStatusType;
//   loading?: boolean;
//   disabled?: boolean;
//   children?: React.ReactNode;
// }>;

const ButtonTemplate = {
  render: ({
    iconButtonArgs,
    args,
  }: {
    args: Story['args'];
    iconButtonArgs: {
      iconName: string;
      iconKind?: KindIcon;
    };
  }) => {
    return (
      <ButtonComponent.Button {...args}>
        Click me
        <ButtonComponent.Icon
          kind={iconButtonArgs.iconKind}
          iconName={iconButtonArgs.iconName}
        />
      </ButtonComponent.Button>
    );
  },
};

export const Button: Story = {
  ...ButtonTemplate.render,
  args: {
    children: 'Click me',
    kind: 'filled',
    status: 'default',
    size: 'md',
    disabled: false,
    loading: false,
  },
};

// export const ButtonWithPrefix: IconButtonArgs = {
//   ...ButtonTemplate.render,
//   name: 'Button with prefix',
//   render: (args) =>
//     ButtonTemplate.render({
//       args: { ...args },
//       iconButtonArgs: { iconName: args.iconName, iconKind: args.iconKind },
//     }),
//   args: {
//     iconKind: 'solid',
//     iconName: 'fa-check',
//   },
//   argTypes: {
//     iconKind: {
//       options: ['solid', 'regular', 'brands'],
//       control: {
//         type: 'radio',
//       },
//       table: {
//         defaultValue: { summary: 'solid' },
//       },
//     },
//     iconName: {
//       description:
//         'Visit Font Awesome web page and search for the Icon that you want to use.',
//       type: 'string',
//       control: {
//         type: 'text',
//       },
//       table: {
//         defaultValue: { summary: 'fa-check' },
//       },
//     },
//   },
// };
