import { Meta } from '@storybook/react';
import { ComponentType } from 'react';
import { Input } from './Input';

const meta = {
  title: 'COMPONENTS/Input',
  component: Input.Root,
  tags: ['autodocs'],
  subcomponents: {
    Label: Input.Label as ComponentType<unknown>,
    Wrapper: Input.Wrapper as ComponentType<unknown>,
    PrefixIcon: Input.PrefixIcon as ComponentType<unknown>,
    SuffixIcon: Input.SuffixIcon as ComponentType<unknown>,
    Hint: Input.Hint as ComponentType<unknown>,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An input is an interactive form element used to collect user data. It allows various types of input, such as text, numbers, passwords, dates, and more. Inputs play a crucial role in data collection and can be customized with additional attributes for validation, accessibility, and styling.',
      },
    },
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Input.Root>;

export default meta;

export const Field = {
  render: (args: typeof Input.Root) => (
    <Input.Root {...args}>
      <Input.Label>E-mail</Input.Label>
      <Input.Wrapper>
        <Input.Field />
        <Input.SuffixIcon iconName="fa-envelope" />
      </Input.Wrapper>
      <Input.Hint>Insira um email válido</Input.Hint>
    </Input.Root>
  ),
};
