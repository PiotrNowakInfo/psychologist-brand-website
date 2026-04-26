# katarzynagostkowska.pl / psycholog-online

[English](./README.md) | [Polski](./README_PL.md)

Nowoczesna strona internetowa gabinetu psychologiczno-psychoterapeutycznego Katarzyny Gostkowskiej-Kraczkowskiej, zaprojektowana i wdrożona jako elegancki, wiarygodny i lekki produkt webowy.

Projekt łączy dopracowany landing page, czytelną architekturę informacji, formularz kontaktowy, politykę prywatności oraz integrację Google Analytics opartą na zgodzie użytkownika.

## Preview

<img src="./docs/katarzynagostkowska-pl_cb.webp" alt="Widok strony głównej projektu" width="1200" />

<img src="./docs/katarzynagostkowska-pl_polityka-prywatnosci.webp" alt="Widok podstrony polityki prywatności" width="1200" />

## Zakres projektu

- landing page dopasowany do branży psychologicznej i terapeutycznej,
- sekcje: hero, o mnie, usługi, cennik, opinie i kontakt,
- dwujęzyczność `PL / EN`,
- formularz kontaktowy z komunikacją dotyczącą prywatności,
- osobna podstrona polityki prywatności,
- baner cookies z obsługą zgody na analitykę,
- Google Analytics uruchamiane dopiero po wyrażeniu zgody użytkownika,
- wdrożenie działające poprawnie na hostingu statycznym.

## Kluczowe decyzje projektowe

- spokojny, profesjonalny język wizualny oparty na indywidualnej palecie kolorów i eleganckiej typografii,
- wyraźne rozdzielenie zgody na kontakt przez formularz od zgody na analitykę,
- wdrożenie `gtag.js` zgodnie z zaleceniami Google, z domyślnym `analytics_storage: denied`,
- użycie `HashRouter`, aby zapewnić poprawne działanie odświeżania bez reguł rewrite po stronie serwera.

## Stack technologiczny

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- shadcn/ui
- Lucide React
- TanStack Query

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

## Dostępne skrypty

```bash
npm run dev
npm run build
npm run build:dev
npm run lint
npm run preview
```

## Routing i wdrożenie

Projekt używa `HashRouter`, dzięki czemu działa poprawnie także na prostym hostingu statycznym bez dostępu do reguł `Apache` lub `Nginx`.

Przykładowe adresy:

- `/#/`
- `/#/polityka-prywatnosci`

## Prywatność i analityka

- tag Google `gtag.js` jest osadzony zgodnie z zaleceniami Google,
- `analytics_storage` jest domyślnie ustawione na `denied`,
- analityka aktywuje się dopiero po wyraźnej zgodzie użytkownika,
- ustawienia cookies można zmienić z poziomu interfejsu,
- formularz zawiera osobny checkbox odnoszący się do polityki prywatności.

## Bezpieczeństwo repo

Repo nie zawiera klasycznych sekretów technicznych takich jak hasła, prywatne tokeny czy serwerowe klucze API.

W kodzie znajdują się publiczne informacje związane z projektem, takie jak dane kontaktowe gabinetu oraz identyfikator Google Analytics. Nie są to sekrety aplikacyjne, ale przed publikacją repo warto upewnić się, że wszystkie te dane są aktualne i przeznaczone do publicznego udostępnienia.

## Status

Projekt buduje się poprawnie w trybie produkcyjnym:

```bash
npm run build
```
