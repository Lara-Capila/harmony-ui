import { Input } from './components/Input/Input';
import { useTheme } from './hooks/useTheme';

function App() {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex h-screen flex-col gap-4 bg-color-surface-base p-12">
      <button
        className="border border-primary text-3xl text-color-default"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>

      <Input.Root error required size="sm">
        <Input.Label>Senha</Input.Label>
        <Input.Wrapper>
          <Input.Password />
        </Input.Wrapper>
        <Input.Hint>Deu ruim!</Input.Hint>
      </Input.Root>

      <Input.Root size="lg">
        <Input.Label>Label LG</Input.Label>
        <Input.Wrapper>
          <Input.PrefixIcon iconName="fa-trash" />
          <Input.Field />
          <Input.SuffixIcon iconName="fa-trash" />
        </Input.Wrapper>
        <Input.Hint>Deu ruim!</Input.Hint>
      </Input.Root>

      <Input.Root size="sm">
        <Input.Label>Label SM</Input.Label>
        <Input.Wrapper>
          <Input.PrefixIcon iconName="fa-trash" />
          <Input.Field />
          <Input.SuffixIcon iconName="fa-trash" />
        </Input.Wrapper>
        <Input.Hint>Deu ruim!</Input.Hint>
      </Input.Root>
    </div>
  );
}

export default App;
