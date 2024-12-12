import { FormattedNumber, IntlProvider } from "react-intl";

export default function Currency({ value }: { value: number }) {
  return (
    <IntlProvider locale="pt-BR" defaultLocale="pt-BR">
      <FormattedNumber value={value} style="currency" currency="BRL" />
    </IntlProvider>
  );
}
