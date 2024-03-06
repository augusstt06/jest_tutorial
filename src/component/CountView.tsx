import { CountViewProps } from '@/type/component';

export default function CountView(props: CountViewProps) {
  const { count } = props;

  return (
    <div>
      <h1>CountView</h1>
      <div>현재 숫자: {count}</div>
    </div>
  );
}
