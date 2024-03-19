import { Text } from '@shopify/polaris';
import style from './header.module.css';

export function Header() {
  return (
    <header className={style.header}>
      <Text as='h1' variant='headingLg'>RevenueHunt</Text>
    </header>
  );
}
