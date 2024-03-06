import { CountButtonProps } from '@/type/component';

export default function CountButton(props: CountButtonProps) {
  const { increase, decrease } = props;

  return (
    <section>
      <button data-testid='test-incrementBtn' onClick={increase}>
        +
      </button>
      <button data-testid='test-decrementBtn' onClick={decrease}>
        -
      </button>
    </section>
  );
}
